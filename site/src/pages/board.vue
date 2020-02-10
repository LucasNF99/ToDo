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
        <div class="q-pa-md teste">
          <div class="cursor-pointer">
            <q-btn
            @click="addList = true"
            align="left"
            class="a-btn_add"
            dense no-caps
            label="Add list"
            icon="add"/>
            <q-popup-edit v-model="nickname" @save="createList">
              <q-input v-model="nickname" dense autofocus counter />
            </q-popup-edit>
          </div>
        </div>
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
  data() {
    return {
      addList: false,
      nickname: '',
    };
  },
  computed: {
    ...mapGetters([
      'lists',
      'cards',
    ]),
  },
  methods: {
    createList() {
      this.createList(this.nickname);
    },
    ...mapActions([
      'getLists',
      'getCards',
      'createList',
    ]),
  },
  created() {
    this.getCards();
    this.getLists(this.cards);
  },
};
</script>
