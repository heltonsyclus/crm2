<template>
  <q-card
    class="my-card-syclus"
    flat
    bordered
    :style="{ width: `${width}`, height: `${height}` }"
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
    <q-card-section class="corpo">
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
        <apexchart
          type="pie"
          :options="chartPizza"
          :series="itemsPizza"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_barra'">
        <apexchart
          type="bar"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import {
  bodyAtividade,
  bodyAtividadeCliente,
  bodyAtividadeTag,
  bodyAtividadeClientePorTipoAtividade,
  bodyAtividadeClientePorResponsavel,
  bodyAtividadeClientePorTag,
  bodyAtividadeClientePorSituacao,
  bodyAtividadeClientePorWorkflow,
  bodyAtividadePorTipoAtividade,
  bodyAtividadePorCliente,
  bodyAtividadePorTag,
  bodyAtividadePorWorkflow,
  bodyAtividadePorResponsavel,
  bodyAtividadePorSituacao,
  bodyOcorrenciaPorTipoAtividade,
  bodyOcorrenciaPorWorkflow,
  bodyOcorrenciaPorData
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
    "height"
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
      itemsPizza: [],
      chartPizza: {
        labels: []
      }
      /*series: [
        {
          data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
          data: [53, 32, 33, 52, 13, 44, 32]
        }
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top"
            }
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"]
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"]
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
        }
      }*/
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
        pNomeBody === "bodyProjeto" ||
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
      if (pNomeBody === "bodyAtividadeCliente") {
        return bodyAtividadeCliente(filtros);
      }
      if (pNomeBody === "bodyAtividadeTag") {
        return bodyAtividadeTag(filtros);
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
      if (pNomeBody === "bodyProjetoPorCliente") {
        return bodyProjetoPorCliente(filtros);
      }
      if (pNomeBody === "bodyProjetoPorTag") {
        return bodyProjetoPorTag(filtros);
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
            if (this.sub_tipo == "grafico_pizza") {
              this.chartPizza.labels.push(Object.values(arrRetorno[i])[1]);
              this.itemsPizza.push(Object.values(arrRetorno[i])[2]);
            }
            if (this.sub_tipo == "grafico_padrao_lateral") {
              this.chartOptions.xaxis.categories.push(
                Object.values(arrRetorno[i])[1]
              );
              this.series[0].data.push(Object.values(arrRetorno[i])[2]);
            } else {
              this.chartOptions.xaxis.categories.push(
                Object.values(arrRetorno[i])[1]
              );
              this.series[0].data.push(Object.values(arrRetorno[i])[2]);
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
@media only screen and (max-width: 1320px) {
  .my-card-syclus {
    width: 350px;
  }
}
</style>
