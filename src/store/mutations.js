export default {
  addNewAccount (state, newAccount) {
    state.accounts.push({ accountId: Date.now(), name: newAccount })
  }
}
