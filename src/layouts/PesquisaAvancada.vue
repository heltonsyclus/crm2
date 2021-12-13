<template>
  <q-card class="my-card q-pa-md" style="width: 550px">
    <q-card-section>
      <q-form ref="formulario" class="q-gutter-md" @submit="aplicaFiltro">
        <div class="flex justify-between">
          <div class="text-h6 color-titulo">
            Avançado
          </div>
          <q-icon
            name="close"
            class="text-red"
            style="font-size: 2rem;cursor: pointer;"
            @click="$emit('close')"
          />
        </div>

        <div class="row bg-grey-3">
          <q-select
            clearable
            bottom-slots
            v-model="this.arrModels.vCampo"
            dense="dense"
            :options="Campo"
            label="Campo"
            class="col-4"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Campo Obrigatório']"
          />
          <q-select
            clearable
            dense="dense"
            label="Critério"
            class="col-4"
            v-model="this.arrModels.vCriterio"
            :options="criterio"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Campo Obrigatório']"
          />
          <q-input
            v-model="this.arrModels.valorInput"
            label="Valor"
            dense
            clearable
            class="col-4"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Campo Obrigatório']"
          />
        </div>
        <div class="text-center">
          <q-btn unelevated type="submit" <<<<<<< HEAD class="capitalize
          q-mt-md" label="Avançar" ======= class="capitalize" label="Buscar"
          >>>>>>> 663d18ecf27b06ed2325358d29206643f058516b color="green" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
<script>
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  emits: ["close"],
  setup() {
    const $store = useStore();
    const arrModels = computed({
      get: () => $store.state.showcase.arrModels,
      set: val => {
        $store.commit("showcase/updateDrawerState", val);
      }
    });
    const miniState = ref(false);
    return {
      arrModels,
<<<<<<< HEAD
=======
      OP: ref(["E", "OU"]),
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
      Campo: ref(["Situação"]),
      criterio: ref(["Contendo"]),
      drawer: ref(false),
      miniState,
      drawerClick(e) {
        if (miniState.value) {
          miniState.value = false;
          e.stopPropagation();
        }
      }
    };
  },
  methods: {
    aplicaFiltro() {
      this.$emit("arrModels", this.arrModels);
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
* {
  padding: 4px 8px 8px 8px;
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
