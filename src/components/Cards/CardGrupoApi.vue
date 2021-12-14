<template>
  <q-card
    class="my-card-s"
    flat
    bordered
    :style="{ width: `${width}`, height: `${height}` }"
  >
    <q-item class="items-center" :class="cor_header" dense="dense">
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
      <div class="text-dark">
        <div class="spin" style="width:230px" v-show="carregarKnob">
          <q-knob
            v-model="value"
            size="30px"
            :thickness="0.4"
            color="primary"
            track-color="cyan-3"
          />
        </div>
        <div
          v-show="carregarText"
          style="margin:0 auto;text-align:center;padding-top:20px;color:red"
        >
          <span>Não possui grupos...</span>
        </div>
        <q-list class="rounded-borders bg-grey-1 q-mb-md q-my-none margin-bot">
          <q-expansion-item
            dense-toggle
            expand-separator
            v-for="(grupos, indexGrupo) in this.ObjConteudo.grupos"
            :key="indexGrupo"
            @before-show="showItem(indexGrupo)"
            :label="grupos.grupo"
            :caption="grupos.qtde + ' itens'"
            :caption-lines="1"
          >
            <q-card>
              <q-card-section
                v-for="(itens, indexItem) in this.ObjConteudo.grupos[indexGrupo]
                  .itens"
                :key="indexItem"
              >
                <div
                  class="text-light-blue-10 flex justify-between items-center"
                >
                  <a
                    @click.prevent="abrirItem(indexGrupo, indexItem)"
                    class="q-pt-md pl text-class"
                    style="max-width:260px"
                  >
                    <strong class="capitalize">{{ itens.item }}</strong>
                  </a>
                  <q-btn
                    color="dark"
                    round
                    flat
                    icon="more_vert"
                    class="items-center"
                  >
                    <q-menu cover auto-close style="pading:0px 5px">
                      <q-list>
                        <q-item clickable>
                          <q-item-section
                            @click.prevent="abrirItem(indexGrupo, indexItem)"
                            >Abrir</q-item-section
                          >
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </div>
                <div style="width:95%;margin-left:15px">
                  <q-separator />
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import {
  bodyAtividadeCliente,
  bodyAtividadeClientePorTipoAtividade,
  bodyAtividadeClientePorResponsavel,
  bodyAtividadeClientePorTag,
  bodyAtividadeClientePorSituacao,
  bodyAtividadeClientePorWorkflow
} from "src/boot/consultaSql.js";
export default {
  props: [
    "idPrincipal",
    "conteudo_card",
    "card",
    "btn_comando",
    "cor_header",
    "formato_card",
    "msg",
    "link_item",
    "width",
    "height"
  ],
  data() {
    return {
      value: 71,
      carregarKnob: false,
      carregarText: false,
      ObjConteudo: {
        grupos: [
          {
            id: 1,
            grupo: "grupo 1",
            qtde: 0,
            itens: [
              {
                id: 1,
                item: "item 1"
              }
            ]
          }
        ]
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

      if (pNomeBody === "bodyAtividadeCliente") {
        filtros = this.conteudo_card.filtro_sql_item.replace(
          "<id_principal>",
          this.idPrincipal
        );
      }
      filtros = filtros.replace("<id_grupo>", pIdGrupo);

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
            let item = {
              id: Object.values(arrRetorno[i])[0],
              grupo: Object.values(arrRetorno[i])[1],
              qtde: Object.values(arrRetorno[i])[2]
            };

            this.carregarKnob = false;
            this.ObjConteudo.grupos.push(item);
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
  .my-card-s {
    width: 350px;
  }
}
</style>
