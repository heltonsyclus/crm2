<template>
  <div style="width:98%;">
    <div v-if="funcao_card === 'grafico_linha'">
      <apexchart type="line" :options="chartOptions" :series="series">
      </apexchart>
    </div>
    <div v-if="funcao_card === 'grafico_padrao'">
      <apexchart type="area" :options="chartOptions" :series="series">
      </apexchart>
    </div>
    <div v-if="funcao_card === 'grafico_pontos'">
      <apexchart type="scatter" :options="chartOptions" :series="series">
      </apexchart>
    </div>
    <div v-if="funcao_card === 'grafico_cores'">
      <apexchart type="heatmap" :options="chartOptions" :series="series">
      </apexchart>
    </div>
    <div v-if="funcao_card === 'grafico_pizza'">
      <apexchart type="pie" :options="chartOptions" :series="series">
      </apexchart>
    </div>
    <div v-if="funcao_card === 'grafico_update'">
      <button @click="mudarGrafico">Mudar</button>
      <apexchart
        type="bar"
        :options="chartOptions2"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  props: ["funcao_card"],
  components: {
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "Atividades"
        },
        xaxis: {
          categories: ["Mar", "Abr", "Mai", "Jun", "Ago", "Out", "Nov", "Dez"]
        },
        series: [30, 40, 35, 50, 49, 60, 70, 91],
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"]
      },
      chartOptions2: {
        chart: {
          id: "Projetos"
        },
        xaxis: {
          categories: [
            "Pedro",
            "Jullyadson",
            "João P",
            "Helton",
            "Henrique",
            "Danilo",
            "Eron",
            "Weverton"
          ]
        }
      },
      series: [
        {
          name: "Atividades",
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }
      ]
    };
  },
  methods: {
    mudarGrafico() {
      const max = 90;
      const min = 20;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      const colors = ["#00E396", "#008FFB", "#FEB019", "#FF4560", "#775DD0"];
      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
      this.chartOptions = {
        colors: [colors[Math.floor(Math.random() * colors.length)]]
      };
      // In the same way, update the series option
      this.series = [
        {
          data: newData
        }
      ];
    }
  }
};
</script>

<style>
button {
  background-color: rgb(33, 140, 228);
  color: #fff;
  padding: 2px 5px;
  border: none;
}
</style>
