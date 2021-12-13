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
<<<<<<< HEAD
=======
            <q-btn
              class="capitalize"
              :color="ativoLembrete"
              text-color="dark"
              label="Lembrete"
              size="12px"
              style="margin-right: 8px"
              @click.prevent="lembreteBnt()"
            />
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
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
<<<<<<< HEAD
              label="Cor do evento"
=======
              label="Cor tags"
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
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
<<<<<<< HEAD
              label="Colaboradores"
=======
              label="Adicionar colaboradores"
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
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
<<<<<<< HEAD
            <q-input
              label="Observações"
              dense
              v-model="this.arrayAgenda.details"
              style="width: 260px;padding-left:5px"
            />
          </div>
=======
            <q-btn
              color="primary"
              text-color="white"
              class="capitalize"
              label="Adicionar descrições"
              size="12px"
              style="margin:8px"
              @click.prevent="abrirEditor()"
            />
          </div>

          <q-input
            v-show="editor"
            v-model="this.arrayAgenda.details"
            filled
            type="textarea"
            style="margin:10px"
          />
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
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
<<<<<<< HEAD

            <q-input
              v-model="this.timeEscolhida"
              type="time"
              dense
              label="Horário"
=======
            <q-input
              v-model="this.arrayAgenda.time"
              type="time"
              dense
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
              style="width: 100px;margin-left:5px;margin-right:20px"
            />
            <q-input
              v-model.number="this.arrayAgenda.duration"
              type="number"
              dense
<<<<<<< HEAD
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
=======
              label="Duração, Min"
              Style="width: 120px;"
            />
          </div>
          <div class="flex items-center" style="margin-top:8px">
            <q-icon
              name="subject"
              class="text-primary"
              style="font-size: 20px;"
            />
            <q-btn
              color="primary"
              text-color="white"
              class="capitalize"
              label="Adicionar descrições"
              size="12px"
              style="margin-left:5px"
              @click.prevent="abrirEditor()"
            />
          </div>

          <q-input
            v-show="editor"
            v-model="this.arrayAgenda.atividades"
            filled
            type="textarea"
            style="margin:10px"
          />
        </q-card-actions>

        <q-card-actions vertical v-show="lembrete">
          <div class="flex items-center">
            <q-icon
              name="schedule"
              class="text-primary"
              style="font-size: 20px;"
            />
            <div class="text-h7" style="margin-left:6px">
              {{ dataEventual }}
            </div>
          </div>

          <div class="flex items-center" style="margin-top:10px">
            <input
              type="checkbox"
              id="checkbox"
              v-model="this.arrayAgenda.checked"
              style="margin-left:2px"
            />
            <label for="checkbox" style="margin-left:12px">Dia inteiro</label>
          </div>
          <div class="flex items-center">
            <q-icon
              name="subject"
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
              class="text-primary"
              style="font-size: 20px;"
            />
            <q-select
<<<<<<< HEAD
              v-model="this.arrayAgenda.model"
=======
              v-model="model"
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
              :options="options"
              style="width: 270px;padding-left:8px"
              dense
            />
          </div>
        </q-card-actions>
<<<<<<< HEAD

=======
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
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
<<<<<<< HEAD
  props: ["dataEventual", "dataEscolhido", "horarioEscolhido"],
=======
  props: ["dataEventual"],
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
  emits: ["close"],
  data() {
    return {
      colaborador: ["Helton", "Henrique", "Danilo"],
<<<<<<< HEAD
      evento: true,
      atividade: false,
      lembrete: false,
      timesON: true,
      timesOff: false,
      ativoEvent: "white",
      ativoatividade: "white",
=======
      editor: false,
      evento: true,
      atividade: false,
      lembrete: false,
      ativoEvent: "white",
      ativoLembrete: "white",
      ativoatividade: "white",
      model: "Não se repete",
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
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
<<<<<<< HEAD
        time: null,
        model: "Não se repete",
        duration: 30,
        title: null,
        details: null,
=======
        id: 1,
        start: null,
        end: null,
        time: null,
        duration: null,
        title: null,
        details: null,
        checked: null,
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
        atividades: null,
        colaborar: null,
        descricao: null,
        date: null,
<<<<<<< HEAD
        start: null,
        end: null,
        bgcolor: "Azul",
        icon: null
=======
        bgcolor: "Azul"
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
      }
    };
  },
  methods: {
    eventoBnt() {
      this.evento = true;
      this.atividade = false;
<<<<<<< HEAD
      this.ativoEvent = "primary";
=======
      this.lembrete = false;
      this.ativoEvent = "primary";
      this.ativoLembrete = " white";
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
      this.ativoatividade = " white";
    },
    atividadeBnt() {
      this.ativoEvent = "white";
      this.ativoatividade = "primary";
<<<<<<< HEAD
      this.evento = false;
      this.atividade = true;
=======
      this.ativoLembrete = "white";
      this.evento = false;
      this.atividade = true;
      this.lembrete = false;
    },
    lembreteBnt() {
      this.evento = false;
      this.atividade = false;
      this.lembrete = true;
      this.ativoEvent = "white";
      this.ativoLembrete = "primary";
      this.ativoatividade = "white";
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
    },
    abrirEditor() {
      this.editor = !this.editor;
    },
    salvarAgenda() {
<<<<<<< HEAD
      if (this.arrayAgenda.time === null) {
        this.arrayAgenda.time = this.timeEscolhida;
      }
=======
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
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
<<<<<<< HEAD
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
=======
      this.$emit("arrayAgenda", this.arrayAgenda);
      this.$emit("close");
      this.editor = false;
      this.arrayAgenda = [];
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
    }
  },
  created() {
    this.ativoEvent = "primary";
<<<<<<< HEAD
  },
  computed: {
    dataEscolhida() {
      return this.dataEscolhido;
    },
    timeEscolhida() {
      return this.horarioEscolhido;
    }
=======
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
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
