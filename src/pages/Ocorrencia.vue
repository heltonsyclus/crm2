<template>
  <BarraLayout
    @OnClick="OnClickBarra"
    @onClickFiltros="EsconderCardInputs"
    @valorInputPesquisa="modelArray"
    :ConteudoBtn="Grupos"
    Aplicacao="AplicativosPesquisa"
  />

  <q-layout container style="height: 100vh">
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
      :width="340"
      :breakpoint="500"
      bordered
      class="bg-grey-5"
      v-show="showDrawer"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <CardPesquisa
            style="margin-left:15px"
            @arrModels="onClickValorInput"
          />
        </q-list>
      </q-scroll-area>

      <div class="absolute" style="top: 15px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="accent"
          icon="chevron_left"
          @click="EsconderCardInputs"
        />
      </div>
    </q-drawer>
    <div class="flex q-mr-sm">
      <div
        class="flex btn-chip"
        v-for="(objFiltro, i) in GetTextoChipItemFiltro"
        :key="i"
      >
        <span>{{ objFiltro }}</span>
        <q-icon
          name="highlight_off"
          size="20px"
          style="cursor:pointer"
          @click="removerChip(i)"
        />
      </div>
    </div>
    <div class="column ContainerCardRetangular">
      <CardRetangulo
        v-for="(ObjCardRetangulo, index) in GrupoCardsRetangular"
        :key="index"
        :card="ObjCardRetangulo.card"
        :tipo_card_retangulo="ObjCardRetangulo.tipo_card_retangulo"
        :sub_tipo="ObjCardRetangulo.sub_tipo"
      />
    </div>
  </q-layout>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardPesquisa from "src/components/Cards/CardPesquisa.vue";
