<template>
      <q-header elevated>
      <q-toolbar>
        <q-icon name="home" style="font-size: 3em;" />
        <q-btn-dropdown stretch flat label="Boards">
          <q-input v-model="text" label="Standard" />
          <q-list>
            <q-item-label header>Folders</q-item-label>
            <q-item v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0">
              <q-item-section avatar>
                <q-avatar icon="folder" color="secondary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Photos</q-item-label>
                <q-item-label caption>February 22, 2016</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" />
              </q-item-section>
              <q-item-section avatar>
                <q-avatar icon="folder" color="secondary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Photos</q-item-label>
                <q-item-label caption>February 22, 2016</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-input filled v-model="text" label="Filled" />
        <q-btn-group>
          <q-btn icon="timeline" />
          <q-btn icon="visibility" />
          <q-btn icon="update" />
        </q-btn-group>
      </q-toolbar>
    </q-header>
</template>

<script>
export default {
  name: 'qheader',
};
</script>
