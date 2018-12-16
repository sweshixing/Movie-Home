<template>
  <el-row>
    <el-col :span="16" :offset="6">
      <el-row gutter="20">
        <el-col :span="8" v-for="movie in random_movie" :key="movie" :offset="2" >
          
            <el-card shadow="always" :body-style="{ padding: '0px' }">
              <img src="movie.pic">
              <div style="padding: 15px;">
                <span>{{ movie.name }}</span>
                <el-rate v-model="movie.rate" disabled="true" show-score text-color="#ff9900"></el-rate>
                <div class="movie-info">
                    <el-tag> {{ movie.year }}</el-tag>
                    <el-tag type="success">{{ movie.type }}</el-tag>
                    <el-tag type="info">{{ movie.director }}</el-tag>
                </div>
            </el-card>
        </el-col>
        <el-col :span="12"></el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
import axios from "axios";

export default {
  name: "randomMovie",
  data() {
    return {
      movie_info: {
        name: "",
        type: "",
        year: "",
        rate: "",
        pic: "",
        director: ""
      },
      random_movie_id: []
    };
  },
  mounted() {
    this.random_movie()
    axios.get("/api/home/movie_info",{ movie_id: this.random_movie_id }).then(function(response) {
      this.movie_info.name = response.movieName;
      this.movie_info.type = response.tags;
      this.movie_info.year = response.year;
      this.movie_info.rate = response.rate;
      this.movie_info.pic = response.imageURL;
    });
  },
  methods:{
      random_movie: function(){
          //return Math.ceil(Math.random()*9125)
            for(let key =0;k<8;k++){
                this.random_movie_id.push(Math.ceil(Math.random()*9125))
            }
      }
  }
};
</script>
<style scoped>
</style>
