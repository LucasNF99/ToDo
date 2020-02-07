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
      <btnGroup :icons="icons" @evt="selectMenu = true"></btnGroup>
      <q-dialog class="m-modal-menu" v-model="selectMenu" full-height position="right">
        <q-card class="m-card-menu">
          <div class="m-card-menu_cnt">
            <q-toolbar class="a-menu-tollbar">
            <q-toolbar-title align="center">
              Menu
            </q-toolbar-title>
            <q-btn flat round dense icon="close" @click="selectMenu = false"/>
          </q-toolbar>
          <q-card-section>
            <q-list>
              <q-item clickable v-ripple>
                <q-item-section class="a-menu-list-item">
                  <q-icon name="assessment"/>
                  About this board
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section class="a-menu-list-item">
                  <q-icon  name="delete" />
                  Delete this board
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          </div>
        </q-card>
      </q-dialog>
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
      selectMenu: false,
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
    ...mapActions([
      'getBoards',
    ]),
  },
  created() {
    this.getBoards();
  },
};
</script>
