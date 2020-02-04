<template>
  <q-header elevated  class="o-header no-shadow" >
    <q-toolbar class="o-header no-shadow" >
      <div class="o-header_boards">
        <q-icon name="home" style="font-size: 3em;" />
        <shBoard></shBoard>
        <q-input color="black"  filled v-model="text">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <btnGroup></btnGroup>
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
    };
  },
};
</script>
