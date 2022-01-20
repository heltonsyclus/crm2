<template>
  <q-card
    class="my-card-syclus"
    flat
    bordered
    :style="{ width: `${width}`, height: `${this.alturaCard}` }"
  >
    <q-item class="items-center topo-fixo" :class="cor_header" dense="dense">
      <q-item-section
        style="height:40px;font-weight:700;color:White;padding-left:10px"
      >
        {{ card }}
      </q-item-section>

      <q-btn
        v-if="btn_comando === 'btn-atualizar'"
        round
        flat
        text-color="white"
        icon="autorenew"
        @click.prevent="atualizarConteudo"
      >
      </q-btn>
    </q-item>
    <q-card-section class="corpo" :style="{ height: `${this.alturaCorpo}` }">
      <!-- :style="{ height: `${this.alturaCorpo}` }"-->
      <div v-if="sub_tipo === 'grafico_linha'">
        <apexchart
          :height="alturaGrafico"
          type="line"
          :options="objGraficoBarra"
          :series="series"
        >
        </apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_pontos'">
        <apexchart
          :height="alturaGrafico"
          type="scatter"
          :options="objGraficoBarra"
          :series="series"
        >
        </apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_quantidade'">
        <apexchart
          :height="alturaGrafico"
          type="heatmap"
          :options="objGraficoBarra"
          :series="series"
        >
        </apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_pizza'">
        <apexchart
          type="pie"
          :height="alturaGrafico"
          :options="objGraficoPizza"
          :series="seriesGraficoPizza"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_barra'">
        <apexchart
          type="bar"
          :options="objGraficoBarra"
          :series="seriesGraficoBarra"
          :height="alturaGrafico"
        ></apexchart>
      </div>
      <div
        v-if="sub_tipo === 'grafico_barra_horizontal'"
        style="margin-right:30px"
      >
        <apexchart
          type="bar"
          :options="objGraficoBarraHorizontal"
          :series="seriesGraficoBarraHorizontal"
          :height="alturaGrafico"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_donut'">
        <apexchart
          type="donut"
          :options="objGraficoPizza"
          :series="seriesGraficoPizza"
          :height="alturaGrafico"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_polar'" style="margin-top:5px">
        <apexchart
          type="polarArea"
          :options="objGraficoPolar"
          :series="seriesGraficoPolar"
          :height="alturaGrafico"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_comparativo_barra'">
        <apexchart
          type="bar"
          :options="objGraficoComparativo"
          :series="seriesGraficoComparativo"
          :height="alturaGrafico"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_comparativo_linha'">
        <apexchart
          type="line"
          :height="alturaGrafico"
          :options="objGraficoComparacaoLinha"
          :series="seriesGraficoComparativoLinha"
        ></apexchart>
      </div>
      <div
        v-if="sub_tipo === 'grafico_comparativo_indicativo'"
        style="margin-top:5px"
      >
        <apexchart
          type="bar"
          :height="alturaGrafico"
          :options="objGraficoComparacaoIndicativo"
          :series="seriesGraficoComparativoIndicativo"
        ></apexchart>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import importSql from "app/src/commands/importSql";
