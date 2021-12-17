<template>
  <div>
    <BarraLayout
      @OnClick="OnClickBarra"
      @onClickFiltros="EsconderCardInputs"
      @valorInputPesquisa="modelArray"
      :ConteudoBtn="Grupos"
      Aplicacao="Agenda"
      :nomeMes="dataMensal"
      @hoje="onToday"
      @voltar="onPrev"
      @adiantar="onNext"
    />
    <div>
      <CardEvento
        v-show="cardEvento"
        :dataEventual="data"
        :dataEscolhido="this.dataEscohida"
        :horarioEscolhido="horaAtual"
        @close="fecharCardEvento"
        @arrayAgenda="retornoArrayAgenda"
      />
      <CardCalendarioAtividade
        v-show="CardCalendarioAtividade"
        :informacoesCardCalendario="arrayCardAtividade"
        @close="fecharCardEvento"
      />
      <div class="flex justify-between items-center">
        <div
          style="display: flex;width: 100%;"
          v-if="calendarioAtual === 'Mensal'"
        >
          <q-calendar-month
            ref="calendar"
            v-model="selectedDate"
            animated
            bordered
            focusable
            hoverable
            no-active-date
            locale="pt-BR"
            :day-min-height="82"
            :day-height="0"
            short-weekday-label
            @change="onChange"
            @moved="onMoved"
            @click-date="onClickDate"
            @click-day="onClickDay"
            @click-workweek="onClickWorkweek"
            @click-head-workweek="onClickHeadWorkweek"
            @click-head-day="onClickHeadDay"
          >
            <template #week="{ scope: { week, weekdays } }">
              <template
                v-for="(computedEvent, i) in getWeekEvents(week, weekdays)"
                :key="i"
              >
                <div
                  @click.prevent="abrirCardAtividade(computedEvent)"
                  :class="badgeClasses(computedEvent)"
                  :style="badgeStyles(computedEvent, week.length)"
                >
                  <template v-if="computedEvent.event">
                    <q-icon
                      :name="computedEvent.event.icon"
                      class="q-mr-xs"
                      style="padding:2px"
                    ></q-icon>
                    <span class="ellipsis">{{
                      computedEvent.event.title
                    }}</span>
                  </template>
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

        <div
          style="display: flex;width: 100%; height: 520px;"
          v-if="calendarioAtual === 'Semanal'"
        >
          <q-calendar-day
            ref="calendar"
            v-model="selectedDate"
            view="week"
            animated
            bordered
            transition-next="slide-left"
            transition-prev="slide-right"
            no-active-date
            :hour24-format="hour24"
            :interval-minutes="15"
            :interval-start="24"
            :interval-count="68"
            locale="pt-BR"
            :interval-height="28"
            @change="onChange"
            @moved="onMoved"
            @click-date="onClickDate"
            @click-time="onClickTime"
            @click-interval="onClickInterval"
            @click-head-intervals="onClickHeadIntervals"
            @click-head-day="onClickHeadDay"
          >
            <template #head-day-event="{ scope: { timestamp } }">
              <div
                style="display: flex; justify-content: center; flex-wrap: wrap; padding: 2px;"
              >
                <template
                  v-for="event in eventsMapDia[timestamp.date]"
                  :key="event.id"
                >
                  <q-badge
                    v-if="!event.time"
                    :class="badgeClassesDia(event, 'header')"
                    :style="badgeStylesDia(event, 'header')"
                    style="width: 100%; cursor: pointer; height: 12px; font-size: 10px; margin: 1px;"
                  >
                    <q-icon
                      v-if="event.icon"
                      :name="event.icon"
                      class="q-mr-xs"
                    ></q-icon
                    ><span class="ellipsis">{{ event.title }}</span>
                  </q-badge>
                  <q-badge
                    v-else
                    :class="badgeClassesDia(event, 'header')"
                    :style="badgeStylesDia(event, 'header')"
                    style="margin: 1px; width: 10px; max-width: 10px; height: 10px; max-height: 10px"
                    @click="scrollToEventDia(event)"
                  >
                    <q-tooltip>{{
                      event.time + " - " + event.details
                    }}</q-tooltip>
                  </q-badge>
                </template>
              </div>
            </template>

            <template
              #day-body="{ scope: { timestamp, timeStartPos, timeDurationHeight } }"
            >
              <template
                v-for="event in getEventsDia(timestamp.date)"
                :key="event.id"
              >
                <div
                  v-if="event.time !== undefined"
                  class="my-evento"
                  :class="badgeClassesDia(event, 'body')"
                  :style="
                    badgeStylesDia(
                      event,
                      'body',
                      timeStartPos,
                      timeDurationHeight
                    )
                  "
                >
                  <span class="title q-calendar__ellipsis">
                    <q-icon
                      v-if="event.icon"
                      :name="event.icon"
                      class="q-mr-xs"
                    ></q-icon>
                    {{ event.title }}
                    <q-tooltip>{{ event.details }}</q-tooltip>
                  </span>
                </div>
              </template>
            </template>
          </q-calendar-day>
        </div>

        <div
          style="display: flex;width: 100%;  height: 520px;"
          v-if="calendarioAtual === 'Diário'"
        >
          <q-calendar-day
            ref="calendar"
            v-model="selectedDate"
            view="day"
            animated
            short-weekday-label
            bordered
            transition-next="slide-left"
            transition-prev="slide-right"
            no-active-date
            :hour24-format="hour24"
            :interval-minutes="15"
            :interval-start="24"
            :interval-count="68"
            locale="pt-BR"
            :interval-height="28"
            @change="onChange"
            @moved="onMovedDia"
            @click-date="onClickDateDia"
            @click-time="onClickTime"
            @click-interval="onClickInterval"
            @click-head-intervals="onClickHeadIntervals"
            @click-head-day="onClickHeadDay"
          >
            <template #head-day-event="{ scope: { timestamp } }">
              <div
                style="display: flex; justify-content: center; flex-wrap: wrap; padding: 2px;"
              >
                <template
                  v-for="event in eventsMapDia[timestamp.date]"
                  :key="event.id"
                >
                  <q-badge
                    v-if="!event.time"
                    :class="badgeClassesDia(event, 'header')"
                    :style="badgeStylesDia(event, 'header')"
                    style="width: 100%; cursor: pointer; height: 12px; font-size: 10px; margin: 1px;"
                  >
                    <div class="title q-calendar__ellipsis">
                      {{ event.title }}
                      <q-tooltip>{{ event.details }}</q-tooltip>
                    </div>
                  </q-badge>
                  <q-badge
                    v-else
                    :class="badgeClassesDia(event, 'header')"
                    :style="badgeStylesDia(event, 'header')"
                    style="margin: 1px; width: 10px; max-width: 10px; height: 10px; max-height: 10px; cursor: pointer"
                    @click="scrollToEventDia(event)"
                  >
                    <q-tooltip>{{
                      event.time + " - " + event.details
                    }}</q-tooltip>
                  </q-badge>
                </template>
              </div>
            </template>

            <template
              #day-body="{ scope: { timestamp, timeStartPos, timeDurationHeight } }"
            >
              <template
                v-for="event in getEventsDia(timestamp.date)"
                :key="event.id"
              >
                <div
                  v-if="event.time !== undefined"
                  class="my-evento"
                  :class="badgeClassesDia(event, 'body')"
                  :style="
                    badgeStylesDia(
                      event,
                      'body',
                      timeStartPos,
                      timeDurationHeight
                    )
                  "
                >
                  <div class="title q-calendar__ellipsis">
                    {{ event.title }}
                    <q-tooltip>{{
                      event.time + " - " + event.details
                    }}</q-tooltip>
                  </div>
                </div>
              </template>
            </template>
          </q-calendar-day>
        </div>
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
  indexOf,
  QCalendarDay,
  addToDate,
  parseTimestamp,
  isBetweenDates,
  parseTime
} from "@quasar/quasar-ui-qcalendar/src/index.js";
import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarDay.sass";
import CardCalendarioAtividade from "app/src/components/Cards/CardCalendarioAtividade.vue";
import CardEvento from "app/src/components/Cards/CardEvento.vue";
import BarraLayout from "src/layouts/BarraLayout.vue";
import { defineComponent } from "vue";
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
  components: {
    QCalendarMonth,
    CardEvento,
    QCalendarDay,
    CardCalendarioAtividade,
    BarraLayout
  },
  name: "Agenda",

  data() {
    return {
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      Grupos: [],
      selectedDate: today(),
      cardEvento: false,
      data: null,
      nomeMes: new Date().toLocaleString("pt-br", { month: "long" }),
      nomeAno: new Date().getFullYear(),
      arrayDia: null,
      dataPesquisada: null,
      hour24: true,
      dataEscohida: null,
      events: [],
      horaAtual: null,
      CardCalendarioAtividade: false,
      arrayCardAtividade: []
    };
  },
  methods: {
    OnClickValor(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.Grupo = this.ObjDashboard["grupos"][IndexGrupo];
    },
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

    abrirCardAtividade(computedEvent) {
      this.arrayCardAtividade = [];
      this.arrayCardAtividade.push(computedEvent.event);
      this.CardCalendarioAtividade = true;
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

    badgeClassesDia(event, type) {
      const isHeader = type === "header";
      return {
        [`text-white bg-${event.bgcolor}`]: true,
        "full-width": !isHeader && (!event.side || event.side === "full"),
        "left-side": !isHeader && event.side === "left",
        "right-side": !isHeader && event.side === "right",
        "rounded-border": true
      };
    },
    badgeStylesDia(
      event,
      type,
      timeStartPos = undefined,
      timeDurationHeight = undefined
    ) {
      const s = {};
      if (timeStartPos && timeDurationHeight) {
        s.top = timeStartPos(event.time) + "px";
        s.height = timeDurationHeight(event.duration) + "px";
      }
      s["align-items"] = "flex-start";
      return s;
    },

    getEventsDia(dt) {
      // get all events for the specified date
      const events = this.eventsMapDia[dt] || [];

      if (events.length === 1) {
        events[0].side = "full";
      } else if (events.length === 2) {
        // this example does no more than 2 events per day
        // check if the two events overlap and if so, select
        // left or right side alignment to prevent overlap
        const startTime = addToDate(parsed(events[0].date), {
          minute: parseTime(events[0].time)
        });
        const endTime = addToDate(startTime, { minute: events[0].duration });
        const startTime2 = addToDate(parsed(events[1].date), {
          minute: parseTime(events[1].time)
        });
        const endTime2 = addToDate(startTime2, { minute: events[1].duration });
        if (
          isBetweenDates(startTime2, startTime, endTime, true) ||
          isBetweenDates(endTime2, startTime, endTime, true)
        ) {
          events[0].side = "left";
          events[1].side = "right";
        } else {
          events[0].side = "full";
          events[1].side = "full";
        }
      }

      return events;
    },

    scrollToEventDia(event) {
      this.$refs.calendar.scrollToTime(event.time, 350);
    },

    onMovedDia(data) {
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

    onClickDateDia(data) {
      this.horaAtual = new Date().toLocaleString("pt-br", {
        hour: "numeric",
        minute: "numeric"
      });
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
      this.dataEscohida = data.scope.timestamp.date;
      this.data =
        semanas[arraySemana] + ", " + this.arrayDia + " de " + meses[arrayMes];
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

    onClickDate(data) {
      this.horaAtual = new Date().toLocaleString("pt-br", {
        hour: "numeric",
        minute: "numeric"
      });
      this.onClickDay(data);
      // console.log(console.log("onClickDate", data));
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
      //  console.log((this.dataEscohida = data.start));
    },

    onClickTime(data) {
      this.horaAtual = "";
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
      this.dataEscohida = data.scope.timestamp.date;
      this.data =
        semanas[arraySemana] + ", " + this.arrayDia + " de " + meses[arrayMes];
      this.cardEvento = true;
      this.horaAtual = data.scope.timestamp.time;
    },
    onClickDay(data) {
      this.horaAtual = new Date().toLocaleString("pt-br", {
        hour: "numeric",
        minute: "numeric"
      });
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
      this.dataEscohida = data.scope.timestamp.date;
      var arraySemana = data.scope.timestamp.weekday;
      this.arrayDia = data.scope.timestamp.day;
      var arrayMes = data.scope.timestamp.month;
      this.data =
        semanas[arraySemana] + ", " + this.arrayDia + " de " + meses[arrayMes];
    },

    fecharCardEvento() {
      this.cardEvento = false;
      this.CardCalendarioAtividade = false;
    },

    retornoArrayAgenda(arrayAgenda) {
      this.events.push(arrayAgenda);
      console.log(this.events);
    },

    onClickWorkweek(data) {
      // console.log("onClickWorkweek", data);
    },

    onClickHeadDay(data) {
      console.log("onClickHeadDay", data);
    },

    onClickHeadWorkweek(data) {
      // console.log("onClickHeadWorkweek", data);
    },

    onClickInterval(data) {
      //  console.log("onClickInterval", data);
    },
    onClickHeadIntervals(data) {
      //   console.log("onClickHeadIntervals", data);
    },
    handleResize() {
      console.log(window.innerWidth);
    }
  },
  computed: {
    eventsMapDia() {
      const map = {};
      this.events.forEach(event => {
        if (!map[event.date]) {
          map[event.date] = [];
        }
        map[event.date].push(event);
        if (event.days) {
          let timestamp = parseTimestamp(event.date);
          let days = event.days;

          do {
            timestamp = addToDate(timestamp, { day: 1 });
            if (!map[timestamp.date]) {
              map[timestamp.date] = [];
            }
            map[timestamp.date].push(event);
          } while (--days > 0);
        }
      });
      return map;
    },
    dataMensal() {
      return this.nomeMes + ", " + this.nomeAno;
    }
  },
  created() {
    const json =
      '{"id_dashboard":6,"dashboard":"Agenda","grupos":[{"id_grupo":1,"grupo":"Calendário","icone":"edit_calendar"}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeRouteEnter(to, from, next) {
    //let login = JSON.parse(localStorage.getItem("login"));
    const token = "";
    if (!token) {
      alert("Você não possue autorização!");
      next("");
    }
    next();
  },
  setup() {
    const $store = useStore();
    const calendarioAtual = computed({
      get: () => $store.state.showcase.calendarioAtual
    });
    const calendarioEventos = computed({
      get: () => $store.state.showcase.calendarioEventos
    });
    const login = computed({
      get: () => $store.state.showcase.login
    });
    return {
      login,
      calendarioAtual,
      calendarioEventos
    };
  }
});
</script>

<style lang="sass" scoped>
.titulo-mes
 font-size:20px
 font-weight:700
 text-transform: capitalize

.my-evento
  position: absolute
  font-size: 12px
  justify-content: center
  margin: 0 1px
  text-overflow: ellipsis
  overflow: hidden
  cursor: pointer

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
