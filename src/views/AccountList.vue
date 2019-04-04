<template>
  <div>
    <form>
      <input type="text" v-model="newAccount" placeholder="アカウント名を入力">
      <button @click.prevent="addNewAccount">追加</button>
    </form>
    <account></account>
  </div>
</template>

<script>
import Account from './../components/Account.vue'

export default {
  name: 'AccountList',
  data () {
    return {
      newAccount: ''
    }
  },
  components: {
    Account
  },
  methods: {
    addNewAccount () {
      if (!this.newAccount) {
        return
      }
      this.$store.commit('addNewAccount', this.newAccount)
      this.newAccount = ''
    }
  }
}
</script>

<style>

</style>
