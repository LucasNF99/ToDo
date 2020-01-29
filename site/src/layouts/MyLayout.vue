<template>
  <q-layout view="lHh Lpr lFf">
    <qheader></qheader>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import qheader from '../components/header';

export default {
  name: 'MyLayout',
  components: {
    qheader,
  },
};
</script>
<style lang="stylus">
  .bg {
    color: #000;
  }
  .teste {
    position: absolute;
  }
</style>
