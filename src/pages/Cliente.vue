<template window-height>
  <div class="flex" style="max-width:100%">
    <div class="col1">
      <div>
        <q-card class="my-card">
          <q-card-section>
            <p style="font-weight:500;font-size:16px">Pesquisa de cliente</p>
            <q-separator class="q-mb-sm" />
            <q-input
              v-model="nomeFantasia"
              dense
              label="Digite o nome ou CNPJ"
              @keyup.enter="ProcurarCliente()"
            >
              <template v-slot:prepend>
                <q-icon size="18px" name="search" />
              </template>
            </q-input>
          </q-card-section>
          <div style="text-align:center">
            <q-btn
              rounded
              dense
              unelevated
              size="14px"
              style="padding:0px 15px"
              class="capitalize q-mb-md"
              color="primary"
              label="Buscar"
              @click="ProcurarCliente()"
            />
          </div>
        </q-card>

        <q-dialog
          v-model="exibeSelecaoCliente"
          persistent
          transition-show="flip-down"
          transition-hide="flip-up"
        >
          <q-card style="width:60%">
            <q-card-section class="items-center q-pb-sm topo-fixo ">
              <div class="flex justify-between items-center" style="width:100%">
                <div class="text-h6 color-titulo">Selecione a cliente</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
              </div>
            </q-card-section>
            <div class="margin-top">
              <q-card-section
                class="card-primary flex"
                style="margin:0px 10px 5px"
                v-for="(cliente, index) in this.dadosCliente"
                :key="cliente"
                @click="selecionarCliente(index)"
              >
                <p>{{ cliente.nome_fantasia }}</p>
              </q-card-section>
            </div>
          </q-card>
        </q-dialog>
      </div>
      <q-card
        class="my-card bg-light-blue-9"
        style="color:#fff"
        v-show="clienteAtivo"
      >
        <q-card-section>
          <div class="flex justify-between items-center">
            <p style=" font-size:16px;font-weight:700">Dados do cliente</p>
            <q-btn
              round
              flat
              dense
              text-color="white"
              icon="autorenew"
              @click.prevent="carregarDadosCliente"
              style="margin-bottom:5px"
            >
            </q-btn>
          </div>
          <q-separator color="white" class="q-mb-sm" />
          <div
            v-for="cliente in this.objCliente"
            :key="cliente"
            class="column"
            style="font-style:italic;"
          >
            <div style="width:100%">
              <q-icon size="18px" name="money" class="q-pr-sm" /><span>{{
                cliente.id_cliente
              }}</span>
            </div>
            <div style="width:100%">
              <q-icon size="18px" name="business" class="q-pr-sm" /><span>{{
                cliente.nome_fantasia
              }}</span>
            </div>
            <div style="width:100%">
              <q-icon size="18px" name="business" class="q-pr-sm" /><span>
                {{ cliente.razao_social }}
              </span>
            </div>
            <div style="width:100%">
              <q-icon size="18px" name="pin" class="q-pr-sm" />
              <span>{{ cliente.cpf_cnpj }}</span>
            </div>
            <div style="width:100%">
              <q-icon size="18px" name="phone_in_talk" class="q-pr-sm" />
              <span v-for="telefone in this.arrayTelefone" :key="telefone"
                >{{ telefone }},
              </span>
              <span>{{ this.telefone[0] }}</span>
              <span
                class="btn-v-mais"
                v-show="btnVejaMais"
                @click.prevent="btnVmais()"
              >
                veja mais
              </span>
            </div>
            <div v-for="emails in this.email" :key="emails">
              <q-icon size="18px" name="email" class="q-pr-sm" />
              <span style="width:100%">{{ emails }}</span>
            </div>
            <div
              style="width:100%"
              v-for="bairros in this.bairro"
              :key="bairros"
            >
              <q-icon size="18px" name="share_location" class="q-pr-sm" />
              <span>{{ bairros }}</span>
            </div>
            <div>
              <q-icon size="18px" name="done" class="q-pr-sm" />
              <span
                class="bg-positive"
                style="margin-bottom:5px;padding:1px 5px 1px 0px"
              >
                Ativo
              </span>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <div>
        <q-card class="my-card" v-show="clienteAtivos">
          <q-card-section>
            <p style="font-weight:500;font-size:16px">Estatísticas</p>
            <q-separator class="q-mb-sm" />
            <div class="flex">
              <q-card class="card-secundario">
                <div>
                  <p>Atividade pendentes</p>
                  <span class="card-span">{{ "1" }}</span>
                </div>
              </q-card>
              <q-card class="card-secundario">
                <div>
                  <p>Projetos ativos</p>
                  <span class="card-span">{{ "1" }}</span>
                </div>
              </q-card>
              <q-card class="card-secundario">
                <div>
                  <p>Últimos 30 dias</p>
                  <span class="card-span">{{ "8" }}</span>
                </div>
              </q-card>
            </div>
            <div class="flex">
              <q-card class="card-secundario">
                <div>
                  <p style="padding-bottom:5px">Suporte</p>
                  <span class="card-span">{{ "30" }}</span>
                </div>
              </q-card>
              <q-card class="card-secundario">
                <div>
                  <p style="padding-bottom:10px">Segmento</p>
                  <span class="card-span" style="font-size:13px">{{
                    "Tecnológica"
                  }}</span>
                </div>
              </q-card>
              <q-card class="card-secundario">
                <div>
                  <p style="padding-bottom:5px">Regime</p>
                  <span class="card-span" style="font-size:13px">{{
                    "Simples nacional"
                  }}</span>
                </div>
              </q-card>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="col2">
      <BarraLayout
        @OnClick="OnClickBarraLayout"
        :ConteudoBtn="this.ObjDashboard['grupos']"
      />
      <div class="row">
        <CardGrupoApi
          class="q-mt-xs card-responsivo"
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
import { layoutDashBoardCliente } from "src/commands/layoutDashboard.js";
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardGrupoApi from "src/components/Cards/CardGrupoApi.vue";
import {
  bodyProcuraIdCliente,
  bodyDadosCliente
} from "src/boot/consultaSql.js";
import { defineComponent } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { BarraLayout, CardGrupoApi },
  name: "Cliente",
  data() {
    return {
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      GrupoCards: [],
      GrupoCardsOpcionais: [],
      nomeFantasia: null,
      idClienteAtivo: null,
      clienteAtivo: false,
      objCliente: [],
      dadosCliente: null,
      exibeSelecaoCliente: false,
      telaWidth: "",
      msgCard: "",
      bairro: "",
      telefone: [],
      arrayTelefone: [],
      email: "",
      btnVejaMais: false
    };
  },
  methods: {
    parar() {
      this.msgCard = null;
    },
    btnVmais() {
      for (let i = 1; i < this.telefone.length; i++) {
        this.arrayTelefone.unshift(this.telefone[i]);
        this.btnVejaMais = false;
      }
    },
    OnClickBarraLayout(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.AtualizarCardsGrupoAtual();
    },
    AtualizarCardsGrupoAtual() {
      this.msgCard = "atualizar_conteudo";
      setTimeout(() => {
        this.msgCard = "";
      }, 1000);
    },

    ProcurarCliente() {
      this.objCliente = "";
      this.arrayTelefone = [];
      if (this.nomeFantasia === null) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Preencha os campos!"
        });
      } else {
        this.clienteAtivo = false;
        let body = bodyProcuraIdCliente(this.nomeFantasia.toUpperCase());
        this.$api.post("consultasql", body).then(res => {
          let arrRetorno = res.data;
          if (arrRetorno.length <= 0) {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Esse cliente não existe ou está inativo!"
            });
            return false;
          }
          this.dadosCliente = arrRetorno;
          if (this.dadosCliente.length <= 1) {
            this.dadosCliente = this.dadosCliente[0];
            this.carregarDadosCliente();
          } else {
            this.exibeSelecaoCliente = true;
          }
        });
      }
      this.nomeFantasia = null;
    },
    carregarDadosCliente() {
      if (this.dadosCliente.id_cliente === null) {
        return false;
      }
      //Setando cliente ativo
      this.clienteAtivo = true;
      this.idClienteAtivo = this.dadosCliente.id_cliente;

      //carregando dados Cliente
      let body = bodyDadosCliente(this.idClienteAtivo);
      this.$api.post("consultasql", body).then(res => {
        let arrRetorno = res.data;
        this.objCliente = arrRetorno;
        this.bairro = this.objCliente[0]["bairro"].split(",");
        this.email = this.objCliente[0]["email"].split(";");
        this.telefone = this.objCliente[0]["telefone"].split(";");
        if (this.telefone.length >= 2) {
          this.btnVejaMais = true;
        }
      });

      //atualizar conteudo dos cards do grupo/dashboard atual
      this.AtualizarCardsGrupoAtual();
      /*
      this.msgCard = "atualizar_conteudo";
      setTimeout(() => {
        this.msgCard = "";
      }, 2000);
      */
    },
    selecionarCliente(index) {
      this.exibeSelecaoCliente = false;
      this.dadosCliente = this.dadosCliente[index];
      this.carregarDadosCliente();
    },
    handleResize() {
      this.telaWidth = window.innerWidth;
      // console.log(window.innerWidth);
      if (window.innerWidth <= 926) {
        // this.ObjDashboard.grupos[this.IndexGrupoAtual].cards = "100%";
        for (
          let i = 0;
          i < this.ObjDashboard.grupos[this.IndexGrupoAtual].cards.length;
          i++
        ) {
          this.ObjDashboard.grupos[this.IndexGrupoAtual].cards[i]["width"] =
            "100%";
        }
      }
    }
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
  beforeRouteEnter(to, from, next) {
    let login = JSON.parse(localStorage.getItem("login"));
    const token = login["token"];
    if (!token) {
      next("Login");
    }
    next();
  },
  created() {
    this.ObjDashboard = layoutDashBoardCliente();
    this.msgCard = "limpar_conteudo";
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
});
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
.card-primary {
  background-color: #dadbdd;
  margin: 2px;
  margin-bottom: 20px;
  color: rgb(51, 51, 51);
}
.card-primary:hover {
  background-color: #6497ff;
}
.my-card {
  margin: 10px 0px 0px 10px;
}
.card-secundario {
  background-color: #447dee;
  width: 32%;
  min-height: 87px;
  text-align: center;
  margin: 1px;
  padding: 12px 2px 0px 2px;
  font-size: 12px;
  color: rgb(255, 255, 255);
}
.btn-v-mais {
  color: #8fc9f0;
  font-weight: 500;
}
.btn-v-mais:hover {
  color: #949494;
}
.card-span {
  font-size: 18px;
  font-weight: 500;
  padding-top: 50px;
}
.color-titulo::before {
  background-color: #109cf1;
  content: "";
  display: inline-block;
  width: 3px;
  height: 15px;
  margin-right: 5px;
}
.topo-fixo {
  position: fixed;
  z-index: 2;
  background-color: #fdfdfd;
}
.margin-top {
  margin-top: 63px;
}
.col1 {
  background-color: #e0e0e0;
  min-height: 100vh;
  width: 25%;
}
.col2 {
  width: 75%;
}
@media only screen and (max-width: 1320px) {
  .col1 {
    width: 100%;
    background-color: #e6e6e6;
    min-height: 40vh;
  }
  .col2 {
    width: 100%;
  }
  .my-card {
    max-width: 100%;
    min-width: 330px;
    margin: 10px 10px 10px 10px;
  }
  .card-secundario {
    width: 32%;
    height: 87px;
    padding: 12px 5px 0px 5px;
  }
}
</style>
