<template>
  <q-page class="flex flex-center">
    <div>
      <q-card class="my-card">
        <q-card-actions class="q-pt-none full-width">
          <q-input
            v-model="email"
            dense
            type="email"
            class="q-pt-md full-width"
            label="E-mail"
          />
          <div class="q-mt-md full-width">
            <q-btn color="primary full-width">
              <div class="full-width capitalize">Enviar</div>
            </q-btn>
            <p
              @click="$router.push({ name: 'Login' })"
              class="text-center q-pt-md text-primary"
            >
              Voltar
            </p>
          </div>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  name: "ProblemaLogin",
  setup() {
    return {
      email: ref("")
    };
  },
  beforeRouteEnter(to, from, next) {
    let login = JSON.parse(localStorage.getItem("login"));
    const token = login["token"];
    if (!token) {
      next("Login");
    }
    next();
  }
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
