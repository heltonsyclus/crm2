<template>
  <div class="row justify-center">
<<<<<<< HEAD
    <div class="q-pb-sm row">
      <q-btn
        flat
        class="capitalize"
        color="primary"
        style="margin: 5px 2px 0px;"
        @click="$emit('hoje')"
      >
=======
    <div class="q-pb-sm q-gutter-sm row">
      <q-btn no-caps class="button" style="margin: 2px;" @click="$emit('hoje')" color="primary">
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
        Hoje
      </q-btn>
      <q-btn
        no-caps
        color="primary"
        class="button"
        unelevated
        style="margin: 2px;"
        @click="$emit('voltar')"
      >
<<<<<<< HEAD
        &lt;
=======
        Anterior &lt;
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
      </q-btn>
      <q-btn
        no-caps
        unelevated
        color="primary"
        class="button"
        style="margin: 2px;"
        @click="$emit('adiantar')"
      >
<<<<<<< HEAD
        &gt;
=======
        Próximo &gt;
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
      </q-btn>
    </div>
  </div>
</template>
