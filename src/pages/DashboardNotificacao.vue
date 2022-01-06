<template>
  <BarraLayout
    @OnClick="OnClickBarraLayout"
    @valorInputPesquisa="OnClickSelect"
    :ConteudoBtn="this.ObjDashboard['grupos']"
    Aplicacao="Select"
    :valoresRecurso="this.dashboardsColaboradorAtivo"
    @abrirNotificacao="abriNotificacao"
  />
  <div class="column" style="width:100%">
    <CardNotificacaoApi
      v-for="ObjCard in this.ObjDashboard.grupos[this.IndexGrupoAtual].cards"
      :key="ObjCard"
      style="margin:10px 10px"
      :id="ObjCard.id_card"
      :card="ObjCard.card"
      :ordem="ObjCard.ordem"
      cor_header="bg-primary"
      topo_fixo="topo_fixo"
      :height="ObjCard.height"
      :width="ObjCard.width"
      :btn_comando="ObjCard.btn_comando"
      :tipo_card="ObjCard.tipo_card"
      :sub_tipo="ObjCard.sub_tipo"
      :conteudo_card="ObjCard.conteudo_card"
      :link_item="ObjCard.link_item"
      :idPrincipal="this.idcolaboradorAtivo"
      :msg="this.msgCard"
      :abrirNotificacao="this.abrirNotificacao"
    />
  </div>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardNotificacaoApi from "src/components/Cards/CardNotificacaoApi.vue";
import { defineComponent } from "vue";
import { GeLayoutDashBoard } from "src/commands/layoutDashboard.js";
import { computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  components: { BarraLayout, CardNotificacaoApi },
  name: "DashboardNotificacao",
  data() {
    return {
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      Grupo: [],
      Grupos: [],
      dashboardsColaboradorAtivo: [],
      abrirNotificacao: false
    };
  },
  methods: {
    OnClickBarraLayout(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
    },
    OnClickSelect(selectIndex) {
      let login = JSON.parse(localStorage.getItem("login"));
      this.ObjDashboard = GeLayoutDashBoard(
        login.recursos.dashboard_notificacao.layout_dashboard[selectIndex]
          .id_layout_dashboard
      );
    },
    handleResize() {
      this.telaWidth = window.innerWidth;
      if (window.innerWidth <= 926) {
        for (
          let i = 0;
          i < this.ObjDashboard.grupos[this.IndexGrupoAtual].cards.length;
          i++
        ) {
          this.ObjDashboard.grupos[this.IndexGrupoAtual].cards[i]["width"] =
            "100%";
        }
      }
    },
    abriNotificacao() {
      this.abrirNotificacao = !this.abrirNotificacao;
    }
  },
  setup() {
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login
    });
    const notificacao = computed({
      get: () => $store.state.showcase.notificacao,
      set: val => {
        $store.commit("showcase/numeroNotificacao", val);
      }
    });
    return {
      login,
      notificacao
    };
  },
  computed: {
    valorNotificacao() {
      return this.GrupoCardsRetangular.length;
    }
  },
  beforeRouteEnter(to, from, next) {
    let login = JSON.parse(localStorage.getItem("login"));
    const permissao = login.recursos.dashboard_notificacao;
    if (!permissao) {
      alert("Você não possui autorização!");
      next("");
    }
    next();
  },
  created() {
    let login = JSON.parse(localStorage.getItem("login"));
    let recurso = login.recursos.dashboard_notificacao.layout_dashboard;
    for (let i = 0; i < recurso.length; i++) {
      this.dashboardsColaboradorAtivo.push(recurso[i].dashboard);
    }
    this.ObjDashboard = GeLayoutDashBoard(recurso[0].id_layout_dashboard);
    this.msgCard = "limpar_conteudo";
    this.notificacao = this.ObjDashboard.grupos[0].cards.length;
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
});
</script>
