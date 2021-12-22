<template>
  <div class="col2">
    <BarraLayout
      @OnClick="OnClickBarraLayout"
      :ConteudoBtn="this.ObjDashboard['grupos']"
    />
    <div>
      <div
        class="row"
        v-if="
          this.ObjDashboard.grupos[this.IndexGrupoAtual].cards[0].tipo_card ===
            'CardGrupoApi'
        "
      >
        <CardGrupoApi
          class="q-ma-xs"
          style="margin:5px;margin-bottom:5px"
          v-for="(ObjCard, index) in this.ObjDashboard.grupos[
            this.IndexGrupoAtual
          ].cards"
          :key="index"
          :id="ObjCard.id_card"
          :card="ObjCard.card"
          :ordem="ObjCard.ordem"
          cor_header="bg-primary"
          topo_fixo="topo_fixo"
          :width="ObjCard.width"
          :height="ObjCard.height"
          :btn_comando="ObjCard.btn_comando"
          :tipo_card="ObjCard.tipo_card"
          :sub_tipo="ObjCard.sub_tipo"
          :conteudo_card="ObjCard.conteudo_card"
          :link_item="ObjCard.link_item"
          :idPrincipal="this.idClienteAtivo"
          :msg="this.msgCard"
        />
      </div>

      <div
        class="row"
        v-if="
          this.ObjDashboard.grupos[this.IndexGrupoAtual].cards[0].tipo_card ===
            'CardGraficoApi'
        "
      >
        <CardGraficoApi
          class="q-ma-xs"
          style="margin:5px;margin-bottom:5px"
          v-for="(ObjCard, index) in this.ObjDashboard.grupos[
            this.IndexGrupoAtual
          ].cards"
          :key="index"
          :id="ObjCard.id_card"
          :card="ObjCard.card"
          :ordem="ObjCard.ordem"
          cor_header="bg-primary"
          topo_fixo="topo_fixo"
          :width="ObjCard.width"
          :height="ObjCard.height"
          :btn_comando="ObjCard.btn_comando"
          :tipo_card="ObjCard.tipo_card"
          :sub_tipo="ObjCard.sub_tipo"
          :conteudo_card="ObjCard.conteudo_card"
          :link_item="ObjCard.link_item"
          :idPrincipal="this.idClienteAtivo"
          :msg="this.msgCard"
        />
      </div>
      <div
        class="row"
        v-if="
          this.ObjDashboard.grupos[this.IndexGrupoAtual].cards[0].tipo_card ===
            'CardListaApi'
        "
      >
        <CardListaApi
          class="q-ma-xs"
          style="margin:5px;margin-bottom:5px"
          v-for="(ObjCard, index) in this.ObjDashboard.grupos[
            this.IndexGrupoAtual
          ].cards"
          :key="index"
          :id="ObjCard.id_card"
          :card="ObjCard.card"
          :ordem="ObjCard.ordem"
          cor_header="bg-primary"
          topo_fixo="topo_fixo"
          :width="ObjCard.width"
          :height="ObjCard.height"
          :btn_comando="ObjCard.btn_comando"
          :tipo_card="ObjCard.tipo_card"
          :sub_tipo="ObjCard.sub_tipo"
          :conteudo_card="ObjCard.conteudo_card"
          :link_item="ObjCard.link_item"
          :idPrincipal="this.idClienteAtivo"
          :msg="this.msgCard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { GeLayoutDashBoard } from "src/commands/layoutDashboard.js";
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardGrupoApi from "src/components/Cards/CardGrupoApi.vue";
import CardListaApi from "src/components/Cards/CardListaApi.vue";
import CardGraficoApi from "src/components/Cards/CardGraficoApi.vue";
import { defineComponent } from "vue";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { BarraLayout, CardGrupoApi, CardListaApi, CardGraficoApi },
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
      console.log(IndexGrupo);
      this.IndexGrupoAtual = IndexGrupo;
      this.AtualizarCardsGrupoAtual();
    },
    AtualizarCardsGrupoAtual() {
      this.msgCard = "atualizar_conteudo";
      setTimeout(() => {
        this.msgCard = "";
      }, 1000);
    }
  },
  beforeRouteEnter(to, from, next) {
    let login = JSON.parse(localStorage.getItem("login"));
    const permissao = login.recursos.area_trabalho;
    if (!permissao) {
      alert("Você não possui autorização!");
      next("");
    }
    next();
  },
  created() {
    let login = JSON.parse(localStorage.getItem("login"));
    this.ObjDashboard = GeLayoutDashBoard(
      login.recursos.area_trabalho.id_layout_dashboard
    );
    this.msgCard = "limpar_conteudo";
    this.AtualizarCardsGrupoAtual();
  }
});
</script>
