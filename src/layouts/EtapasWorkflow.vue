<template>
  <q-card class="my-card q-pa-md" style="width: 500px">
    <q-card-section>
      <q-form
        ref="formulario"
        @submit.prevent="onSubmit"
        class="q-gutter-md"
        v-for="(arrEtapas, index) in EtapasWorkFlow"
        :key="index"
      >
        <div class="flex justify-between">
          <div class="text-h6 color-titulo">
            {{ arrEtapas[this.etapaAtual].titulo_etapa }}
          </div>
          <q-icon
            name="close"
            class="text-red"
            style="font-size: 2rem;cursor: pointer;"
            @click="$emit('close')"
          />
        </div>
        <div
          v-for="(objComponenteTela, index) in arrEtapas[this.etapaAtual]
            .componente_tela"
          :key="index"
        >
          <q-input
            v-if="objComponenteTela.tipo_componente === 'input_texto'"
            bottom-slots
            dense
            v-model="arrModels[index]"
            :label="objComponenteTela.placeholder"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Campo Obrigatório']"
          />

          <q-select
            v-if="objComponenteTela.tipo_componente === 'selecao_multipla'"
            bottom-slots
            v-model="arrModels[index]"
            multiple
            dense
            :options="objComponenteTela.modelo"
            :label="objComponenteTela.placeholder"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Campo Obrigatório']"
          />
          <q-select
            v-if="objComponenteTela.tipo_componente === 'selecao_padrao'"
            bottom-slots
            dense
            v-model="arrModels[index]"
            :options="objComponenteTela.modelo"
            :label="objComponenteTela.placeholder"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Campo Obrigatório']"
          />
          <q-input
            v-if="objComponenteTela.tipo_componente === 'input_numero'"
            bottom-slots
            dense
            type="number"
            v-model="arrModels[index]"
            :label="objComponenteTela.placeholder"
            lazy-rules
            :rules="[
              val => (val !== null && val !== '') || 'Valor Obrigatório',
              val => (val > 0 && val < 10) || 'Valor acima do permitido'
            ]"
          />

          <q-input
            v-if="objComponenteTela.tipo_componente === 'input_data'"
            v-model="arrModels[index]"
            bottom-slots
            dense
            type="date"
          />
        </div>

        <div class="text-center">
          <q-btn
            label="Voltar"
            color="red"
            flat
            class="q-mr-sm"
            v-if="arrEtapas[this.etapaAtual]['id_etapa'] > 1"
            @click.prevent="onRetornar"
          />

          <q-btn
            label="Avançar"
            type="submit"
            color="primary"
            v-if="arrEtapas[this.etapaAtual]['id_etapa'] == 1"
          />
          <q-btn
            label="Concluído"
            type="submit"
            color="primary"
            v-if="
              arrEtapas[this.etapaAtual]['id_etapa'] ===
                arrEtapas[this.etapaAtual]['qtde_etapa']
            "
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: ["EtapasWorkFlow"],
  emits: ["close"],
  data() {
    return {
      accept: false,
      etapaAtual: 0,
      matrizModels: [],
      arrModels: [],
      qtdeEtapas: 2
    };
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.matrizModels[this.etapaAtual] = this.arrModels;

        this.etapaAtual++;
        if (this.matrizModels.length > this.etapaAtual) {
          this.arrModels = this.matrizModels[this.etapaAtual];
          this.arrModels = [];
        } else {
          this.arrWorkflow = this.arrModels;
        }
        if (this.etapaAtual === this.qtdeEtapas) {
          this.arrWorkflow = this.arrModels;
          this.$router.push({ name: "atividades" });
        } else {
          this.arrModels = [];
        }
      }
    },
    onReset() {
      this.arrModels = [];
    },
    onRetornar() {
      this.matrizModels[this.etapaAtual] = this.arrModels;
      this.etapaAtual--;
      this.arrModels = this.matrizModels[this.etapaAtual];
    }
  },
  setup() {
    const $store = useStore();
    const arrWorkflow = computed({
      get: () => $store.state.showcase.arrWorkflow,
      set: val => {
        $store.commit("showcase/getWorkflow", val);
      }
    });

    return {
      arrWorkflow
    };
  }
};
</script>

<style scoped>
* {
  padding: 3px 7px 3px 7px;
  margin: 0px;
}
.color-titulo::before {
  background-color: #109cf1;
  content: "";
  display: inline-block;
  width: 3px;
  height: 15px;
  margin-right: 5px;
}
</style>
