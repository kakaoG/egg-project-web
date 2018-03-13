<template>
  <div id="account-list">
    <table border="1">
      <thead>
        <tr>
          <th>序号</th>
          <th>用户名</th>
          <th>密码</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list">
          <td>{{index}}</td>
          <td>{{item.userName}}</td>
          <td>{{item.password}}</td>
        </tr>
      </tbody>
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
        const { status, data } = await Account.list();
        if (status === 200) this.list = data;
      }
    },
    mounted() {
      this.getAccountList();
    }
  }
</script>

<style scoped>
  table {
    width: 400px;
    margin: 50px auto;
    border-spacing: 0;
    border-color: #ddd;
  }
</style>