export default {
  mixins: [importSql],
  props: [
    "idPrincipal",
    "conteudo_card",
    "card",
    "sub_tipo",
    "btn_comando",
    "cor_header",
    "formato_card",
    "msg",
    "link_item",
    "width",
    "height",
    "coluna_categoria",
    "coluna_serie",
    "coluna_totalizadora"
  ],
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      value: 71,
      carregarKnob: false,
      carregarText: false,
      alturaGrafico: 0,
      objGraficoBarra: {
        xaxis: {
          categories: [""]
        },
        colors: ["#2E01E3"]
      },
      seriesGraficoBarra: [
        {
          name: "Atividades",
          data: []
        }
      ],
      objGraficoBarraHorizontal: {
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [""]
        }
      },
      seriesGraficoBarraHorizontal: [
        {
          name: "Atividades",
          data: []
        }
      ],
      objGraficoPizza: {
        labels: []
      },
      seriesGraficoPizza: [],
      objGraficoComparativo: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10
          }
        },
        xaxis: {
          categories: []
        },
        legend: {
          position: "right",
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      },
      seriesGraficoComparativo: [],
      objGraficoComparacaoLinha: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: "smooth"
        },
        markers: {
          size: 1
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10
          }
        },
        xaxis: {
          categories: []
        },
        legend: {
          position: "right",
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      },
      seriesGraficoComparativoLinha: [],
      objGraficoComparacaoIndicativo: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          stackType: "100%"
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        xaxis: {
          categories: []
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val + " Atividades";
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: 40
        }
      },
      seriesGraficoComparativoIndicativo: [],
      objGraficoPolar: {
        chart: {
          type: "polarArea"
        },
        labels: [],
        stroke: {
          colors: ["#fff"]
        },
        fill: {
          opacity: 1
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      },
      seriesGraficoPolar: []
    };
  },
  methods: {
    atualizarConteudo() {
      this.limparConteudo();
      this.limparConteudoPolar();
      this.limparConteudoComparativoLinha();
      this.limparConteudoComparativoIndicativo();
      this.limparConteudoComparativo();
      if (this.idPrincipal !== null) {
        let body = this.getBody(this.conteudo_card.body_grupo);
        if (body == null) {
          return false;
        }
        this.carregarKnob = true;
        this.$api.post("consultasql", body).then(res => {
          let arrRetorno = res.data;
          this.carregarKnob = false;
          //index colunas
          let index_coluna_serie = 0;
          if (this.coluna_serie > 0) {
            index_coluna_serie = this.coluna_serie - 1;
          }
          let index_coluna_categoria = 1;
          if (this.coluna_categoria > 0) {
            index_coluna_categoria = this.coluna_categoria - 1;
          }
          let index_coluna_totalizadora = 2;
          if (this.coluna_totalizadora > 0) {
            index_coluna_totalizadora = this.coluna_totalizadora - 1;
          }
          //estrutura
          if (this.sub_tipo === "grafico_barra") {
            this.limparConteudoBarra();
            for (let i = 0; i < arrRetorno.length; i++) {
              this.objGraficoBarra.xaxis.categories.push(
                Object.values(arrRetorno[i])[1]
              );
              this.seriesGraficoBarra[0].data.push(
                Object.values(arrRetorno[i])[index_coluna_totalizadora]
              );
            }
          } else if (this.sub_tipo === "grafico_barra_horizontal") {
            this.limparConteudoBarraHorizontal();
            for (let i = 0; i < arrRetorno.length; i++) {
              this.objGraficoBarraHorizontal.xaxis.categories.push(
                Object.values(arrRetorno[i])[1]
              );
              this.seriesGraficoBarraHorizontal[0].data.push(
                Object.values(arrRetorno[i])[index_coluna_totalizadora]
              );
            }
          } else if (
            this.sub_tipo == "grafico_pizza" ||
            this.sub_tipo == "grafico_donut"
          ) {
            this.limparConteudoPizza();
            for (let i = 0; i < arrRetorno.length; i++) {
              this.objGraficoPizza.labels.push(Object.values(arrRetorno[i])[1]);
              this.seriesGraficoPizza.push(
                Object.values(arrRetorno[i])[index_coluna_totalizadora]
              );
            }
          } else if (this.sub_tipo == "grafico_comparativo_barra") {
            //Criando estrutura de cateorias e series
            for (let i = 0; i < arrRetorno.length; i++) {
              let idxCategoria = this.objGraficoComparativo.xaxis.categories.indexOf(
                Object.values(arrRetorno[i])[index_coluna_categoria]
              );
              if (idxCategoria < 0) {
                this.objGraficoComparativo.xaxis.categories.push(
                  Object.values(arrRetorno[i])[index_coluna_categoria]
                );
              }
              let idxSerie = this.seriesGraficoComparativo.find(
                item =>
                  item.name === Object.values(arrRetorno[i])[index_coluna_serie]
              );
              if (idxSerie === undefined) {
                this.seriesGraficoComparativo.push({
                  name: Object.values(arrRetorno[i])[index_coluna_serie],
                  data: []
                });
              }
            }
            this.objGraficoComparativo.xaxis.categories.sort();
            //criando valores zerados
            for (let i = 0; i < this.seriesGraficoComparativo.length; i++) {
              for (
                let j = 0;
                j < this.objGraficoComparativo.xaxis.categories.length;
                j++
              ) {
                this.seriesGraficoComparativo[i].data.push(0);
              }
            }
            //setando os valores
            for (let i = 0; i < arrRetorno.length; i++) {
              let idxCategoria = this.objGraficoComparativo.xaxis.categories.indexOf(
                Object.values(arrRetorno[i])[index_coluna_categoria]
              );
              for (let j = 0; j < this.seriesGraficoComparativo.length; j++) {
                if (
                  this.seriesGraficoComparativo[j].name ===
                  Object.values(arrRetorno[i])[index_coluna_serie]
                ) {
                  this.seriesGraficoComparativo[j].data.splice(
                    idxCategoria,
                    1,
                    Object.values(arrRetorno[i])[index_coluna_totalizadora]
                  );
                  break;
                }
              }
            }
          } else if (this.sub_tipo == "grafico_comparativo_linha") {
            //Criando estrutura de categorias e series
            for (let i = 0; i < arrRetorno.length; i++) {
              let idxCategoria = this.objGraficoComparacaoLinha.xaxis.categories.indexOf(
                Object.values(arrRetorno[i])[2]
              );
              if (idxCategoria < 0) {
                this.objGraficoComparacaoLinha.xaxis.categories.push(
                  Object.values(arrRetorno[i])[2]
                );
              }
              let idxSerie = this.seriesGraficoComparativoLinha.find(
                item => item.name === Object.values(arrRetorno[i])[1]
              );
              if (idxSerie === undefined) {
                this.seriesGraficoComparativoLinha.push({
                  name: Object.values(arrRetorno[i])[1],
                  data: []
                });
              }
            }
            this.objGraficoComparacaoLinha.xaxis.categories.sort();
            //criando valores zerados
            for (
              let i = 0;
              i < this.seriesGraficoComparativoLinha.length;
              i++
            ) {
              for (
                let j = 0;
                j < this.objGraficoComparacaoLinha.xaxis.categories.length;
                j++
              ) {
                this.seriesGraficoComparativoLinha[i].data.push(0);
              }
            }
            //setando os valores
            for (let i = 0; i < arrRetorno.length; i++) {
              let idxCategoria = this.objGraficoComparacaoLinha.xaxis.categories.indexOf(
                Object.values(arrRetorno[i])[2]
              );
              for (
                let j = 0;
                j < this.seriesGraficoComparativoLinha.length;
                j++
              ) {
                if (
                  this.seriesGraficoComparativoLinha[j].name ===
                  Object.values(arrRetorno[i])[1]
                ) {
                  this.seriesGraficoComparativoLinha[j].data.splice(
                    idxCategoria,
                    1,
                    Object.values(arrRetorno[i])[3]
                  );
                  break;
                }
              }
            }
          } else if (this.sub_tipo == "grafico_comparativo_indicativo") {
            //Criando estrutura de categorias e series
            for (let i = 0; i < arrRetorno.length; i++) {
              let idxCategoria = this.objGraficoComparacaoIndicativo.xaxis.categories.indexOf(
                Object.values(arrRetorno[i])[2]
              );
              if (idxCategoria < 0) {
                this.objGraficoComparacaoIndicativo.xaxis.categories.push(
                  Object.values(arrRetorno[i])[2]
                );
              }
              let idxSerie = this.seriesGraficoComparativoIndicativo.find(
                item => item.name === Object.values(arrRetorno[i])[1]
              );
              if (idxSerie === undefined) {
                this.seriesGraficoComparativoIndicativo.push({
                  name: Object.values(arrRetorno[i])[1],
                  data: []
                });
              }
            }

            this.objGraficoComparacaoIndicativo.xaxis.categories.sort();
            //criando valores zerados
            for (
              let i = 0;
              i < this.seriesGraficoComparativoIndicativo.length;
              i++
            ) {
              for (
                let j = 0;
                j < this.objGraficoComparacaoIndicativo.xaxis.categories.length;
                j++
              ) {
                this.seriesGraficoComparativoIndicativo[i].data.push(0);
              }
            }
            //setando os valores
            for (let i = 0; i < arrRetorno.length; i++) {
              let idxCategoria = this.objGraficoComparacaoIndicativo.xaxis.categories.indexOf(
                Object.values(arrRetorno[i])[2]
              );
              for (
                let j = 0;
                j < this.seriesGraficoComparativoIndicativo.length;
                j++
              ) {
                if (
                  this.seriesGraficoComparativoIndicativo[j].name ===
                  Object.values(arrRetorno[i])[1]
                ) {
                  this.seriesGraficoComparativoIndicativo[j].data.splice(
                    idxCategoria,
                    1,
                    Object.values(arrRetorno[i])[3]
                  );
                  break;
                }
              }
            }
          } else if (this.sub_tipo === "grafico_polar") {
            for (let i = 0; i < arrRetorno.length; i++) {
              this.objGraficoPolar.labels.push(Object.values(arrRetorno[i])[1]);
              this.seriesGraficoPolar.push(
                Object.values(arrRetorno[i])[index_coluna_totalizadora]
              );
            }
          }
          setTimeout(() => {
            arrRetorno == "";
          }, 2000);
          if (arrRetorno == "") {
            this.carregarText = true;
            this.carregarKnob = false;
          } else {
            this.carregarText = false;
          }
        });
      }
    },
    limparConteudoBarra() {
      this.objGraficoBarra = {
        xaxis: {
          categories: []
        }
      };
      this.seriesGraficoBarra = [
        {
          name: "",
          data: []
        }
      ];
    },
    limparConteudoPizza() {
      (this.seriesGraficoPizza = []),
        (this.objGraficoPizza = {
          labels: []
        });
    },
    limparConteudoBarraHorizontal() {
      this.objGraficoBarraHorizontal = {
        xaxis: {
          categories: []
        }
      };
      this.seriesGraficoBarraHorizontal = [
        {
          name: "",
          data: []
        }
      ];
    },
    limparConteudoComparativo() {
      this.objGraficoComparativo.xaxis.categories = [];
      this.seriesGraficoComparativo = [];
    },
    limparConteudoComparativoLinha() {
      this.objGraficoComparacaoLinha.xaxis.categories = [];
      this.seriesGraficoComparativoLinha = [];
    },
    limparConteudoComparativoIndicativo() {
      this.objGraficoComparacaoIndicativo.xaxis.categories = [];
      this.seriesGraficoComparativoIndicativo = [];
    },
    limparConteudoPolar() {
      this.objGraficoPolar.labels = [];
      this.seriesGraficoPolar = [];
    },
    medidaCard() {},
    handleResize() {
      if (window.innerWidth >= 500) {
        this.alturaCard = this.height + "vh";
        let altura = parseInt(this.height);
        this.alturaGrafico = altura * 5.1 + "px";
        this.alturaCorpo = this.height - 6 + "vh";
      }
      if (window.innerWidth <= 600) {
        this.alturaGrafico = 185;
      }
      if (window.innerWidth <= 300) {
        this.alturaGrafico = 200;
      }
    }
  },
  created() {
    this.medidaCard();
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
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
.corpo {
  padding: 0;
  margin: 0 auto;
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
/*my-card-syclus*/
@media only screen and (max-width: 500px) {
  .my-card-syclus {
    min-height: 200px;
  }
}
</style>
