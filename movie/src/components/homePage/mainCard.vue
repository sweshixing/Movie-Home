<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <div id="head-pic">
        <img width="102%" height="350px" style="border-radius:30px;" src="@/assets/head.jpg">
        <span style="position: absolute; top: 90%; left: 5%;color:white;">aaaaaaaa</span>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "mainCard",
  data() {
    return {};
  }
};
</script>
<style>
#head-pic {
  position: relative;
}
</style>
