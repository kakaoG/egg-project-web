<template>
  <div id="account-list">
    <table>
      <tr></tr>
    </table>
  </div>
</template>

<script>
  import Account from '../service/account'

  export default {
    name: "account-list",
    data() {
      return {
        list: []
      }
    },
    methods: {
      async getAccountList() {
        this.list = await Account.list();
      }
    },
    mounted() {
      this.getAccountList();
    }
  }
</script>

<style scoped>

</style>
