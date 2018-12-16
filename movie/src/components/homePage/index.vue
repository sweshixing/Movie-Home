<template>
  <el-container>
    <el-header height="65px">
      <top-bar></top-bar>
    </el-header>
    <el-container>
      <el-header height="330px">
        <main-card></main-card>
      </el-header>
      <el-main>
        <random-movie></random-movie>
      </el-main>
      <el-footer>
        <via></via>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import topBar from "./topBar";
import mainCard from "./mainCard";
import randomMovie from "./randomMovie";
import via from "./via";

export default {
  name: "homePage",
  components: {
    topBar: topBar,
    randomMovie: randomMovie,
    via: via,
    mainCard: mainCard,
    randomMovie: randomMovie
  },
  data() {
    return {};
  }
};
</script>
<style>
</style>

