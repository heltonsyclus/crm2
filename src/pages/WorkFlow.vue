<template>
  <BarraLayout
    @OnClick="OnClickValor"
    :ConteudoBtn="Grupos"
    :ConteudoApp="GrupoCardsOpcionais"
    Aplicacao="AplicativosPadrao"
  />
  <div class="flex">
    <CardBase
      class="q-ma-xs"
      v-for="(ObjCard, index) in GrupoCards"
      :key="index"
      :id="ObjCard.id_card"
      :card="ObjCard.card"
      :ordem="ObjCard.ordem"
      cor_header="bg-primary"
      :btn_comando="ObjCard.btn_comando"
      :tipo_card="ObjCard.tipo_card"
      :sub_tipo="ObjCard.sub_tipo"
      :conteudo_card="ObjCard.conteudo_card"
    />
  </div>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardBase from "src/components/CardBase.vue";
import { defineComponent } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  components: { BarraLayout, CardBase },
  name: "WorkFlow",
  data() {
    return {
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      Grupos: [],
      GrupoCards: [],
      GrupoCardsOpcionais: []
    };
  },
  methods: {
    OnClickValor(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.Grupo = this.ObjDashboard["grupos"][IndexGrupo];
      this.GrupoCards = this.Grupo["cards"];
      this.GrupoCardsOpcionais = this.Grupo["cards_opcionais"];
    }
  },
  beforeRouteEnter(to, from, next) {
    //let login = JSON.parse(localStorage.getItem("login"));
    const token = "";
    if (!token) {
      alert("Você não possui autorização!");
      next("");
    }
    next();
  },
  setup() {
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login
    });
    return {
      login
    };
  },
  created() {
    const json =
      '{"id_dashboard":7,"dashboard":"Workflow","grupos":[{"id_grupo":1,"grupo":"Criar Workflow","icone":"assignment_turned_in","cards":[{"id_card":31,"card":"Criar Workflow","ordem":1,"altura":300,"comprimento":250,"tipo_card":"Botao","sub_tipo":"lista-padrao","conteudo_card":[{"conteudo":"Crie sua Workflow de forma rápida e eficaz.","get_workflow":"WorkFlowWorkflow"}]}],"cards_opcionais":[{"id_card":31,"card":"Criar Workflow","ordem":1,"icone":"search","cor":"primary"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  }
});
</script>
