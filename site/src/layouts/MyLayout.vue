<template>
  <q-layout class="no-shadow">
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
