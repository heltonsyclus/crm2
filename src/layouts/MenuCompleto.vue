<template>
  <q-list class="my-card-m">
    <div class="flex justify-end" style="padding:20px">
      <q-icon
        name="close"
        class="text-red"
        style="font-size: 2rem;cursor: pointer;"
        @click="$emit('close')"
      />
    </div>
    <q-item
      clickable
      v-ripple
      :active="active"
      v-for="(list, index) in linksList"
      :key="index"
      :to="list.rota"
      style="padding:15px"
    >
      <q-item-section avatar>
        <q-icon :name="list.icon" size="25px" />
      </q-item-section>
      <q-item-section>{{ list.text }}</q-item-section>
      <q-icon name="expand_more" size="25px" />
    </q-item>
  </q-list>
</template>
<script>
import { ref } from "vue";
export default {
  emits: ["close"],
  setup() {
    return {
      active: ref(true),
      model: ref(""),
      grupos: ref([]),
      input: ref(false),
      linksList: [
        {
          icon: "dashboard",
          rota: "/",
          text: "Dashboard"
        },
        /* {
          icon: "description",
          rota: "/atividade",
          text: "Atividade"
        },
        {
          icon: "assignment",
          rota: "/Projeto",
          text: "Projeto"
        },*/
        {
          icon: "supervisor_account",
          rota: "/Cliente",
          text: "Cliente"
        },
        /* {
          icon: "done_all",
          rota: "/Ocorrencia",
          text: "Ocorrência"
        },
        {
          icon: "event",
          rota: "/Agenda",
          text: "Agenda"
        },
        {
          icon: "account_tree",
          rota: "/Workflow",
          text: "Workflow"
        },*/
        {
          icon: "engineering",
          rota: "/Colaborador",
          text: "Colaborador"
        },
        {
          icon: "insert_chart_outlined",
          rota: "/BI",
          text: "BI"
        }
      ]
    };
  },
  methods: {
    adicionarGrupo() {
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
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.my-card-m {
  position: relative;
  top: 0;
  left: 0;
  overflow: auto;
  width: 304px;
  height: 100vh;
  background-color: rgb(248, 248, 248);
}
.hover:hover {
  background-color: rgb(126, 182, 255);
}
</style>
