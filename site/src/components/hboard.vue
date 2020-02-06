<template>
  <q-header class="o-board_header">
    <q-toolbar class="o-toolbar_board" >
      <h1 class="a-title">{{boards[0].name}}</h1>
      <div>
        <q-avatar size="md">
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
        <q-btn label="Invite" no-caps>
          <q-icon name="plus_one"/>
        </q-btn>
      </div>
      <btnGroup :icons="icons" @evt="btnClick"></btnGroup>
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import btnGroup from './ui-header/btn-group';

export default {
  name: 'hboard',
  components: {
    btnGroup,
  },
  data() {
    return {
      icons: [
        { name: 'more_horiz', label: 'Menu' },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'boards',
    ]),
  },
  methods: {
    btnClick(evt) {
      console.log(evt);
    },
    ...mapActions([
      'getBoards',
    ]),
  },
  created() {
    this.getBoards();
  },
};
</script>
