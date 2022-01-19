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
      <div v-if="sub_tipo === 'grafico_donut'">
        <apexchart
          type="donut"
          :options="objGraficoPizza"
          :series="seriesGraficoPizza"
          :height="alturaGrafico"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_comparativo_barra'">
        <apexchart
          type="bar"
          :options="objGraficoCOmparativo"
          :series="seriesGraficoComparacao"
          :height="alturaGrafico"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_comparativo_linha'">
        <apexchart
          type="line"
          :height="alturaGrafico"
          :options="objGraficoComparacaoLinha"
          :series="seriesGraficoComparacaoLinha"
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
        }
      },
      seriesGraficoBarra: [
        {
          name: "Atividades",
          data: []
        }
      ],
      objGraficoPizza: {
        labels: []
      },
      seriesGraficoPizza: [],
      objGraficoCOmparativo: {
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
      seriesGraficoComparacao: [],
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
      seriesGraficoComparacaoLinha: []
    };
  },
  methods: {
    atualizarConteudo() {
      this.limparConteudo();
      if (this.idPrincipal !== null) {
        let body = this.getBody(this.conteudo_card.body_grupo);
        if (body == null) {
          return false;
        }
        this.carregarKnob = true;
        this.$api.post("consultasql", body).then(res => {
          let arrRetorno = res.data;
          this.carregarKnob = false;
          let index_coluna = 2;
          if (this.coluna_totalizadora > 0) {
            index_coluna = this.coluna_totalizadora - 1;
          }

          if (this.sub_tipo === "grafico_barra") {
            this.limparConteudoBarra();
            for (let i = 0; i < arrRetorno.length; i++) {
              this.objGraficoBarra.xaxis.categories.push(
                Object.values(arrRetorno[i])[1]
              );
              this.seriesGraficoBarra[0].data.push(
                Object.values(arrRetorno[i])[index_coluna]
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
                Object.values(arrRetorno[i])[index_coluna]
              );
            }
          } else if (this.sub_tipo == "grafico_comparativo_barra") {
            this.limparConteudoComparativo();
            //Criando estrutura de cateorias e series
            for (let i = 0; i < arrRetorno.length; i++) {
              let idxCategoria = this.objGraficoCOmparativo.xaxis.categories.indexOf(
                Object.values(arrRetorno[i])[2]
              );
              if (idxCategoria < 0) {
                this.objGraficoCOmparativo.xaxis.categories.push(
                  Object.values(arrRetorno[i])[2]
                );
              }
              let idxSerie = this.seriesGraficoComparacao.find(
                item => item.name === Object.values(arrRetorno[i])[1]
              );
              if (idxSerie === undefined) {
                this.seriesGraficoComparacao.push({
                  name: Object.values(arrRetorno[i])[1],
                  data: []
                });
              }
            }
            this.objGraficoCOmparativo.xaxis.categories.sort();
            //criando valores zerados
            for (let i = 0; i < this.seriesGraficoComparacao.length; i++) {
              for (
                let j = 0;
                j < this.objGraficoCOmparativo.xaxis.categories.length;
                j++
              ) {
                this.seriesGraficoComparacao[i].data.push(0);
              }
            }
            //setando os valores
            for (let i = 0; i < arrRetorno.length; i++) {
              let idxCategoria = this.objGraficoCOmparativo.xaxis.categories.indexOf(
                Object.values(arrRetorno[i])[2]
              );
              for (let j = 0; j < this.seriesGraficoComparacao.length; j++) {
                if (
                  this.seriesGraficoComparacao[j].name ===
                  Object.values(arrRetorno[i])[1]
                ) {
                  this.seriesGraficoComparacao[j].data.splice(
                    idxCategoria,
                    1,
                    Object.values(arrRetorno[i])[3]
                  );
                  break;
                }
              }
            }
          } else if (this.sub_tipo == "grafico_comparativo_linha") {
            this.limparConteudoComparativoLinha();
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
              let idxSerie = this.seriesGraficoComparacaoLinha.find(
                item => item.name === Object.values(arrRetorno[i])[1]
              );
              if (idxSerie === undefined) {
                this.seriesGraficoComparacaoLinha.push({
                  name: Object.values(arrRetorno[i])[1],
                  data: []
                });
              }
            }
            this.objGraficoComparacaoLinha.xaxis.categories.sort();
            //criando valores zerados
            for (let i = 0; i < this.seriesGraficoComparacaoLinha.length; i++) {
              for (
                let j = 0;
                j < this.objGraficoComparacaoLinha.xaxis.categories.length;
                j++
              ) {
                this.seriesGraficoComparacaoLinha[i].data.push(0);
              }
            }
            //setando os valores
            for (let i = 0; i < arrRetorno.length; i++) {
              let idxCategoria = this.objGraficoComparacaoLinha.xaxis.categories.indexOf(
                Object.values(arrRetorno[i])[2]
              );
              for (
                let j = 0;
                j < this.seriesGraficoComparacaoLinha.length;
                j++
              ) {
                if (
                  this.seriesGraficoComparacaoLinha[j].name ===
                  Object.values(arrRetorno[i])[1]
                ) {
                  this.seriesGraficoComparacaoLinha[j].data.splice(
                    idxCategoria,
                    1,
                    Object.values(arrRetorno[i])[3]
                  );
                  break;
                }
              }
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
    limparConteudoComparativo() {},
    limparConteudoComparativoLinha() {},
    medidaCard() {
      this.alturaCard = this.height + "vh";
      let altura = parseInt(this.height);
      this.alturaGrafico = altura * 5.5 + "px";
      this.alturaCorpo = this.height - 6 + "vh";
    }
  },
  created() {
    this.medidaCard();
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
  margin: 0px auto;
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
</style>
