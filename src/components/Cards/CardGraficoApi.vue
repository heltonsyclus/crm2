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
          height="220"
          type="line"
          :options="chartOptions"
          :series="series"
        >
        </apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_pontos'">
        <apexchart
          height="220"
          type="scatter"
          :options="chartOptions"
          :series="series"
        >
        </apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_quantidade'">
        <apexchart
          height="220"
          type="heatmap"
          :options="chartOptions"
          :series="series"
        >
        </apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_pizza'">
        <apexchart
          type="pie"
          height="200"
          :options="chartPie"
          :series="itemsPie"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_barra'">
        <apexchart
          type="bar"
          height="210"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_barra_horizontal'">
        <apexchart
          type="bar"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_donut'">
        <apexchart
          type="donut"
          height="180"
          :options="chartPie"
          :series="itemsPie"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_comparativo'">
        <apexchart
          type="bar"
          :options="chartOption"
          :series="serie"
          height="210"
        ></apexchart>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import {
  bodyAtividade,
  bodyAtividadePorTipoAtividade,
  bodyAtividadePorCliente,
  bodyAtividadePorTag,
  bodyAtividadePorResponsavel,
  bodyAtividadePorWorkflow,
  bodyAtividadePorSituacao,
  bodyAtividadePorGut,
  bodyAtividadePorData,
  bodyAtividadePorMesAno,
  bodyAtividadePorSemana,
  bodyAtividadeCliente,
  bodyAtividadeClientePorTipoAtividade,
  bodyAtividadeClientePorResponsavel,
  bodyAtividadeClientePorTag,
  bodyAtividadeClientePorSituacao,
  bodyAtividadeClientePorWorkflow,
  bodyAtividadeColaborador,
  bodyAtividadeColaboradorPorTipoAtividade,
  bodyAtividadeTag,
  bodyAtividadeTagPorTipoAtividade,
  bodyAtividadeTagPorCliente,
  bodyAtividadeTagPorResponsavel,
  bodyAtividadeTagPorWorkflow,
  bodyAtividadeTagPorSituacao,
  bodyAtividadeTagPorGut,
  bodyAtividadeTagPorData,
  bodyAtividadeTagPorMesAno,
  bodyAtividadeTagPorSemana,
  bodyOcorrenciaPorTipoAtividade,
  bodyOcorrenciaPorWorkflow,
  bodyOcorrenciaPorColaborador,
  bodyOcorrenciaPorData,
  bodyOcorrenciaPorMesAno,
  bodyOcorrenciaPorSemana,
  bodyProjeto,
  bodyProjetoPorTipoProjeto,
  bodyProjetoPorResponsavel,
  bodyProjetoPorSituacao,
  bodyProjetoPorCliente,
  bodyProjetoPorTag,
  bodyProjetoColaborador,
  bodyProjetoColaboradorPorTipoProjeto,
  bodyProjetoColaboradorPorSituacao,
  bodyProjetoTag,
  bodyProjetoTagPorTipoProjeto,
  bodyProjetoTagPorSituacao,
  bodyProjetoTagPorMesAno,
  bodyNotificacao,
  bodyNotificacaoPorAtividade,
  bodyNotificacaoPorTipoAtividade
} from "src/boot/consultaSql.js";
export default {
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
      ObjConteudo: {},
      chartOptions: {
        xaxis: {
          categories: [""]
        }
      },
      series: [
        {
          name: "Atividades",
          data: [""]
        }
      ],
      itemsPie: [],
      chartPie: {
        labels: []
      },
      serie: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "PRODUCT C",
          data: [11, 17, 15, 15, 21, 14]
        },
        {
          name: "PRODUCT D",
          data: [21, 7, 25, 13, 22, 8]
        }
      ],
      chartOption: {
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
          type: "datetime",
          categories: [
            "01/01/2011 GMT",
            "01/02/2011 GMT",
            "01/03/2011 GMT",
            "01/04/2011 GMT",
            "01/05/2011 GMT",
            "01/06/2011 GMT"
          ]
        },
        legend: {
          position: "right",
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      }
    };
  },
  methods: {
    getUrlItem(pIndexGrupo, pIndexItem) {
      let url = this.link_item.replace(
        "<id_item>",
        this.ObjConteudo.grupos[pIndexGrupo].itens[pIndexItem].id
      );
      return url;
    },
    abrirItem(pIndexGrupo, pIndexItem) {
      window.open(this.getUrlItem(pIndexGrupo, pIndexItem), "_blank");
    },
    limparConteudoItens(pIndex) {
      this.ObjConteudo.grupos[pIndex].itens = [];
    },
    atualizarConteudoItens(pIndex) {
      this.limparConteudoItens(pIndex);
      let body = this.getBody(
        this.conteudo_card.body_item,
        this.ObjConteudo.grupos[pIndex].id
      );
      this.$api.post("consultasql", body).then(res => {
        let arrRetorno = res.data;
        for (let i = 0; i < arrRetorno.length; i++) {
          let item = {
            id: Object.values(arrRetorno[i])[0],
            item: Object.values(arrRetorno[i])[1]
          };
          this.ObjConteudo.grupos[pIndex].itens.push(item);
        }
      });
    },
    showItem(pIndex) {
      this.atualizarConteudoItens(pIndex);
    },
    getBody(pNomeBody, pIdGrupo) {
      let filtros = this.conteudo_card.filtro_sql_grupo.replace(
        "<id_principal>",
        this.idPrincipal
      );
      if (
        pNomeBody === "bodyAtividade" ||
        pNomeBody === "bodyAtividadeCliente" ||
        pNomeBody === "bodyAtividadeTag" ||
        pNomeBody === "bodyAtividadeColaborador" ||
        pNomeBody === "bodyProjeto" ||
        pNomeBody === "bodyProjetoTag" ||
        pNomeBody === "bodyProjetoColaborador" ||
        pNomeBody === "bodyNotificacao" ||
        pNomeBody === "bodyNotificacaoPorAtividade"
      ) {
        filtros = this.conteudo_card.filtro_sql_item.replace(
          "<id_principal>",
          this.idPrincipal
        );
      }
      filtros = filtros.replace("<id_grupo>", pIdGrupo);
      if (pNomeBody === "bodyAtividade") {
        return bodyAtividade(filtros);
      }
      if (pNomeBody === "bodyAtividadePorTipoAtividade") {
        return bodyAtividadePorTipoAtividade(filtros);
      }
      if (pNomeBody === "bodyAtividadePorCliente") {
        return bodyAtividadePorCliente(filtros);
      }
      if (pNomeBody === "bodyAtividadePorTag") {
        return bodyAtividadePorTag(filtros);
      }
      if (pNomeBody === "bodyAtividadePorWorkflow") {
        return bodyAtividadePorWorkflow(filtros);
      }
      if (pNomeBody === "bodyAtividadePorResponsavel") {
        return bodyAtividadePorResponsavel(filtros);
      }
      if (pNomeBody === "bodyAtividadePorSituacao") {
        return bodyAtividadePorSituacao(filtros);
      }
      if (pNomeBody === "bodyAtividadePorGut") {
        return bodyAtividadePorGut(filtros);
      }
      if (pNomeBody === "bodyAtividadePorData") {
        return bodyAtividadePorData(filtros);
      }
      if (pNomeBody === "bodyAtividadePorMesAno") {
        return bodyAtividadePorMesAno(filtros);
      }
      if (pNomeBody === "bodyAtividadePorSemana") {
        return bodyAtividadePorSemana(filtros);
      }
      if (pNomeBody === "bodyAtividadeCliente") {
        return bodyAtividadeCliente(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorTipoAtividade") {
        return bodyAtividadeClientePorTipoAtividade(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorResponsavel") {
        return bodyAtividadeClientePorResponsavel(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorTag") {
        return bodyAtividadeClientePorTag(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorSituacao") {
        return bodyAtividadeClientePorSituacao(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorWorkflow") {
        return bodyAtividadeClientePorWorkflow(filtros);
      }
      if (pNomeBody === "bodyAtividadeTag") {
        return bodyAtividadeTag(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorTipoAtividade") {
        return bodyAtividadeTagPorTipoAtividade(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorCliente") {
        return bodyAtividadeTagPorCliente(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorWorkflow") {
        return bodyAtividadeTagPorWorkflow(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorResponsavel") {
        return bodyAtividadeTagPorResponsavel(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorSituacao") {
        return bodyAtividadeTagPorSituacao(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorGut") {
        return bodyAtividadeTagPorGut(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorData") {
        return bodyAtividadeTagPorData(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorMesAno") {
        return bodyAtividadeTagPorMesAno(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorSemana") {
        return bodyAtividadeTagPorSemana(filtros);
      }

      if (pNomeBody === "bodyAtividadeColaborador") {
        return bodyAtividadeColaborador(filtros);
      }
      if (pNomeBody === "bodyAtividadeColaboradorPorTipoAtividade") {
        return bodyAtividadeColaboradorPorTipoAtividade(filtros);
      }

      if (pNomeBody === "bodyOcorrenciaPorTipoAtividade") {
        return bodyOcorrenciaPorTipoAtividade(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorWorkflow") {
        return bodyOcorrenciaPorWorkflow(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorColaborador") {
        return bodyOcorrenciaPorColaborador(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorData") {
        return bodyOcorrenciaPorData(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorMesAno") {
        return bodyOcorrenciaPorMesAno(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorSemana") {
        return bodyOcorrenciaPorSemana(filtros);
      }

      if (pNomeBody === "bodyProjeto") {
        return bodyProjeto(filtros);
      }
      if (pNomeBody === "bodyProjetoPorTipoProjeto") {
        return bodyProjetoPorTipoProjeto(filtros);
      }
      if (pNomeBody === "bodyProjetoPorResponsavel") {
        return bodyProjetoPorResponsavel(filtros);
      }
      if (pNomeBody === "bodyProjetoPorSituacao") {
        return bodyProjetoPorSituacao(filtros);
      }
      if (pNomeBody === "bodyProjetoPorCliente") {
        return bodyProjetoPorCliente(filtros);
      }
      if (pNomeBody === "bodyProjetoPorTag") {
        return bodyProjetoPorTag(filtros);
      }

      if (pNomeBody === "bodyProjetoColaborador") {
        return bodyProjetoColaborador(filtros);
      }
      if (pNomeBody === "bodyProjetoColaboradorPorTipoProjeto") {
        return bodyProjetoColaboradorPorTipoProjeto(filtros);
      }
      if (pNomeBody === "bodyProjetoColaboradorPorSituacao") {
        return bodyProjetoColaboradorPorSituacao(filtros);
      }

      if (pNomeBody === "bodyProjetoTag") {
        return bodyProjetoTag(filtros);
      }
      if (pNomeBody === "bodyProjetoTagPorTipoProjeto") {
        return bodyProjetoTagPorTipoProjeto(filtros);
      }
      if (pNomeBody === "bodyProjetoTagPorSituacao") {
        return bodyProjetoTagPorSituacao(filtros);
      }
      if (pNomeBody === "bodyProjetoTagPorMesAno") {
        return bodyProjetoTagPorMesAno(filtros);
      }

      if (pNomeBody === "bodyNotificacao") {
        return bodyNotificacao(filtros);
      }
      if (pNomeBody === "bodyNotificacaoPorAtividade") {
        return bodyNotificacaoPorAtividade(filtros);
      }
      if (pNomeBody === "bodyNotificacaoPorTipoAtividade") {
        return bodyNotificacaoPorTipoAtividade(filtros);
      }
    },
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
          for (let i = 0; i < arrRetorno.length; i++) {
            this.carregarKnob = false;
            let index_coluna = 2;
            if (this.coluna_totalizadora > 0) {
              index_coluna = this.coluna_totalizadora - 1;
            }
            if (
              this.sub_tipo == "grafico_pizza" ||
              this.sub_tipo == "grafico_donut"
            ) {
              this.chartPie.labels.push(Object.values(arrRetorno[i])[1]);
              this.itemsPie.push(Object.values(arrRetorno[i])[index_coluna]);
            }
            if (this.sub_tipo == "grafico_padrao_lateral") {
              this.chartOptions.xaxis.categories.push(
                Object.values(arrRetorno[i])[1]
              );
              this.series[0].data.push(
                Object.values(arrRetorno[i])[index_coluna]
              );
            } else {
              this.chartOptions.xaxis.categories.push(
                Object.values(arrRetorno[i])[1]
              );
              this.series[0].data.push(
                Object.values(arrRetorno[i])[index_coluna]
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
    limparConteudo() {
      this.ObjConteudo.grupos = [];
      this.chartOptions = {
        xaxis: {
          categories: []
        }
      };
      this.series = [
        {
          name: "",
          data: []
        }
      ];
      (this.itemsPie = []),
        (this.chartPie = {
          labels: []
        });
    },
    formataCaptionGrupo(pQtde, pDuracao) {
      let texto = "";
      if (pQtde > 0) {
        texto = pQtde + " itens";
        if (pDuracao > 0) {
          texto =
            texto +
            " (" +
            pDuracao +
            " mim - " +
            Math.round(pDuracao / pQtde) +
            " med)";
        }
      }
      return texto;
    },
    medidaCard() {
      this.alturaCard = this.height + "vh";
      this.alturaCorpo = this.height - 7 + "vh";
    }
  },
  computed: {
    UrlItem() {
      return this.ObjConteudo.grupos;
    }
  },
  watch: {
    msg: {
      handler: function(newValue, oldValue) {
        if (newValue === "limpar_conteudo") {
          this.limparConteudo();
        }
        if (newValue === "atualizar_conteudo") {
          this.atualizarConteudo();
        }
      },
      deep: true,
      immediate: true
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
