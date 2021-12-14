<template>
  <div>
    <q-card class="my-card-calendario">
      <form @submit.prevent="salvarAgenda()">
        <q-card-section>
          <q-input v-model="this.arrayAgenda.title" label="Título" dense />

          <div style="margin-top:8px">
            <q-btn
              class="capitalize"
              :color="ativoEvent"
              text-color="dark"
              label="Evento"
              size="12px"
              style="margin-right: 8px"
              @click.prevent="eventoBnt()"
            />
            <q-btn
              class="capitalize"
              :color="ativoatividade"
              text-color="dark"
              label="atividade"
              size="12px"
              style="margin-right: 8px"
              @click.prevent="atividadeBnt()"
            />
          </div>
        </q-card-section>
        <q-separator inset />

        <q-card-actions vertical v-show="evento">
          <div class="flex items-center">
            <q-icon
              name="schedule"
              class="text-primary"
              style="font-size: 20px;"
            />
            <div class="text-h7" style="padding-left:5px">
              {{ dataEventual }}
            </div>
          </div>

          <div class="flex items-center" style="padding-top:5px">
            <q-icon
              name="format_color_fill"
              class="text-primary"
              style="font-size: 20px;"
            />
            <q-select
              v-model="this.arrayAgenda.bgcolor"
              dense
              label="Cor do evento"
              :options="cores"
              style="width: 260px;padding-left:5px"
            />
          </div>

          <div class="flex items-center" style="margin-top:8px">
            <q-icon
              name="people"
              class="text-primary"
              style="font-size: 20px;"
            />
            <q-select
              v-model="this.arrayAgenda.colaborar"
              multiple
              dense
              label="Colaboradores"
              :options="colaborador"
              style="width: 260px;padding-left:5px"
            />
          </div>

          <div class="flex items-center">
            <q-icon
              name="subject"
              class="text-primary"
              style="font-size: 20px;"
            />
            <q-input
              label="Observações"
              dense
              v-model="this.arrayAgenda.details"
              style="width: 260px;padding-left:5px"
            />
          </div>
        </q-card-actions>

        <q-card-actions vertical v-show="atividade">
          <div class="flex items-center">
            <q-icon
              name="schedule"
              class="text-primary"
              style="font-size: 20px;"
            />
            <div class="text-h7" style="margin-left:5px">
              {{ dataEventual }}
            </div>
          </div>

          <div class="flex items-center">
            <q-icon
              name="alarm_on"
              class="text-primary"
              style="font-size: 20px;"
            />

            <q-input
              v-model="this.timeEscolhida"
              type="time"
              dense
              label="Horário"
              style="width: 100px;margin-left:5px;margin-right:20px"
            />
            <q-input
              v-model.number="this.arrayAgenda.duration"
              type="number"
              dense
              label="Previsão"
              Style="width: 120px;"
            />
          </div>
          <div class="flex items-center">
            <q-icon
              name="subject"
              class="text-primary"
              style="font-size: 20px"
            />
            <q-input
              label="Observações"
              dense
              v-model="this.arrayAgenda.atividades"
              style="width: 260px;padding-left:5px"
            />
          </div>

          <div class="flex items-center">
            <q-icon
              name="history"
              class="text-primary"
              style="font-size: 20px;"
            />
            <q-select
              v-model="this.arrayAgenda.model"
              :options="options"
              style="width: 270px;padding-left:8px"
              dense
            />
          </div>
        </q-card-actions>
        <div class="flex justify-end">
          <q-btn
            text-color="dark"
            flat
            label="Cancelar"
            size="14px"
            class="capitalize"
            style="margin: 0px 0px 10px 0px"
            @click="$emit('close')"
          />
          <q-btn
            type="submit"
            color="primary"
            text-color="white"
            label="Salvar"
            size="14px"
            class="capitalize"
            style="margin: 0px 25px 10px 0px"
          />
        </div>
      </form>
    </q-card>
  </div>
