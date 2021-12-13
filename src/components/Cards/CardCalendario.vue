<template>
  <div style="margin-top:20px">
    <CardCalendarioMes v-if="filtro_calendario === 'Mensal'" />
    <CardCalendarioSemana v-if="filtro_calendario === 'Semanal'" />
    <CardCalendarioDia v-if="filtro_calendario === 'Diário'" />
  </div>
</template>

<script>
import CardCalendarioMes from "app/src/components/Cards/CardCalendarioMes.vue";
import CardCalendarioSemana from "app/src/components/Cards/CardCalendarioSemana.vue";
import CardCalendarioDia from "app/src/components/Cards/CardCalendarioDia.vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: ["calendario", "filtro_calendario"],
  name: "AgendaAlignment",
  components: {
    CardCalendarioMes,
    CardCalendarioSemana,
    CardCalendarioDia
  }
});
</script>
