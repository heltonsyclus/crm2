<template>
  <div>
    <q-tabs v-model="this.Tab" inline-label class="bg-grey-3 text-blue-8">
      <div class="barra">
        <div class="responsive-esquerda">
          <q-tab
            v-for="(btn, index) in ConteudoBtn"
            :key="index"
            :label="btn.grupo"
            :name="btn.grupo"
            :icon="btn.icone"
            :id_grupo="btn.id_grupo"
            class="capitalize"
            @click.prevent="onclickGrupo(index)"
          />
          <div class="flex items-center" v-if="Aplicacao === 'Agenda'">
            <span
              class="capitalize q-ml-md text-blue-8"
              style="font-size:15px;font-weight:500"
            >
              {{ this.nomeMes }}</span
            >
            <q-btn flat class="capitalize  q-ml-md" @click="$emit('hoje')">
              Hoje
            </q-btn>
            <q-btn unelevated style="margin: 2px;" @click="$emit('voltar')">
              &lt;
            </q-btn>
            <q-btn unelevated style="margin: 2px;" @click="$emit('adiantar')">
              &gt;
            </q-btn>
          </div>
        </div>
        <q-space />
        <div class="responsive-direita q-pt-xs">
          <div v-if="Aplicacao === 'AplicativosPadrao'">
            <q-btn flat dense>
              <q-icon name="settings" />
              <q-menu auto-close class="flex" style="width: 345px">
                <q-item
                  class="rounded-borders"
                  clickable
                  v-ripple.center
                  style="width: 115px"
                  v-for="(box, index) in ConteudoApp"
                  :key="index"
                >
                  <q-item-section style="text-align:center;margin:0 auto">
                    <q-avatar
                      style="text-align:center;margin:0 auto"
                      :icon="box.icone"
                      :color="box.cor"
                      text-color="white"
                    />
                    <q-item-label class="q-mt-sm">{{ box.card }} </q-item-label>
                  </q-item-section>
                </q-item>
              </q-menu>
            </q-btn>
            <q-btn flat dense>
              <q-icon name="help_outline" class="q-mx-md" />
            </q-btn>
          </div>
          <div
            class="flex items-center"
            style="paddding:10px 0px"
            v-if="Aplicacao === 'AplicativosPesquisa'"
          >
            <q-input
              v-model="pesquisaInput"
              style="width:150px"
              dense
              class="q-ml-md"
              label="Pesquisa"
              v-show="pesquisa"
              @keyup.enter="InputValor"
            />
            <q-btn
              unelevated
              round
              color="primary"
              icon="search"
              class="q-mx-md"
              @click="pesquisa = true"
            />
            <q-btn
              unelevated
              round
              color="primary"
              icon="filter_list"
              class="q-mr-md"
              @click="$emit('onClickFiltros')"
            />
          </div>
          <div v-if="Aplicacao === 'AplicativosSalvar'">
            <q-btn
              unelevated
              round
              color="red"
              icon="close"
              class="q-mr-md"
              size="12px"
              to="/atividade"
            />
            <q-btn
              unelevated
              round
              color="primary"
              icon="save"
              class="q-mr-md"
              size="12px"
            />
          </div>
          <div class="flex items-center wrap" v-if="Aplicacao === 'Agenda'">
            <q-select
              v-model="calendarioEventos"
              dense
              class="q-mr-md"
              :options="statusEventos"
            />
            <q-select
              v-model="calendarioAtual"
              dense
              :options="calendario"
              class="q-mr-md"
            />
          </div>
          <div
            class="flex items-center wrap q-mr-md"
            v-if="Aplicacao === 'Select'"
          >
            <q-select
              v-model="valorModel"
              dense
              :options="this.valoresRecurso"
              @blur="mudar(this.valoresRecurso)"
            />
          </div>
        </div>
      </div>
    </q-tabs>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: [
    "ConteudoBtn",
    "ConteudoApp",
    "Aplicacao",
    "nomeMes",
    "valoresRecurso"
  ],
  name: "BarraLayout",
  setup() {
    const $store = useStore();
    const calendarioAtual = computed({
      get: () => $store.state.showcase.calendarioAtual,
      set: val => {
        $store.commit("showcase/selectAgenda", val);
      }
    });
    const calendarioEventos = computed({
      get: () => $store.state.showcase.calendarioEventos,
      set: val => {
        $store.commit("showcase/selectStatusAgenda", val);
      }
    });
    const valorRecurso = computed({
      get: () => $store.state.showcase.valorRecurso,
      set: val => {
        $store.commit("showcase/infRecursos", val);
      }
    });
    return {
      calendarioAtual,
      calendarioEventos,
      valorRecurso,
      pesquisa: ref(false),
      ResultWorkflow: ref([]),
      darkDialog: ref(false),
      valorModel: ref("Escolha o dashboard"),
      pesquisaInput: ref([]),
      pesquisaArray: ref([]),
      calendario: ref(["Mensal", "Semanal", "Diário"]),
      statusEventos: ref(["Todos", "Eventos", "Atividades"])
    };
  },
  data() {
    return {
      date: [],
      Valor: []
    };
  },
  methods: {
    mudar(valoresRecurso) {
      // console.log(valoresRecurso);
      //  console.log(this.valorModel);
      for (
        let selectIndex = 0;
        selectIndex < valoresRecurso.length;
        selectIndex++
      ) {
        if (valoresRecurso[selectIndex] === this.valorModel) {
          //alert([selectIndex]);
          this.$emit("valorInputPesquisa", selectIndex);
        }
      }
    },
    onclickGrupo(ValorIndex) {
      this.$emit("OnClick", ValorIndex);
      this.Valor = ValorIndex;
    },
    tagsCard() {
      this.ResultWorkflow;
    },
    InputValor() {
      this.$emit("valorInputPesquisa", this.pesquisaInput);
      this.$emit("valorSelectPesquisa", this.pesquisaSelect);
    }
  },
  computed: {
    Tab() {
      return this.ConteudoBtn[this.Valor].grupo;
    }
  },
  created() {
    const json =
      '{"etapas":[{"titulo_etapa":"Filtro","id_etapa":1,"qtde_etapa":2,"componente_tela":[{"tipo_componente":"input_data","placeholder":"Período inicial"},{"tipo_componente":"input_data","placeholder":"Período final"},{"tipo_componente":"selecao_padrao","placeholder":"Avaliar","modelo":["Emissão","Previsão","Finalização"]},{"tipo_componente":"selecao_padrao","placeholder":"Situação","modelo":["Inicial","Planejamento","Execução","Finalizado"]},{"tipo_componente":"selecao_padrao","placeholder":"Tags","modelo":["Syclus 1","Syclus 2","Fiscal"]},{"tipo_componente":"selecao_padrao","placeholder":"Colaborador","modelo":["Henrique","Helton","Danilo"]}]},{"titulo_etapa":"Avançados","id_etapa":2,"qtde_etapa":2,"componente_tela":[{"tipo_componente":"selecao_padrao","placeholder":"OP","modelo":["E","OU"]},{"tipo_componente":"selecao_padrao","placeholder":"Campo","modelo":["Situação"]},{"tipo_componente":"selecao_padrao","placeholder":"Critério","modelo":["Contendo"]},{"tipo_componente":"input_texto","placeholder":"Valor"}]}]}';
    this.ResultWorkflow = JSON.parse(json);
    this.tagsCard();
    this.onclickGrupo(0);
    return;
  }
});
</script>

<style scoped>
.barra {
  width: 100%;
  display: flex;
}
.responsive-esquerda {
  display: flex;
}
@media only screen and (max-width: 632px) {
  .barra {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .responsive-esquerda {
    width: 100%;
  }
  .responsive-direita {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }
}
</style>