import CardRetangulo from "src/components/Cards/CardRetangulo.vue";
import { defineComponent } from "vue";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { BarraLayout, CardRetangulo, CardPesquisa },
  name: "Ocorrencia",
  data() {
    return {
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      Grupo: [],
      Grupos: [],
      GrupoCardsRetangular: [],
      MostrarTitulo: false,
      showDrawer: false,
      filtroAvancado: false,
      valorFiltro: [],
      btnAdicionarCampoAvancado: false,
      arrayFiltros: [],
      GetTextoChipItemFiltro: []
    };
  },
  methods: {
    OnClickBarra(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.Grupo = this.ObjDashboard["grupos"][IndexGrupo];
      this.GrupoCardsRetangular = this.Grupo["cards_retangulo"];
    },

    EsconderCardInputs() {
      this.valorFiltro = [];
      console.log(this.arrayFiltros);
      for (let i = 0; i < this.arrayFiltros.length; i++) {
        let itemArray = this.arrayFiltros[i];
        if (
          itemArray.campo === "Emissão" ||
          itemArray.campo === "Previsão" ||
          itemArray.campo === "Finalização"
        ) {
          this.valorFiltro.vAvaliar = itemArray.campo;
          if (itemArray.criterio === "maior_igual") {
            this.valorFiltro.vDataInicial = itemArray.valor
              .replace(">", "")
              .split("/")
              .reverse()
              .join("-");
          }
          if (itemArray.criterio === "menor_igual") {
            this.valorFiltro.vDataFinal = itemArray.valor
              .replace("<", "")
              .split("/")
              .reverse()
              .join("-");
          }
        }
        if (itemArray.campo === "Situação") {
          this.valorFiltro.vSituacao = itemArray.valor;
        }
        if (itemArray.campo === "Tags") {
          this.valorFiltro.vTags = itemArray.valor;
        }
        if (itemArray.campo === "Colaborador") {
          this.valorFiltro.vColaborador = itemArray.valor;
        }
        if (itemArray.campo === "Operacao") {
          this.valorFiltro.vOP = itemArray.valor;
        }
        if (itemArray.campo === "Campo") {
          this.valorFiltro.vCampo = itemArray.valor;
        }
        if (itemArray.campo === "Criterio") {
          this.valorFiltro.vCriterio = itemArray.valor;
        }
        if (itemArray.campo === "Valor") {
          this.valorFiltro.valorInput = itemArray.valor;
        }
      }
      this.arrModels = this.valorFiltro;
      this.showDrawer = !this.showDrawer;
    },
    removerChip(i) {
      this.GetTextoChipItemFiltro.splice(i, 1);
      this.arrayFiltros.splice(i, 1);
    },
    modelArray(pesquisaInput) {
      this.GetTextoChipItemFiltro.push("pesquisa: " + pesquisaInput);
    },
    GetitemFiltro(pCampo, pCriterio, pValor) {
      return JSON.parse(
        '{"campo":"' +
          pCampo +
          '",' +
          '"criterio":"' +
          pCriterio +
          '",' +
          '"valor":"' +
          pValor +
          '"}'
      );
    },
    onClickValorInput(arrModels) {
      this.arrayFiltros = [];
      this.valorFiltro = arrModels;
      let itemFiltro;
      if (this.valorFiltro.vAvaliar != null) {
        if (this.valorFiltro.vDataInicial != null) {
          itemFiltro = this.GetitemFiltro(
            this.valorFiltro.vAvaliar,
            "maior_igual",
            this.valorFiltro.vDataInicial
              .split("-")
              .reverse()
              .join("/")
          );
          this.arrayFiltros.push(itemFiltro);
        }
        if (this.valorFiltro.vDataFinal != null) {
          itemFiltro = this.GetitemFiltro(
            this.valorFiltro.vAvaliar,
            "menor_igual",
            this.valorFiltro.vDataFinal
              .split("-")
              .reverse()
              .join("/")
          );
          this.arrayFiltros.push(itemFiltro);
        }
      }
      if (this.valorFiltro.vSituacao != null) {
        itemFiltro = this.GetitemFiltro(
          "Situação",
          "contendo",
          this.valorFiltro.vSituacao
        );
        this.arrayFiltros.push(itemFiltro);
      }
      if (this.valorFiltro.vTags != null) {
        itemFiltro = this.GetitemFiltro(
          "Tags",
          "contendo",
          this.valorFiltro.vTags
        );
        this.arrayFiltros.push(itemFiltro);
      }
      if (this.valorFiltro.vColaborador != null) {
        itemFiltro = this.GetitemFiltro(
          "Colaborador",
          "contendo",
          this.valorFiltro.vColaborador
        );
        this.arrayFiltros.push(itemFiltro);
      }
      if (
        this.valorFiltro.vOP != null ||
        this.valorFiltro.vCriterio != null ||
        this.valorFiltro.vCampo != null ||
        this.valorFiltro.valorInput != null
      ) {
        itemFiltro = this.GetitemFiltro(
          "Avançado",
          "contendo",
          this.valorFiltro.vOP +
            ", " +
            this.valorFiltro.vCriterio +
            ", " +
            this.valorFiltro.vCampo +
            ", " +
            this.valorFiltro.valorInput
        );
        this.arrayFiltros.push(itemFiltro);
      }
      this.GetTextoChipItemFiltro = [];
      for (let i = 0; i < this.arrayFiltros.length; i++) {
        this.GetTextoChipItemFiltro.push(
          this.arrayFiltros[i]["campo"] +
            " " +
            this.arrayFiltros[i]["criterio"]
              .replace("maior_igual", "> ")
              .replace("menor_igual", "< ") +
            " " +
            this.arrayFiltros[i]["valor"]
        );
      }
      this.btnAdicionarCampoAvancado = !this.btnAdicionarCampoAvancado;
      this.showDrawer = false;
      this.filtroAvancado = true;
    }
  },
  created() {
    const json =
      '{"id_dashboard":4,"dashboard":"Ocorrências","grupos":[{"id_grupo":1,"grupo":"Filtro","icone":"filter_list","cards_retangulo":[{"id_card":1,"card":"Atividade1","tipo_card_retangulo":"RetanguloOcorrencia"},{"id_card":2,"card":"Atividade2","tipo_card_retangulo":"RetanguloOcorrencia"},{"id_card":3,"card":"Atividade3","tipo_card_retangulo":"RetanguloOcorrencia"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  },
  /*beforeRouteEnter(to, from, next) {
    //let login = JSON.parse(localStorage.getItem("login"));
    const token = "";
    if (!token) {
      alert("Você não possue autorização!");
      next("");
    }
    next();
  },*/
  setup() {
    const login = computed({
      get: () => $store.state.showcase.login
    });
    const $store = useStore();
    const arrModels = computed({
      get: () => $store.state.showcase.arrModels,
      set: val => {
        $store.commit("showcase/updateDrawerState", val);
      }
    });
    const miniState = ref(false);
    return {
      login,
      darkDialog: ref(false),
      arrModels,
      drawer: ref(false),
      miniState,
      drawerClick(e) {
        if (miniState.value) {
          miniState.value = false;
          e.stopPropagation();
        }
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    //let login = JSON.parse(localStorage.getItem("login"));
    const token = "";
    if (!token) {
      alert("Você não possue autorização!");
      next("");
    }
    next();
  }
});
</script>

<style>
.ContainerCardRetangular {
  width: 95%;
}
.btn-chip {
  display: flex;
  align-items: center;
  color: #fff;
  border-radius: 15px;
  margin: 5px;
  background-color: #808080;
  padding: 5px 8px;
}

@media only screen and (max-width: 632px) {
}
</style>
