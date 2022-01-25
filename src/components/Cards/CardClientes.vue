<template>
  <q-card class="my-card q-pa-md" style="width: 550px">
    <q-card-section>
      <q-form ref="formulario" class="q-gutter-md">
        <div class="flex justify-between">
          <div class="text-h6 color-titulo">
            {{ "Grupos" }}
          </div>
          <q-icon
            name="close"
            class="text-red"
            style="font-size: 2rem;cursor: pointer;"
            @click="$emit('close')"
          />
        </div>

        <div
          v-for="(models, index) in grupos"
          :key="index"
          class="flex justify-between"
        >
          <p>
            <strong> {{ index + 1 }}</strong> - {{ models.model }}
          </p>
          <q-icon
            name="closed"
            color="gray"
            style="cursor:pointer"
            size="18px"
            @click="remover(index)"
          />
        </div>

        <div>
          <q-btn
            round
            flat
            size="18px"
            text-color="green"
            icon="add_circle"
            @click.prevent="input = true"
          >
          </q-btn>
          <span>Adicionar grupos</span>
        </div>

        <q-input
          v-model="model"
          label="Adicione o nome do grupo"
          dense
          v-show="input"
          @keyup.enter="adicionarGrupo"
        />

        <div style="text-align:center">
          <q-btn
            v-if="grupos.length >= 1"
            label="Salvar"
            color="primary"
            class="capitalize"
            @click.prevent="salvarGrupos"
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
<script>
import { ref } from "vue";
export default {
  emits: ["close"],
  setup() {
    return {
      model: ref(""),
      grupos: ref([]),
      input: ref(false)
    };
  },
  methods: {
    /*  adicionarGrupo() {
      this.grupos.push({
        model: this.model
      });
      this.input = false;
      this.model = "";
    },
    remover(index) {
      this.grupos.splice(index, 1);
    },
    salvarGrupos() {
      console.log(this.grupos);
    }*/
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
