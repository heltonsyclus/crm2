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
        <q-toolbar-title
          class="text-weight-bold "
          style="cursor:pointer"
          @click="$router.push({ name: 'dashboard' })"
        >
          Syclus CRM
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
          <q-btn round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Syclus Apps</q-tooltip>
          </q-btn>
          <q-btn round flat no-wrap>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Colaborador</q-tooltip>
            <q-menu>
              <q-list dense>
                <!--     <q-item clickable class="GL__menu-link">
                  <q-item-section @click="darkDialog = true"
                    >Perfil</q-item-section
                  >
                  <q-dialog
                    v-model="darkDialog"
                    persistent
                    transition-show="flip-down"
                    transition-hide="flip-up"
                  >
                    <PerfilUsuario />
                  </q-dialog>
                </q-item>-->

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
        </div>
      </q-toolbar>
    </q-header>
    <MenuFlutuante />
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
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login
    });
    const notificacao = computed({
      get: () => $store.state.showcase.notificacao
    });

    return {
      login,
      notificacao,
      Ocorrencia: 250,
      MenuFlutuante: false,
      darkDialog: ref(false),
      linksList: [
        {
          icon: "dashboard",
          rota: "/"
        },
        {
          icon: "description",
          rota: "/atividade"
        },
        {
          icon: "assignment",
          rota: "/projeto"
        },
        {
          icon: "supervisor_account",
          rota: "/cliente"
        },
        {
          icon: "done_all",
          rota: "/ocorrencia"
        },
        {
          icon: "event",
          rota: "/agenda"
        },
        {
          icon: "account_tree",
          rota: "/workflow"
        }
      ]
    };
  },
  methods: {
    limparToken() {
      window.localStorage.clear();
      this.login = [];
      //this.$router.push({ name: "Login" });
    }
  }
});
</script>
