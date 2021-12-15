<template>
  <q-page class="flex flex-center">
    <q-form @submit="Logar">
      <q-card class="my-card-login">
        <img
          src="../assets/logo-syclus2.png"
          style="width:50%;text-aligth:center;margin:0 auto;padding:25px 20px 0px"
        />
        <div style="width:90%;margin:0 auto">
          <q-input
            v-model="vlogin"
            dense
            label="Login"
            :rules="[val => (val && val.length > 0) || 'Preencha o campo!']"
          />
          <q-input
            v-model="password"
            dense
            label="Password"
            :type="isPwd ? 'password' : 'text'"
            :rules="[
              val => (val !== null && val !== '') || 'Preencha o campo!'
            ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div>
            <q-btn
              color="primary full-width capitalize"
              label="Logar"
              type="submit"
              style="padding:8px 0"
              dense
              rounded
            />
          </div>
        </div>
      </q-card>
    </q-form>
  </q-page>
</template>
<script>
import { senhaLogin } from "../commands/loginColaborador";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      vlogin: "",
      password: "",
      isPwd: true
    };
  },
  methods: {
    Logar() {
      let objSenhaLogin = senhaLogin();
      for (let i = 0; i < objSenhaLogin.login.length; i++) {
        if (
          objSenhaLogin.login[i].usuario === this.vlogin &&
          objSenhaLogin.login[i].senha === this.password
        ) {
          this.login = objSenhaLogin.login[i];
          localStorage.setItem("login", JSON.stringify(this.login));
          if (this.login.token) {
            this.confirmacaoLogin();
            this.$q.notify({
              color: "green-7",
              textColor: "white",
              message: "Seja Bem vindo!"
            });
            breack;
          }
        }
      }
      for (let i = 0; i < objSenhaLogin.login.length; i++) {
        if (
          objSenhaLogin.login[i].usuario != this.vlogin &&
          objSenhaLogin.login[i].senha != this.password
        ) {
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Login ou Senha não existente!"
          });
        }
      }
    },
    confirmacaoLogin() {
      this.$router.push({ name: "cliente" });
    }
  },
  setup() {
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login,
      set: val => {
        $store.commit("showcase/autenticacaoLogin", val);
      }
    });
    return {
      login
    };
  }
};
</script>

<style scope>
.my-card-login {
  width: 100%;
  width: 310px;
  height: 360px;
  padding: 10px;
}
</style>
