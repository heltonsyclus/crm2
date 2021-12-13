<template>
  <div>
    <CardEvento
      v-show="cardEvento"
      :dataEventual="data"
      @close="fecharCardEvento"
      @arrayAgenda="retornoArrayAgenda"
    />{{}}
    <div class="row justify-center">
      <span class="titulo-mes" style="padding:0px 20px;font-size:20px">{{
        this.nomeMes
      }}</span>
      <navigation-bar @hoje="onToday" @voltar="onPrev" @adiantar="onNext" />
      <div style="display: flex;width: 90%;">
        <q-calendar-month
          ref="calendar"
          v-model="selectedDate"
          animated
          bordered
          focusable
          hoverable
          no-active-date
          locale="pt-BR"
          :day-min-height="72"
          :day-height="0"
          short-weekday-label
          @change="onChange"
          @moved="onMoved"
          @click-date="onClickDay"
          @click-day="onClickDay"
          @click-workweek="onClickWorkweek"
          @click-head-workweek="onClickHeadWorkweek"
          @click-head-day="onClickHeadDay"
        >
          <template #week="{ scope: { week, weekdays } }">
            <template
              v-for="(computedEvent, index) in getWeekEvents(week, weekdays)"
              :key="index"
            >
              <div
                :class="badgeClasses(computedEvent)"
                :style="badgeStyles(computedEvent, week.length)"
              >
                <div
                  v-if="computedEvent.event && computedEvent.event.details"
                  class="title q-calendar__ellipsis"
                >
                  {{
                    computedEvent.event.title +
                      (computedEvent.event.time
                        ? " - " + computedEvent.event.time
                        : "")
                  }}
                  <q-tooltip>{{ computedEvent.event.details }}</q-tooltip>
                </div>
              </div>
            </template>
          </template>
        </q-calendar-month>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QCalendarMonth,
  daysBetween,
  isOverlappingDates,
  parsed,
  parseDate,
  today,
  indexOf
} from "@quasar/quasar-ui-qcalendar/src/index.js";
import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass";
import CardEvento from "app/src/components/Cards/CardEvento.vue";
import NavigationBar from "app/src/components/Cards/NavigationBar.vue";
import { defineComponent } from "vue";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

const CURRENT_DAY = new Date();
function getCurrentDay(day) {
  const newDay = new Date(CURRENT_DAY);
  newDay.setDate(day);
  const tm = parseDate(newDay);
  return tm.date;
}

