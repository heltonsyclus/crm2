<template>
  <!--OCORRÊNCIA-->
  <div
    class="my-card-s-100mx-30 bg-indigo-2"
    style="padding-bottom:20px"
    v-if="tipo_card_retangulo === 'RetanguloOcorrencia'"
  >
    <div class="flex justify-between items-center">
      <p style="font-weight:700;padding-top:15px;font-size:18px">
        {{ card }}
      </p>
      <div>
        <q-btn
          rounded
          flat
          dense
          text-color="red"
          icon="close"
          @click.prevent="$emit('btnEditar')"
        >
        </q-btn>
        <q-btn
          rounded
          flat
          dense
          text-color="green"
          icon="done"
          @click.prevent="$emit('btnEditar')"
        >
        </q-btn>
      </div>
    </div>
    <q-separator class="q-mb-sm" color="grey-1" />
    <div class="flex items-center q-mb-xs" style="color:dark">
      <q-badge class="q-mr-sm q-px-md bg-dark" text-color="white">
        {{ "Helton" }}</q-badge
      >
      <q-icon name="event" size="20px" />05/10/2021
    </div>
    <p style="font-style:italic;padding-top:5px">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est accusantium
      suscipit aliquam nihil assumenda cupiditate autem laborum iure totam
      repellendus.
    </p>
  </div>
  <!--NOTIFICAÇÃO-->
  <div
    class="my-card-s-100mx-30 bg-grey-4"
    style="padding-bottom:20px"
    v-if="tipo_card_retangulo === 'RetanguloNotificacao'"
  >
    <div class="flex justify-between items-center">
      <span
        style="font-weight:700;color:#02456e;font-size:17px"
        class="color-paragrafo-blue q-my-sm"
      >
        {{ card }}
      </span>
      <div>
        <q-btn
          round
          size="10px"
          color="light-blue-10"
          icon="question_answer"
          class="q-mr-sm"
          dense
          @click="NotificacaoOcorrencia = true"
        />
        <q-btn round size="10px" dense color="green" icon="done" />
      </div>
    </div>
    <div class="flex items-center q-mb-sm">
      <q-badge class="q-mr-sm q-py-sm">{{ "Helton" }}</q-badge>
      <q-badge class="q-mr-sm q-py-sm" color="dark">{{
        " Desenvolvimento"
      }}</q-badge>
      <q-badge class="q-mr-sm q-py-sm" color="purple">{{
        "Syclus 2.0"
      }}</q-badge>
      <q-badge class="q-mr-sm q-py-sm" color="red">{{
        "Planejamento"
      }}</q-badge>
    </div>
    <div class="flex items-center q-mb-md">
      <q-icon
        name="supervisor_account"
        class="text-dark"
        style="font-size: 2em;"
      /><span>Colaborador:</span>
      <q-avatar size="30px" class="q-ml-sm">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
      <q-icon
        name="account_circle"
        class="text-dark q-ml-mr"
        style="font-size: 2em;"
      /><span>Responsável:</span>
      <q-avatar size="30px" class="q-ml-sm">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
    </div>
    <div class="bg-light-blue-2">
      <p style="padding:10px">
        <strong>{{ "Helton" }}:</strong> {{ "Desenvolvendo telas" }}
      </p>
    </div>
    <q-input
      v-model="textarea"
      type="textarea"
      style="padding:10px;height:10px"
      class="bg-light-blue-2 q-mt-md"
      v-show="NotificacaoOcorrencia"
    />
  </div>
  <!--Edicao-Padrao-->
  <div class="my-card-s-100mx-30" v-if="tipo_card_retangulo === 'EdicaoTitulo'">
    <div class="flex justify-between">
      <q-item-section style="height:38px;font-weight:700;color:#02456e;">
        {{ card }}
      </q-item-section>
      <q-btn
        round
        flat
        text-color="primary"
        icon="mode_edit"
        @click.prevent="$emit('btnEditar')"
      >
      </q-btn>
    </div>
    <div class="q-pb-sm" style="width: 100%" v-if="sub_tipo === 'textarea'">
      <q-input v-model="Observacoes" outlined type="textarea" />
    </div>
  </div>
  <!--CHECKLIST-->
  <div
    class="my-card-s-100mx-30"
    v-if="tipo_card_retangulo === 'AdicionarChecklist'"
  >
    <div class="columns">
      <div class="flex justify-between">
        <q-item-section
          style="height:38px;font-weight:700;color:#02456e;padding-top:18px"
        >
          {{ card }}
        </q-item-section>
        <q-btn
          round
          flat
          size="18px"
          text-color="green"
          icon="add_circle"
          @click.prevent="abrirInputCheckbox"
        >
        </q-btn>
      </div>
      <q-separator />
      <div class="flex" v-show="InputCheckbox">
        <q-input
          dense
          color="primary"
          v-model="TituloCheckBox"
          label="Adicionar Checklist"
          style="min-width:92%;margin-bottom:5px"
          @keyup.enter="adicionarCheckBox"
        >
          <template v-slot:prepend>
            <q-icon name="description" />
          </template>
        </q-input>
        <q-btn
          round
          flat
          text-color="primary"
          icon="add_circle"
          @click.prevent="adicionarCheckBox"
        >
        </q-btn>
      </div>
      <div v-for="(labelcheck, index) in CheckBoxResult" :key="index">
        <div class="flex justify-between items-center">
          <div>
            <q-checkbox
              dense="dense"
              :label="labelcheck.TituloCheckBox"
              color="cyan"
              v-model="labelcheck.index"
            />
          </div>
          <div class="flex">
            <q-btn
              round
              flat
              text-color="primary"
              icon="mode_edit"
              @click.prevent="$emit('btnEditar')"
            >
            </q-btn>
            <q-btn
              round
              flat
              text-color="primary"
              icon="delete"
              @click.prevent="removerBox(index)"
            >
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--CHECKGRUPO-->
  <div
    class="my-card-s-100mx-30"
    v-if="tipo_card_retangulo === 'AdicionarGrupos'"
  >
    <div class="columns">
      <div class="flex justify-between">
        <q-item-section
          style="height:38px;font-weight:700;color:#02456e;padding-top:18px"
        >
          {{ card }}
        </q-item-section>
        <q-btn
          round
          flat
          size="18px"
          text-color="green"
          icon="add_circle"
          @click.prevent="darkDialog = true"
        >
        </q-btn>
        <q-dialog v-model="darkDialog" persistent>
          <EtapasWorkflowProjetos @close="darkDialog = false" />
        </q-dialog>
      </div>
    </div>
  </div>
  <!--CAIXA DE OCORRÊNCIA-->
  <div
    class="my-card-s-100mx-30 columns"
    v-if="tipo_card_retangulo === 'AdicionarOcorrencia'"
  >
    <div class="flex justify-between">
      <q-item-section
        style="height:38px;font-weight:700;color:#02456e;padding-top:18px"
      >
        {{ card }}
      </q-item-section>
      <div class="flex">
        <q-btn
          v-show="BtnPause"
          round
          flat
          size="18px"
          text-color="red"
          icon="pause_circle"
          @click.prevent="btnPausarOcorrencia"
        >
        </q-btn>
        <q-btn
          v-show="BtnPlay"
          round
          flat
          size="18px"
          text-color="green"
          icon="play_circle"
          @click.prevent="btnIniciarOcorrencia"
        >
        </q-btn>
        <q-btn
          round
          size="18px"
          flat
          text-color="grey-7"
          icon="expand_more"
          @click.prevent="btnSetaBaixa"
        >
        </q-btn>
      </div>
    </div>
    <q-separator />
    <div v-show="MostrarOcorrencias">
      <div v-show="CaixaOcorrencias" style="margin-top:10px">
        <q-editor
          v-model="Ocorrencia"
          min-height="5rem"
          style="margin-bottom:10px"
          toolbar-bg="blue-5"
          content-class="bg-grey-3"
          toolbar-text-color="dark"
          dense="dense"
          :toolbar="[
            [
              {
                label: $q.lang.editor.align,
                icon: $q.iconSet.editor.align,
                fixedLabel: true,
                list: 'only-icons',
                options: ['left', 'center', 'right', 'justify']
              }
            ],
            ['bold', 'italic', 'strike', 'underline']
          ]"
        />
        <div class="flex justify-between" style="margin-bottom:10px">
          <q-input
            dense
            v-model="cronometro"
            filled
            type="time"
            style="width:120px"
          />
          <div>
            <q-btn
              round
              unelevated
              size="12px"
              :color="ColorFinalizaAtv"
              icon="done_all"
              @click.prevent="onClickFinalizaAtv"
            />
            <q-btn
              dense
              rounded
              unelevated
              color="primary"
              label="Enviar"
              style="margin-left:10px"
              padding="5px 18px"
              @click.prevent="onClickEnviarOcorrencia"
            />
          </div>
        </div>

        <div
          :class="ColorOcorrencia"
          v-for="(inf, index) in RespostaOcorrencia"
          :key="index"
        >
          <div class="flex justify-between items-center" style="padding:5px">
            <div class="flex">
              <q-avatar style="font-size: 2rem;">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
              </q-avatar>
              <p class="q-pt-sm q-pl-sm" style="font-weight:500">
                {{ inf.DataCompleta }} às {{ inf.horario }} (Duração:
                {{ inf.cronometro }})
              </p>
            </div>
            <div class="flex">
              <q-btn
                round
                flat
                text-color="primary"
                icon="mode_edit"
                @click.prevent="$emit('btnEditar')"
              >
              </q-btn>
              <q-btn
                round
                flat
                text-color="primary"
                icon="delete"
                @click.prevent="RemoverOcorrencia(index)"
              >
              </q-btn>
            </div>
          </div>
          <div style="margin:5px 0">
            <q-card-section
              style="font-weight:500;padding:0px 15px 5px 15px"
              v-html="inf.Ocorrencia"
            />
          </div>
        </div>
        <div
          v-for="(inf, index) in AcoesPadrao"
          :key="index"
          class="flex justify-between items-center"
        >
          <div class="flex items-center">
            <q-avatar style="font-size: 2rem;">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
            <p style="font-weight:500;padding:15px 0px 0px 5px">
              {{ inf.Ocorrencia }}
              <br />
              {{ inf.DataCompleta }} às {{ inf.horario }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EtapasWorkflowProjetos from "app/src/layouts/EtapasWorkflowProjetos.vue";
export default {
  props: ["card", "tipo_card_retangulo", "sub_tipo"],
  emits: ["btnEditar", "btnPausa", "btnAdicionar", "btnPlay"],
  components: { EtapasWorkflowProjetos },
  data() {
    return {
      Observacoes: "",
      textarea: "",
      NotificacaoOcorrencia: false,
      hh: 0,
      mm: 0,
      ss: 0,
      cronometro: "00:00:00",
      tempo: 1000,
      intervalo: "",

      horario: new Date().toLocaleString("pt-br", {
        hour: "numeric",
        minute: "numeric"
      }),
      hoje: new Date()
        .toLocaleString("pt-br", { day: "numeric" })
        .padStart(2, "0"),
      mes: (new Date().getMonth() + 1).toString().padStart(2, "0"),
      ano: new Date()
        .getFullYear()
        .toString()
        .padStart(2, "0"),
      InputCheckbox: false,
      CheckBoxResult: [],
      TituloCheckBox: "",
      BtnPause: false,
      BtnPlay: true,
      CaixaOcorrencias: false,
      TipoOcorrencia: "Geral",
      MostrarOcorrencias: true,
      Ocorrencia: "",
      RespostaOcorrencia: [],
      AcoesPadrao: [],
      FinalizaAtv: false,
      ColorFinalizaAtv: "grey",
      ColorOcorrencia: "bg-grey-4",
      darkDialog: false
    };
  },
  methods: {
    btnSetaBaixa() {
      this.MostrarOcorrencias = !this.MostrarOcorrencias;
    },
    abrirInputCheckbox() {
      this.InputCheckbox = true;
    },
    adicionarCheckBox() {
      if (this.TituloCheckBox.trim() === "") {
        alert("Preencha os espaços");
      } else {
        this.CheckBoxResult.push({
          TituloCheckBox: this.TituloCheckBox
        });
      }
      this.TituloCheckBox = "";
    },
    removerBox(index) {
      this.CheckBoxResult.splice(index, 1);
    },

    //Ocorrências
    onClickFinalizaAtv() {
      this.FinalizaAtv = !this.FinalizaAtv;
      if (this.FinalizaAtv) {
        this.ColorFinalizaAtv = "green";
      } else {
        this.ColorFinalizaAtv = "grey";
      }
    },

    btnIniciarOcorrencia() {
      this.CaixaOcorrencias = true;
      this.MostrarOcorrencias = true;
      this.BtnPause = !this.BtnPause;
      this.BtnPlay = !this.BtnPlay;
      this.AcoesPadrao.unshift({
        DataCompleta: this.DataCompleta,
        horario: this.horario,
        Ocorrencia: (this.Ocorrencia = "Iniciou a execução da atividade.")
      });
      this.intervalo = setInterval(() => {
        this.formatarCronometro();
      }, this.tempo);
      this.Ocorrencia = "";
    },

    btnPausarOcorrencia() {
      this.BtnPause = !this.BtnPause;
      this.BtnPlay = !this.BtnPlay;
      this.AcoesPadrao.unshift({
        DataCompleta: this.DataCompleta,
        horario: this.horario,
        Ocorrencia: (this.Ocorrencia = "Parou de executar a atividade.")
      });
      clearInterval(this.intervalo);
      this.Ocorrencia = "";
      (this.hh = 0),
        (this.mm = 0),
        (this.ss = 0),
        (this.cronometro = "00:00:00");
    },

    formatarCronometro() {
      this.ss++;
      if (this.ss == 59) {
        this.ss = 0;
        this.mm++;

        if (this.mm == 59) {
          this.mm = 0;
          this.hh++;
        }
      }
      this.cronometro =
        (this.hh < 10 ? "0" + this.hh : this.hh) +
        ":" +
        (this.mm < 10 ? "0" + this.mm : this.mm) +
        ":" +
        (this.ss < 10 ? "0" + this.ss : this.ss);

      return this.cronometro;
    },

    onClickEnviarOcorrencia() {
      if (this.BtnPause === true) {
        if (this.Ocorrencia.trim() === "") {
          return alert("Preencha os campos!");
        } else {
          if (this.FinalizaAtv === true) {
            this.TipoOcorrencia = "Finalizado";
            this.ColorOcorrencia = "bg-green-3";
          } else {
            this.TipoOcorrencia = "Geral";
          }
          this.RespostaOcorrencia.unshift({
            DataCompleta: this.DataCompleta,
            horario: this.horario,
            Ocorrencia: this.Ocorrencia,
            cronometro: this.cronometro
          });
        }
        this.Ocorrencia = "";
      } else {
        alert("Inicie a atividade!");
        this.Ocorrencia = "";
      }
    },
    RemoverOcorrencia(index) {
      this.RespostaOcorrencia.splice(index, 1);
    }
  },
  created() {
    const hoje = new Date();
  },
  computed: {
    DataCompleta() {
      return this.hoje + "/" + this.mes + "/" + this.ano;
    }
  }
};
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}
.center {
  margin: 18px auto;
  width: 98%;
  height: 250px;
  padding: 10px;
}
</style>
