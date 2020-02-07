<template>
<div>
  <q-item class="list-item_board" clicable @click="alert=true">
    <q-item-section class="m-card">
      <div>
        <q-item-label>{{name}}</q-item-label>
        <q-item-label caption>{{caption}}</q-item-label>
      </div>
      <q-avatar size="md" v-if="responsible">
        <img src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>
    </q-item-section>
  </q-item>
  <q-dialog v-model="alert">
    <q-card class="m-card-modal">
      <q-toolbar class="toolbar-card">
        <q-toolbar-title class="card-modal-title">
          Card
          <span class="sub-title">in list ToDo</span>
        </q-toolbar-title>
        <q-btn flat round dense icon="close"  v-close-popup/>
      </q-toolbar>
    </q-card>
  </q-dialog>
</div>
</template>

<script>
export default {
  name: 'card',
  props: {
    name: String,
    caption: String,
    responsible: String,
  },
  data() {
    return {
      alert: false,
    };
  },
};
</script>
