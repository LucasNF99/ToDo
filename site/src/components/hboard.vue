<template>
  <q-header class="o-board_header">
   <div class="">
      <q-toolbar class="o-toolbar_board" >
        <h1 class="a-title">{{boards[0].name}}</h1>
        <btnGroup :icons="icons"></btnGroup>
      </q-toolbar>
   </div>
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
        { name: 'menu', label: 'menu' },
      ],
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
