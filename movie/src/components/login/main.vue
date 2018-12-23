<template>
  <el-row>
    <el-col :span="12" :offset="6">
      <h1 style="text-align:center;">Movie Home</h1>
      <el-card id="card">
        <h2 id="login-title">Login</h2>

        <el-form  :model="user_info">
          <el-form-item label="account:" label-width="15%" style="margin-right:5%">
            <el-input v-model="user_info.user_account" placeholder="input your account"></el-input>
          </el-form-item>
          <el-form-item label="password:" label-width="15%" style="margin-right:5%">
            <el-input
              type="password"
              v-model="user_info.user_psw"
              placeholder="input your password"
            ></el-input>
          </el-form-item>
          <el-form-item label style="margin-left:35%;margin-top:60px;">
            <el-button type="primary" round style="width:90px" @click="login()">Login</el-button>
            <el-button type="success" round style="width:90px;">SignUp</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import axios from "axios";

export default {
  name: "Login",
  data: function() {
    return {
      user_info: {
        user_account: '',
        user_psw: ''
      }
    };
  },
  methods: {
    postAccount: function(data) {
      axios
        .post("/api/login", {
          account: data.user_account,
          psw: data.user_psw
        })
        .then(function(ans) {
          if (!ans) alert('fuck you')
          window.location.replace("http://localhost:8080/home")
        });
    },

    login: function() {
        this.postAccount(this.user_info)
        this.$router.push('/home')
    }
  }
};
</script>
<style>
#login-title {
  text-align: center;
}
#card {
  font-size: 1.5em;
  margin-top: 13%;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 360px;
  margin-left: -300px;
  /* background-color: black;   */
  border-radius: 20px;
}

.template {
  background-image: url();
}
</style>
