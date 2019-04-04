<template>
  <div id="app">
    <h1>だーさんの倉庫整理(仮)</h1>
    <account-list></account-list>
  </div>
</template>

<script>
import 'ress'
import AccountList from './views/AccountList.vue'

export default {
  name: 'app',
  components: {
    AccountList
  }
}
</script>

<style>

</style>
