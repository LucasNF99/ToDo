<template>
  <div>
    <hboard></hboard>
    <div class="o-board_list">
      <list v-for="list in lists"
        v-bind:key="list.id"
        :name="list.name"
        :cards="list.cards"
      ></list>
      <div>
        <q-btn align="left" class="a-btn_add" dense no-caps label="Add list" icon="add"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import hboard from '../components/hboard';
import list from '../components/list';

export default {
  components: {
    hboard,
    list,
  },
  computed: {
    ...mapGetters([
      'lists',
      'cards',
    ]),
  },
  methods: {
    ...mapActions([
      'getLists',
      'getCards',
    ]),
  },
  created() {
    this.getCards();
    this.getLists(this.cards);
  },
};
</script>
