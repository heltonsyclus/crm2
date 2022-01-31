<template>
  <div v-for="(lista, index) in this.ObjConteudo.grupos[0].itens" :key="index">
    <div
      class="flex justify-between items-center q-my-none"
      v-if="funcao_card === 'lista-padrao'"
    >
      <a
        @click.prevent="abrirItem(index)"
        class="q-pt-md q-pl-sm capitalize text-grey-9"
        style="font-weight:500;padding:5px;width:80%;cursor:pointer;"
        >{{ lista.item }}</a
      >
      <q-btn color="dark" round flat icon="more_vert" class="items-center">
        <q-menu cover auto-close dense="dense">
          <q-list>
            <q-item clickable>
              <q-item-section @click.prevent="abrirItem(index)"
                >Abrir</q-item-section
              >
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>

    <q-separator />
  </div>
</template>

<script>
import { bodyExecucaoGeral } from "src/boot/consultaSql.js";
export default {
  props: ["funcao_card", "conteudo_cards", "link_item"],
  data() {
    return {
      ObjConteudo: {
        grupos: [
          {
            itens: []
          }
        ]
      }
    };
  },
  methods: {
    getUrlItem(index) {
      let url = this.link_item.replace(
        "<id_item>",
        this.ObjConteudo.grupos[0].itens[index].id
      );
      return url;
    },
    abrirItem(index) {
      window.open(this.getUrlItem(index), "_blank");
    },
    getBody() {
      return bodyExecucaoGeral();
    },
    atualizarConteudo() {
      let body = this.getBody();
      this.$api.post("consultasql", body).then(res => {
        let arrRetorno = res.data;
        for (let i = 0; i < arrRetorno.length; i++) {
          let item = {
            id: Object.values(arrRetorno[i])[0],
            item: Object.values(arrRetorno[i])[1]
          };
          this.ObjConteudo.grupos[0].itens.push(item);
        }
      });
    }
  },
  created() {
    return this.atualizarConteudo();
  }
};
</script>
<style scoped></style>
