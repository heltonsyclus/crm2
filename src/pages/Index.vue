<template>
  <div>
    <BarraLayout
      @OnClick="OnClickBarraLayout"
      :ConteudoBtn="this.ObjDashboardPrincipal['grupos']"
      :ConteudoApp="GrupoCardsOpcionais"
      Aplicacao="AplicativosPadrao"
    />
    <div class="row">
      <CardBase
        class="q-ma-xs"
        v-for="(ObjCard, index) in ObjDashboardPrincipal.grupos[
          this.IndexGrupoAtual
        ].cards"
        :key="index"
        :id="ObjCard.id_card"
        :card="ObjCard.card"
        :ordem="ObjCard.ordem"
        cor_header="bg-primary"
        :btn_comando="ObjCard.btn_comando"
        :tipo_card="ObjCard.tipo_card"
        :sub_tipo="ObjCard.sub_tipo"
        :layout_lin_col="ObjCard.layout_lin_col"
        :link_item="ObjCard.link_item"
        :conteudo_cards="ObjCard.conteudo_card"
        :formato_card="ObjCard.formato_card"
      />
      <q-page-sticky position="bottom-right" :offset="fabPos">
        <q-fab
          icon="add"
          direction="up"
          color="primary"
          :disable="draggingFab"
          v-touch-pan.prevent.mouse="moveFab"
        >
          <q-fab-action
            color="blue-14"
            @click="$router.push({ name: 'projeto' })"
            icon="description"
          />
          <q-fab-action
            color="green-14"
            @click="$router.push({ name: 'atividade' })"
            icon="assignment"
          />
        </q-fab>
      </q-page-sticky>
    </div>
  </div>
</template>

<script>
import { layoutDashBoardPrincipal } from "src/commands/layoutDashboard.js";
import CardBase from "src/components/CardBase.vue";
import BarraLayout from "src/layouts/BarraLayout.vue";
import { defineComponent } from "vue";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { BarraLayout, CardBase },
  name: "dashboard",
  setup() {
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login
    });
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    return {
      login,
      fabPos,
      draggingFab,
      moveFab(ev) {
        draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;
        fabPos.value = [
          fabPos.value[0] - ev.delta.x,
          fabPos.value[1] - ev.delta.y
        ];
      }
    };
  },
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
    OnClickBarraLayout(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
    }
  },
  beforeRouteEnter(to, from, next) {
    //let login = JSON.parse(localStorage.getItem("login"));
    alert("Você não possui autorização!");
    next({ name: "login" });
  },
  created() {
    this.ObjDashboardPrincipal = layoutDashBoardPrincipal();
  }
});
</script>
