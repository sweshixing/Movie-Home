<template>
  <el-row>
    <el-col :span="6" :offset="11">
      <h1>Movie Home</h1>
    </el-col>
    <el-col :span="4" :offset="2">
      <el-input v-model="moviename" style = "margin-left:30px;" placeholder="input movie's name">
        <i class="el-icon-search"></i>
      </el-input>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "topBar",
  data() {
    return {
      moviename: ""
    };
  }
};
</script>
<style>
.el-input{
  margin-top: 9px;
}
</style>
