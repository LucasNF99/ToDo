<template>
  <q-btn-group class="m-btn-group">
    <div v-for="icon in icons" v-bind:key="icon.icon">
      <q-btn flat round class="a-btn" :icon="icon.name" v-if="!icon.label"/>
      <q-btn flat dense class="a-btn -label" :icon="icon.name" :label="icon.label" v-else/>
    </div>
  </q-btn-group>
</template>

<script>
export default {
  name: 'btnGroup',
  props: {
    icons: Array,
  },
};
</script>
