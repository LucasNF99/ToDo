<template>
  <q-page>
    <div class="o-list-home">
      <q-list bordered>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-icon name="all_inbox"/>
          </q-item-section>
          <q-item-section>Boards</q-item-section>
        </q-item>
      </q-list>

      <q-list bordered>
        <q-item-section>Recently viewed</q-item-section>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-icon name="all_inbox"/>
          </q-item-section>
          <q-item-section>Boards</q-item-section>
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
