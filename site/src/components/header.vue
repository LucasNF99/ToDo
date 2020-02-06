<template>
  <q-header elevated  class="o-header no-shadow" >
    <q-toolbar class="o-toolbar no-shadow" >
      <div class="o-header_main">
        <q-btn name="home" to="/">
          <q-icon name="home"/>
        </q-btn>
        <shBoard></shBoard>
        <q-input  filled v-model="text">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <btnGroup :icons="icons"></btnGroup>
    </q-toolbar>
  </q-header>
</template>

<script>
import btnGroup from './ui-header/btn-group';
import shBoard from './ui-header/sh-board';

export default {
  name: 'qheader',
  components: {
    btnGroup,
    shBoard,
  },
  data() {
    return {
      text: '',
      icons: [
        { name: 'add' },
        { name: 'info' },
        { name: 'notifications' },
      ],
    };
  },
};
</script>
