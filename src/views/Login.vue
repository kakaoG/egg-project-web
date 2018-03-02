<template>
  <div id="login">
    <div class="form-item">
      <label for="username">用户名</label>
      <input name="username" id="username" v-model.trim="formData.userName" type="text">
    </div>
    <div class="form-item">
      <label for="password">密码</label>
      <input id="password" v-model.trim="formData.password" type="password">
    </div>
    <div class="form-item">
      <button @click="loginHandle">登录</button>
    </div>
  </div>
</template>

<script>
  import Account from '../service/account'

  export default {
    name: "login",
    data() {
      return {
        formData : {
          userName: '',
          password: ''
        }
      }
    },
    methods: {
      async loginHandle() {
        const res = await Account.login(this.formData);
        if(res) {
          this.$router.push({
            name: 'AccountList'
          })

        }
      }
    }
  }
</script>

<style scoped>

</style>
