<template>
  <div id="app">
    <app-header></app-header>
    <div class="tpl-page-container tpl-page-header-fixed">
        <app-menu></app-menu>
        <router-view/>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppMenu from './components/AppMenu.vue'

export default {
  // name: 'app',
  components: {
    AppMenu,
    AppHeader
  }
}
</script>

<style>

</style>
