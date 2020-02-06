<template>
  <q-item class="list-item_board">
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
</template>

<script>
export default {
  name: 'card',
  props: {
    name: String,
    caption: String,
    responsible: String,
  },
};
</script>
