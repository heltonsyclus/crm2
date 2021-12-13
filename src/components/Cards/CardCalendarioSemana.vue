<template>
  <div class="subcontent">
    <CardEvento
      v-show="cardEvento"
      :dataEventual="dataFormatada"
      @close="fecharCardEvento"
      @arrayAgenda="retornoArrayAgenda"
    />
    <div class="row justify-center">
      <span class="titulo-mes" style="padding:0px 20px;font-size:20px">{{
        this.nomeMes
      }}</span>
      <navigation-bar @hoje="onToday" @voltar="onPrev" @adiantar="onNext" />

      <div style="display: flex;width: 90%; height: 400px;">
        <q-calendar-day
          ref="calendar"
          v-model="selectedDate"
          view="week"
          :weekdays="weekdays"
          animated
          locale="pt-BR"
          short-weekday-label
          bordered
          @change="onChange"
          @moved="onMoved"
          @click-date="onClickDate"
          @click-time="onClickTime"
          @click-interval="onClickInterval"
          @click-head-intervals="onClickHeadIntervals"
          @click-head-day="onClickHeadDay"
        >
          <template #head-days-events="{ scope: { days, ref } }">
            <div :ref="ref" class="inner-row">
              <template v-for="(day, index) in days" :key="index">
                <template
                  v-for="event in allDayEventsMap[day.date]"
                  :key="event.id"
                >
                  <div
                    class="my-event"
                    :class="badgeClasses(event)"
                    :style="badgeStyles(day, event)"
                  >
                    <span class="title q-calendar__ellipsis">
                      {{ event.title }}
                      <q-tooltip>{{ event.details }}</q-tooltip>
                    </span>
                  </div>
                </template>
              </template>
            </div>
          </template>
        </q-calendar-day>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QCalendarDay,
  addToDate,
  parseTimestamp,
  getStartOfWeek,
  today
} from "@quasar/quasar-ui-qcalendar/src/index.js";
import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarDay.sass";
import NavigationBar from "app/src/components/Cards/NavigationBar.vue";
import CardEvento from "app/src/components/Cards/CardEvento.vue";
import { defineComponent, ref, computed, onBeforeMount } from "vue";

export default defineComponent({
  name: "CardCalendarioSemana",
  components: {
    QCalendarDay,
    NavigationBar,
    CardEvento
  },
  setup() {
    const calendar = ref(null);
    const selectedDate = ref(today());
    const weekdays = [0, 1, 2, 3, 4, 5, 6];
    // we only need 2 events for this example
    const cardEvento = ref(false);
    const dataFormatada = ref(null);
    const nomeMes = new Date().toLocaleString("pt-br", { month: "long" });
    const arrayDia = ref(null);
    const objArrayAgenda = ref([]);
    const events = [
      {
        id: 1,
        title: "Vacation",
        details: "Time at the cabin",
        date: "",
        days: 1,
        time: "08:11",
        allDay: true,
        bgcolor: "orange",
      },
      {
        id: 2,
        title: "Training",
        details: "Javascript 101",
        date: "",
        days: 1,
        time: "10:00",
        allDay: true,
        bgcolor: "green"
      },
      {
        id: 3,
        title: "rock",
        details: "Javascript 101",
        date: "",
        days: 1,
        time: "11:00",
        allDay: true,
        bgcolor: "black"
      }
    ];

    const allDayEventsMap = computed(() => {
      const map = {};
      if (events.length > 0) {
        events.forEach(
          event =>
            event.allDay === true &&
            (map[event.date] = map[event.date] || []).push(event)
        );
      }
      return map;
    });

    const parsedCellWidth = computed(() => {
      return 100 / weekdays.length;
    });

    onBeforeMount(() => {
      // set up dates for example events
      let start = getStartOfWeek(parseTimestamp(today()), weekdays);
      events[0].date = start.date;
      start = addToDate(start, { day: 4 });
      events[1].date = start.date;
    });

    function badgeClasses(event) {
      return {
        [`text-white bg-${event.bgcolor}`]: true,
        "rounded-border": true
      };
    }

    function badgeStyles(day, event) {
      const s = {};
      s.left = day.weekday === 0 ? 0 : day.weekday * this.parsedCellWidth + "%";
      s.top = 0;
      s.bottom = 0;
      s.width = event.days * this.parsedCellWidth + "%";
      return s;
    }

    function onToday() {
      calendar.value.moveToToday();
    }
    function onPrev() {
      calendar.value.prev();
    }
    function onNext() {
      calendar.value.next();
    }
    function onMoved(data) {
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
      nomeMes.value = meses[data.month - 1];
    }
    function onChange(data) {
      console.log("onChange", data);
    }
    function onClickDate(data) {
      cardEvento.value = true;
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
      arrayDia.value = data.scope.timestamp.day;
      var arrayMes = data.scope.timestamp.month;
      dataFormatada.value =
        semanas[arraySemana] + ", " + arrayDia.value + " de " + meses[arrayMes];
    }

    function fecharCardEvento() {
      cardEvento.value = false;
    }

    function retornoArrayAgenda(arrayAgenda) {
      console.log(arrayAgenda);
      arrayAgenda.start = getCurrentDay(arrayDia.value);
      arrayAgenda.end = getCurrentDay(arrayDia.value);
      console.log(arrayAgenda.start);
      //events.value.push(objArrayAgenda.value);
    }

    function onClickTime(data) {}
    function onClickInterval(data) {}
    function onClickHeadIntervals(data) {}
    function onClickHeadDay(data) {}

    return {
      calendar,
      selectedDate,
      weekdays,
      events,
      allDayEventsMap,
      parsedCellWidth,
      badgeClasses,
      badgeStyles,
      onToday,
      cardEvento,
      nomeMes,
      retornoArrayAgenda,
      arrayDia,
      objArrayAgenda,
      onPrev,
      onNext,
      onMoved,
      onChange,
      fecharCardEvento,
      onClickDate,
      onClickTime,
      onClickInterval,
      onClickHeadIntervals,
      onClickHeadDay,
      dataFormatada
    };
  }
});
</script>

<style lang="sass" scoped>
.titulo-mes
 font-size:20px
 font-weight:700
 text-transform: capitalize


.inner-row
  height: 20px
  position: absolute
  top: 0
  right: 0
  left: 0
  display: flex
  flex-direction: row
  align-items: center
  vertical-align: middle

.my-event
  position: absolute
  font-size: 12px
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

.text-white
  color: white

.bg-green
  background: green

.bg-orange
  background: orange

.rounded-border
  border-radius: 2px
</style>
