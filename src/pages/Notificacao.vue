<template>
  <BarraLayout
    @OnClick="OnClickvalorNotificacaoor"
    :ConteudoBtn="Grupos"
    Aplicacao="AplicativosPesquisa"
  />
  <div class="column ContainerCardRetangular">
    <CardRetangulo
      v-for="(ObjCardRetangulo, index) in GrupoCardsRetangular"
      :key="index"
      :card="ObjCardRetangulo.card"
      :tipo_card_retangulo="ObjCardRetangulo.tipo_card_retangulo"
      :sub_tipo="ObjCardRetangulo.sub_tipo"
    />
  </div>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardRetangulo from "src/components/Cards/CardRetangulo.vue";
import { defineComponent } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  components: { BarraLayout, CardRetangulo },
  name: "Notificacao",
  data() {
    return {
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      Grupo: [],
      Grupos: [],
      GrupoCardsRetangular: []
    };
  },
  methods: {
    OnClickvalorNotificacaoor(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.Grupo = this.ObjDashboard["grupos"][IndexGrupo];
      this.GrupoCardsRetangular = this.Grupo["cards_retangulo"];
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
  computed: {
    valorNotificacao() {
      return this.GrupoCardsRetangular.length;
    }
  },
  created() {
    const json =
      '{"id_dashboard":8,"dashboard":"Notificação","grupos":[{"id_grupo":1,"cards_retangulo":[{"id_card":1,"card":"Notificação 1","tipo_card_retangulo":"RetanguloNotificacao"},{"id_card":2,"card":"Notificação 2","tipo_card_retangulo":"RetanguloNotificacao"},{"id_card":3,"card":"Notificação 3","tipo_card_retangulo":"RetanguloNotificacao"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  },
  setup() {
    const $store = useStore();
    const notificacao = computed({
      get: () => $store.state.showcase.notificacao,
      set: val => {
        $store.commit("showcase/numeroNotificacao", val);
      }
    });
    return {
      notificacao
    };
  }
});
</script>

<style>
.ContainerCardRetangular {
  width: 95%;
}
</style>