export default defineComponent({
  name: "CardCalendarioMes",
  components: {
    QCalendarMonth,
    NavigationBar,
    CardEvento
  },
  data() {
    return {
      selectedDate: today(),
      cardEvento: false,
      data: "",
      nomeMes: new Date().toLocaleString("pt-br", { month: "long" }),
      arrayDia: null,
      objArrayAgenda: []
    };
  },
  methods: {
    getWeekEvents(week, weekdays) {
      const firstDay = parsed(week[0].date + " 00:00");
      const lastDay = parsed(week[week.length - 1].date + " 23:59");
      const eventsWeek = [];
      this.events.forEach((event, id) => {
        const startDate = parsed(event.start + " 00:00");
        const endDate = parsed(event.end + " 23:59");

        if (isOverlappingDates(startDate, endDate, firstDay, lastDay)) {
          const left = daysBetween(firstDay, startDate, true);
          const right = daysBetween(endDate, lastDay, true);
          eventsWeek.push({
            id, // index event
            left, // Position initial day [0-6]
            right, // Number days available
            size: week.length - (left + right), // Size current event (in days)
            event // Info
          });
        }
      });

      const events = [];
      if (eventsWeek.length > 0) {
        const infoWeek = eventsWeek.sort((a, b) => a.left - b.left);
        infoWeek.forEach((_, i) => {
          this.insertEvent(events, week.length, infoWeek, i, 0, 0);
        });
      }
      return events;
    },

    insertEvent(events, weekLength, infoWeek, index, availableDays, level) {
      const iEvent = infoWeek[index];
      if (iEvent !== undefined && iEvent.left >= availableDays) {
        // If you have space available, more events are placed
        if (iEvent.left - availableDays) {
          // It is filled with empty events
          events.push({ size: iEvent.left - availableDays });
        }
        // The event is built
        events.push({ size: iEvent.size, event: iEvent.event });

        if (level !== 0) {
          // If it goes into recursion, then the item is deleted
          infoWeek.splice(index, 1);
        }
        const currentAvailableDays = iEvent.left + iEvent.size;
        if (currentAvailableDays < weekLength) {
          const indexNextEvent = indexOf(
            infoWeek,
            e => e.id !== iEvent.id && e.left >= currentAvailableDays
          );

          this.insertEvent(
            events,
            weekLength,
            infoWeek,
            indexNextEvent !== -1 ? indexNextEvent : index,
            currentAvailableDays,
            level + 1
          );
        } // else: There are no more days available, end of iteration
      } else {
        events.push({ size: weekLength - availableDays });
        // end of iteration
      }
    },

    badgeClasses(computedEvent) {
      if (computedEvent.event !== undefined) {
        return {
          "my-event": true,
          "text-white": true,
          [`bg-${computedEvent.event.bgcolor}`]: true,
          "rounded-border": true,
          "q-calendar__ellipsis": true
        };
      }
      return {
        "my-void-event": true
      };
    },

    badgeStyles(computedEvent, weekLength) {
      const s = {};
      if (computedEvent.size !== undefined) {
        s.width = (100 / weekLength) * computedEvent.size + "%";
      }
      return s;
    },

    isBetweenDatesWeek(dateStart, dateEnd, weekStart, weekEnd) {
      return (
        (dateEnd < weekEnd && dateEnd >= weekStart) ||
        dateEnd === weekEnd ||
        (dateEnd > weekEnd && dateStart <= weekEnd)
      );
    },

    onToday() {
      this.$refs.calendar.moveToToday();
    },

    onPrev() {
      this.$refs.calendar.prev();
    },

    onNext() {
      this.$refs.calendar.next();
    },

    onMoved(data) {
      var meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ];
      this.nomeMes = meses[data.month - 1];
    },

    onChange(data) {
      //  this.nomeMes = new Date().toLocaleString("pt-br", { month: "long" });
    },

    onClickDay(data) {
      this.cardEvento = true;
      var meses = [
        "Dezembro",
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro"
      ];
      var semanas = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
      ];
      var arraySemana = data.scope.timestamp.weekday;
      this.arrayDia = data.scope.timestamp.day;
      var arrayMes = data.scope.timestamp.month;
      this.data =
        semanas[arraySemana] + ", " + this.arrayDia + " de " + meses[arrayMes];
    },
    fecharCardEvento() {
      this.cardEvento = false;
    },
    retornoArrayAgenda(arrayAgenda) {
      this.objArrayAgenda = arrayAgenda;
      this.objArrayAgenda.start = getCurrentDay(this.arrayDia);
      this.objArrayAgenda.end = getCurrentDay(this.arrayDia);
       this.events=this.objArrayAgenda;
    },
    onClickWorkweek(data) {
      //console.log("onClickWorkweek", data);
    },
    onClickHeadDay(data) {
      //console.log("onClickHeadDay", data);
    },
    onClickHeadWorkweek(data) {
      //console.log("onClickHeadWorkweek", data);
    }
  },
  setup() {
    const $store = useStore();
    const events = computed({
      get: () => $store.state.showcase.events,
      set: val => {
        $store.commit("showcase/eventosAgenda", val);
      }
    });
    const miniState = ref(false);
    return {
      events,
      miniState,
      drawerClick(e) {
        if (miniState.value) {
          miniState.value = false;
          e.stopPropagation();
        }
      }
    };
  }
});
</script>

<style lang="sass" scoped>
.titulo-mes
 font-size:20px
 font-weight:700
 text-transform: capitalize

.my-event
  position: relative
  display: inline-flex
  white-space: nowrap
  font-size: 12px
  height: 16px
  max-height: 16px
  margin: 1px 0 0 0
  justify-content: center
  text-overflow: ellipsis
  overflow: hidden
  cursor: pointer

.title
  position: relative
  display: flex
  justify-content: center
  align-items: center
  height: 100%

.my-void-event
  display: inline-flex
  white-space: nowrap
  height: 1px

.text-white
  color: white

.bg-blue
  background: blue

.bg-green
  background: green

.bg-orange
  background: orange

.bg-red
  background: red

.bg-teal
  background: teal

.bg-grey
  background: grey

.bg-purple
  background: purple

.rounded-border
  border-radius: 2px
</style>
