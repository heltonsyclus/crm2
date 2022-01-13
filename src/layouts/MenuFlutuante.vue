<template>
  <q-drawer
    class="bg-primary text-grey-1 no-scroll black"
    :width="58"
    :breakpoint="500"
    behavior="desktop"
    show-if-above
  >
    <q-toolbar>
      <q-btn
        flat
        round
        dense
        icon="menu"
        style="margin:10px 0px 50px"
        @click="open('left')"
      />

      <q-dialog v-model="dialog" :position="position" persistent>
        <MenuCompleto @close="dialog = false" />
      </q-dialog>
    </q-toolbar>
    <q-item
      v-for="(list, index) in linksList"
      :key="index"
      :to="list.rota"
      active-class="bg-active"
      exact
    >
      <q-item-section avatar>
        <q-icon :name="list.icon" />
      </q-item-section>
    </q-item>
  </q-drawer>

  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<script>
import { defineComponent, ref } from "vue";
import MenuCompleto from "./MenuCompleto.vue";
export default defineComponent({
  name: "MenuFlutuante",
  components: { MenuCompleto },
  setup() {
    const dialog = ref(false);
    const position = ref("top");

    return {
      dialog,
      position,
      open(pos) {
        position.value = pos;
        dialog.value = true;
      },
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
          icon: "fact_check",
          rota: "/Projetos",
          text: "Projetos"
        },
        {
          icon: "insert_chart_outlined",
          rota: "/BI",
          text: "BI"
        }
      ]
    };
  }
});
</script>

<style lang="scss">
.menu {
  width: 450px;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
