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
      <div v-if="sub_tipo === 'grafico_padrao'">
        <div>
          <apexchart type="area" :options="chartOptions" :series="series">
          </apexchart>
        </div>
      </div>
      <div v-if="sub_tipo === 'grafico_pontos'">
        <apexchart type="scatter" :options="chartOptions" :series="series">
        </apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_cores'">
        <apexchart type="heatmap" :options="chartOptions" :series="series">
        </apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_pizza'">
        <apexchart type="pie" :options="chartOptions" :series="series">
        </apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_update'">
        <button @click="mudarGrafico">Mudar</button>
        <apexchart
          type="bar"
          :options="chartOptions2"
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
          categories: [
            "ADMINISTRATIVO",
            "ANALISE TECNICA",
            "COMERCIAL",
            "DESENVOLVIMENTO",
            "DIRETORIA",
            "FINANCEIRO",
            "GERAIS",
            "PROJETOS",
            "SUPORTE"
          ]
        }
      },
      series: [
        {
          name: "Atividades",
          data: []
        }
      ]
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
        pNomeBody === "bodyAtividadeTag"
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
      if (pNomeBody === "bodyOcorrenciaPorTipoAtividade") {
        return bodyOcorrenciaPorTipoAtividade(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorWorkflow") {
        return bodyOcorrenciaPorWorkflow(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorData") {
        return bodyOcorrenciaPorData(filtros);
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
            this.chartOptions.xaxis.categories.push(
              Object.values(arrRetorno[i])[1]
            );
            this.series[0].data.push(Object.values(arrRetorno[i])[2]);
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
.my-card-s {
  width: 450px;
  max-height: 80vh;
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
