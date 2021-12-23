<template>
  <q-card class="my-card q-pa-md" style="width: 550px">
    <q-card-section>
      <q-img
        src="https://placeimg.com/500/300/nature"
        style="max-width: 500px; height: 200px;"
        fit="cover"
      >
        <div class="absolute-bottom text-subtitle1 text-center">
          {{ usuario }}
        </div>
      </q-img>
      <div class="text-h6">Informações do usuário</div>
      <q-list bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>Nome do Usuário:</q-item-section>
          <q-item-section style="color:blue">{{ usuario }}</q-item-section>
          <q-item-section avatar>
            <q-icon name="mode" />
          </q-item-section>
        </q-item>
      </q-list>
      <q-list bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>E-mail:</q-item-section>
          <q-item-section style="color:blue">{{
            "helton@syclus.com"
          }}</q-item-section>
          <q-item-section avatar>
            <q-icon name="mail" />
          </q-item-section>
        </q-item>
      </q-list>
      <q-list bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>Mudar Senha:</q-item-section>
          <q-item-section style="color:blue">{{ "*******" }}</q-item-section>
          <q-item-section avatar>
            <q-icon name="lock_open" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      active: ref(false),
      usuario: ref("Helton")
    };
  }
};
</script>

<style></style>
