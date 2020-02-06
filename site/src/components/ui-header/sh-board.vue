<template>
  <div>
    <q-btn class="a-btn btn-boards" no-caps label="Boards"
    icon="assessment" @click="selectBoards = true" />
    <q-dialog v-model="selectBoards" full-height position="left">
      <div class="m-boards_content">
        <q-input outlined :v-model="searchBoard" label="Find boards by name..." />
        <q-list class="m-borads_list">
          <q-item clickable v-ripple dense v-for="board in boards" v-bind:key="board.id"
          class="m-borads_list-item" :to="board.router">
            <q-item-section avatar>
              <q-avatar class="m-borads_list-avatar">
                <img src="https://ak4.picdn.net/shutterstock/videos/23844604/thumb/1.jpg">
              </q-avatar>
            </q-item-section>
            <q-item-section>{{board.name}}</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'shButton',
  data() {
    return {
      selectBoards: false,
      searchBoard: '',
    };
  },
  computed: {
    ...mapGetters([
      'boards',
    ]),
  },
  methods: {
    ...mapActions([
      'getBoards',
    ]),
  },
  created() {
    this.getBoards();
  },
};
</script>
