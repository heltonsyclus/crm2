<template>
  <q-card class="card-popup">
    <div style="margin-top:10px">
      <span>App</span>
      <div class="flex">
        <div
          class="fundo-card"
          v-for="(objServices, i) in service"
          :key="i"
          @click="abrirService(objServices.rota)"
        >
          <q-icon :name="objServices.icon" size="28px" style="margin-top:7px" />
          <p>{{ objServices.app }}</p>
        </div>
      </div>
      <q-separator style="margin-top:5px" />
    </div>
  </q-card>
</template>

<script>
export default {
  setup() {
    return {
      service: [
        {
          app: "Syclus Cliente",
          icon: "business",
          rota: "/login-cliente"
        }
      ]
    };
  },
  methods: {
    abrirService(objServices) {
      this.$router.push(objServices);
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.card-popup {
  width: 450px;
  max-height: 350px;
  padding: 0;
  margin: 0px auto;
  overflow: auto;
}

.fundo-card {
  padding: 5px;
  text-align: center;
  margin: 2px 2px;
  background-color: rgb(20, 109, 224);
  width: 80px;
  height: 80px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.fundo-card:hover {
  background-color: rgb(80, 224, 123);
  color: #fff;
}
span {
  color: rgb(99, 99, 99);
  font-weight: 500;
}
p {
  font-size: 12px;
}
</style>
