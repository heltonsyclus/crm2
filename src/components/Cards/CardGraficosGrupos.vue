<template>
  <q-card
    class="my-card-syclus"
    flat
    bordered
    :style="{ width: `${width}`, height: `${height}` }"
  >
    <q-item class="items-center topo-fixo bg-primary" dense="dense">
      <q-item-section
        style="height:40px;font-weight:700;color:White;padding-left:10px"
      >
        {{ "teste" }}
      </q-item-section>
      <q-btn
        round
        flat
        text-color="white"
        icon="autorenew"
        @click.prevent="atualizarConteudo"
      >
      </q-btn>
    </q-item>

    <q-card-section>
      <div class="grafico">
        <div>
          <h5 style="padding:10px 0px 0px 15px">Projetos</h5>
          <apexchart type="area" :options="chartOptions" :series="series">
          </apexchart>
        </div>
        <div v-if="sub_tipo === 'grafico_linha'">
          <apexchart type="line" :options="chartOptions" :series="series">
          </apexchart>
        </div>
        <div v-if="sub_tipo === 'grafico_pontos'">
          <apexchart type="scatter" :options="chartOptions" :series="series">
          </apexchart>
        </div>
        <div v-if="sub_tipo === 'grafico_quantidade'">
          <apexchart type="heatmap" :options="chartOptions" :series="series">
          </apexchart>
        </div>
        <div v-if="sub_tipo === 'grafico_pizza'">
          <apexchart type="pie" :options="chartOptions" :series="series">
          </apexchart>
        </div>
        <div v-if="sub_tipo === 'grafico_barra'">
          <apexchart
            type="bar"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      chartOptions: {
        xaxis: {
          categories: ["n1", "n2", "n3"]
        }
      },
      series: [
        {
          name: "Atividades",
          data: ["1", "2", "3"]
        }
      ]
    };
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.margin-bot {
  margin-bottom: 3px;
}
.pl {
  padding-left: 5px;
}
.grafico {
  width: 550px;
}
.text-class {
  font-weight: 400;
  font-style: italic;
  padding-left: 15px;
  width: 90%;
  cursor: pointer;
}
.text-class:hover {
  color: rgb(11, 187, 218);
  transition: 0.5s;
}
.spin {
  text-align: center;
  margin: 30px auto;
  animation: spins 1s infinite;
}

@keyframes spins {
  to {
    transform: rotate(360deg);
  }
}
@media only screen and (max-width: 1320px) {
  .my-card-syclus {
    width: 350px;
  }
}
</style>
