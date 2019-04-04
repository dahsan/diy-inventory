<template>
  <ul>
    <li v-for="account in accounts" :key="account.accountId">{{ account.name }}</li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'accounts'
    ])
  }
}
</script>

<style>

</style>
