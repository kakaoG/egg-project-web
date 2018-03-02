<template>
  <div id="register">
    <div class="form-item">
      <label for="username">用户名</label>
      <input name="username" id="username" v-model.trim="formData.userName" type="text">
    </div>
    <div class="form-item">
      <label for="password">密码</label>
      <input id="password" v-model.trim="formData.password" type="password">
    </div>
    <div class="form-item">
      <button @click="registerHandle">注册</button>
    </div>
  </div>
</template>

<script>
  import Account from '../service/account'

  export default {
    name: "register",
    data() {
      return {
        formData : {
          userName: '',
          password: ''
        }
      }
    },
    methods: {
      async registerHandle() {
        const res = await Account.register(this.formData);
        if(res) {
          this.$router.push({ name: 'Login' });
        }
      }
    }
  }
</script>

<style scoped>

</style>
