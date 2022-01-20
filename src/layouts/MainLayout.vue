<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-grey-1">
      <q-toolbar class="text-primary">
        <img
          src="../assets/syclus.png"
          alt="Syclus"
          class="rotate-225"
          style="cursor:pointer"
          @click="$router.push({ name: 'dashboard' })"
        />
        <q-toolbar-title class="text-weight-bold ">
          <span
            @click="$router.push({ name: 'dashboard' })"
            style="cursor:pointer"
            class="logo-texto"
            >Syclus 2.0</span
          >
        </q-toolbar-title>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="notifications"
            @click="$router.push({ name: 'notificacao' })"
          >
            <q-badge color="blue" text-color="white" floating>
              {{ notificacao }}
            </q-badge>
            <q-tooltip>Syclus Notificação</q-tooltip>
          </q-btn>
          <q-btn
            round
            dense
            flat
            color="text-grey-7"
            icon="apps"
            class="q-ml-sm"
          >
            <q-tooltip>Syclus Apps</q-tooltip>
          </q-btn>
          <span style="font-weight:500" class="capitalize text-grey-8">{{
            this.nomeUsuario
          }}</span>
          <q-btn round flat no-wrap>
            <q-avatar size="30px">
              <img :src="this.imgColaborador" />
            </q-avatar>
            <q-tooltip>Colaborador</q-tooltip>
            <q-menu style="text-align:center">
              <q-list dense>
                <q-item clickable class="flex ">
                  <q-item-section>Versão</q-item-section>
                  <q-item-section>2.0.0.1</q-item-section>
                </q-item>
                <q-separator />
                <q-item
                  clickable
                  class="GL__menu-link"
                  @click="$router.push({ name: 'Login' })"
                >
                  <q-item-section @click.prevent="limparToken()"
                    >Sair</q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn
            v-show="menuMobile"
            flat
            round
            color="primary"
            size="14px"
            icon="menu"
            @click="toggleLeftDrawer"
          />
        </div>
      </q-toolbar>
    </q-header>
    <div v-if="menuMobile === false">
      <MenuFlutuante />
    </div>
    <div v-if="menuMobile === true">
      <q-drawer
        v-model="leftDrawerOpen"
        bordered
        class="bg-grey-2"
        :width="240"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item
              v-for="link in links1"
              :key="link.text"
              :to="link.rota"
              v-ripple
              clickable
            >
              <q-item-section avatar>
                <q-icon color="grey" :name="link.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ link.text }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
//import PerfilUsuario from "./PerfilUsuario.vue";
import MenuFlutuante from "./MenuFlutuante.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  components: { MenuFlutuante },
  name: "MainLayout",
  setup() {
    const leftDrawerOpen = ref(false);
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    const $store = useStore();
    const notificacao = computed({
      get: () => $store.state.showcase.notificacao
    });

    return {
      menuDesktop: ref(true),
      menuMobile: ref(false),
      nomeUsuario: ref(""),
      imgColaborador: ref(""),
      notificacao,
      toggleLeftDrawer,
      leftDrawerOpen,
      links1: [
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
  },
  methods: {
    limparToken() {
      window.location.reload(true);
      window.localStorage.clear();
      window.location.href = window.location.href;
      window.location.replace("https://sycluscrm-chi.vercel.app/#/Login");
      this.login = [];
    },
    handleResize() {
      if (window.innerWidth <= 800) {
        this.menuDesktop = false;
        this.menuMobile = true;
        this.leftDrawerOpen = false;
      }
      if (window.innerWidth >= 800) {
        this.menuDesktop = true;
        this.menuMobile = false;
        this.leftDrawerOpen = false;
      }
    }
  },
  created() {
    let login = JSON.parse(localStorage.getItem("login"));
    this.nomeUsuario = login.usuario;
    this.imgColaborador = login.img;
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
});
</script>

<style scoped>
.logo-texto {
  font-size: 22px;
}
@media (max-width: 500px) {
  .logo-texto {
    font-size: 15px;
  }
}
</style>
