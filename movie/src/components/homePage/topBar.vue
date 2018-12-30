<template>
  <el-row>
    <el-col :span="6" :offset="11">
      <h1>Movie Home</h1>
    </el-col>
    <el-col :span="4" :offset="2">
      <el-input v-model="moviename" style="margin-left:30px;" placeholder="input movie's name">
        <el-button type="primary" @click="toSearch()">
          <i class="el-icon-search"></i>
        </el-button>
      </el-input>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "topBar",
  data() {
    return {
      moviename: "",
      movie_info:[]
    };
  },
  methods: {
    toSearch: function(){
      // this.$router.push('/search')
      let movie_name = this.moviename

      axios.post('/api/search',{
        movie_name
      })
      .then(ans=>{
        // console.log(ans)
        movie_info = ans[0]
        this.$router.push({path:'/search',query:{
          movie_info
        }})
      })
    }
  }
};
</script>
<style>
.el-input {
  margin-top: 9px;
}
</style>
