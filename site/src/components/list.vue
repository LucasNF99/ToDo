<template>
  <q-list class="m-list">
  <div class="m-list_board">
    <q-toolbar>
      <q-toolbar-title class="a-titile_list">
        {{name}}
      </q-toolbar-title>
      <q-btn flat round dense icon="more_horiz" />
     </q-toolbar>
      <div class="list-item_group">
        <card v-for="card in cards" v-bind:key="card.id"
          :name="card.name"
          :caption="card.caption"
          :responsible="card.responsible"
        ></card>
        <q-btn align="left" class="full-width" dense no-caps label="Add Card" icon="add"/>
      </div>
    </div>
  </q-list>
</template>

<script>
import card from './card';

export default {
  name: 'list',
  components: {
    card,
  },
  props: {
    name: String,
    cards: Array,
  },
};
</script>
