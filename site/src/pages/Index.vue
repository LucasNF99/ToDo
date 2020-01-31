<template>
  <q-page>
    <div class="lists">
      <q-list class="o-list">
        <q-item clickable v-ripple class="item-list">
          <q-item-section>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple class="item-list">
          <q-item-section>
            <q-icon name="all_inbox"/>
          </q-item-section>
          <q-item-section>Boards</q-item-section>
        </q-item>
      </q-list>

      <q-list class="o-list">
        <q-toolbar>
          <q-toolbar-title>Recently viewed</q-toolbar-title>
        </q-toolbar>
        <q-item clickable v-ripple class="item-list">
          <q-item-section>
            <img src="" alt="">
          </q-item-section>
          <q-item-section>Nh tracking</q-item-section>
        </q-item>
        <q-item clickable v-ripple class="item-list">
          <q-item-section>
            <img src="" alt="">
          </q-item-section>
          <q-item-section>TG</q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>