</template>
<script>
export default {
  props: ["dataEventual", "dataEscolhido", "horarioEscolhido"],
  emits: ["close"],
  data() {
    return {
      colaborador: ["Helton", "Henrique", "Danilo"],
      evento: true,
      atividade: false,
      lembrete: false,
      timesON: true,
      timesOff: false,
      ativoEvent: "white",
      ativoatividade: "white",
      options: [
        "Não se repete",
        "Todos os dias",
        "Semanal: cada quarta-feira",
        "Mensal no(a) quarto(a) quarta-feira",
        "Mensal nos(nas) últimos(as) quarta-feira",
        "Anual em novembro 24",
        "Todos os dias da semana(segunda a sexta-feira)"
      ],
      cores: [
        "Amarelo",
        "Vermelho",
        "Azul",
        "Laranja",
        "Rosa",
        "Roxo",
        "Verde",
        "Grama",
        "Cinza"
      ],
      arrayAgenda: {
        time: null,
        model: "Não se repete",
        duration: 30,
        title: null,
        details: null,
        atividades: null,
        colaborar: null,
        descricao: null,
        date: null,
        start: null,
        end: null,
        bgcolor: "Azul",
        icon: null
      }
    };
  },
  methods: {
    eventoBnt() {
      this.evento = true;
      this.atividade = false;
      this.ativoEvent = "primary";
      this.ativoatividade = " white";
    },
    atividadeBnt() {
      this.ativoEvent = "white";
      this.ativoatividade = "primary";
      this.evento = false;
      this.atividade = true;
    },
    abrirEditor() {
      this.editor = !this.editor;
    },
    salvarAgenda() {
      if (this.arrayAgenda.time === null) {
        this.arrayAgenda.time = this.timeEscolhida;
      }
      if (this.arrayAgenda.bgcolor === "Amarelo") {
        this.arrayAgenda.bgcolor = "yellow";
      }
      if (this.arrayAgenda.bgcolor === "Vermelho") {
        this.arrayAgenda.bgcolor = "red";
      }
      if (this.arrayAgenda.bgcolor === "Azul") {
        this.arrayAgenda.bgcolor = "blue";
      }
      if (this.arrayAgenda.bgcolor === "Laranja") {
        this.arrayAgenda.bgcolor = "orange";
      }
      if (this.arrayAgenda.bgcolor === "Rosa") {
        this.arrayAgenda.bgcolor = "pink";
      }
      if (this.arrayAgenda.bgcolor === "Roxo") {
        this.arrayAgenda.bgcolor = "purple";
      }
      if (this.arrayAgenda.bgcolor === "Verde") {
        this.arrayAgenda.bgcolor = "green";
      }
      if (this.arrayAgenda.bgcolor === "Grama") {
        this.arrayAgenda.bgcolor = "teal";
      }
      if (this.arrayAgenda.bgcolor === "Cinza") {
        this.arrayAgenda.bgcolor = "grey";
      }
      if (this.arrayAgenda.date === null || this.arrayAgenda.start === null) {
        this.arrayAgenda.date = this.dataEscolhida;
        this.arrayAgenda.start = this.dataEscolhida;
        this.arrayAgenda.end = this.dataEscolhida;
      }
      if (this.atividade === !null) {
        this.arrayAgenda.icon = "description";
      }
      this.$emit("arrayAgenda", this.arrayAgenda);
      this.arrayAgenda = {
        start: null,
        end: null,
        time: null,
        model: "Não se repete",
        duration: 30,
        title: null,
        details: null,
        atividades: null,
        colaborar: null,
        descricao: null,
        date: null,
        bgcolor: "Azul",
        icon: null
      };
      this.$emit("close");
      this.evento = true;
      this.atividade = false;
      this.ativoEvent = "primary";
      this.ativoatividade = " white";
    }
  },
  created() {
    this.ativoEvent = "primary";
  },
  computed: {
    dataEscolhida() {
      return this.dataEscolhido;
    },
    timeEscolhida() {
      return this.horarioEscolhido;
    }
  }
};
</script>

<style scoped>
.my-card-calendario {
  max-width: 380px;
  padding: 0px 10px 15px 10px;
  position: absolute;
  z-index: 1;
  left: 40%;
  margin-left: -50px;
  top: 20%;
  box-shadow: 0 0 1em rgb(75, 75, 75);
}
</style>
