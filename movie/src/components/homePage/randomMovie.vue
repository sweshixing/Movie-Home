<template>
  <el-row style="margin-top:100px;">
    <el-col :span="16" :offset="5" style="margin-bttom:50px;">
      <el-row>
        <el-col :span="8" v-for="(movie,index) in movie_info" :key="index" :offset="2">
          <el-card shadow="always" :body-style="{ padding: '0px' }">
            <img v-bind:src="movie.imageURL"  width="100%">
            <div style="padding: 15px;">
              <span>{{ movie.name }}</span>
              <el-rate v-model="movie.rate"  show-score text-color="#ff9900"></el-rate>
              <div class="movie-info">
                <el-tag>{{ movie.year }}</el-tag>
                <el-tag>{{ movie.country }}</el-tag>
                <el-tag type="success">{{ movie.tags }}</el-tag>
                <el-tag type="info">{{ movie.director }}</el-tag>
              </div>
            </div>
          </el-card>
        </el-col>
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
      movie_info: [],
      random_movie_id: []

    };
  },
  created() {
    let infos = [];
    console.log("this is created");
    this.random_movie();
    console.log(this.random_movie_id);
    axios
      .post("/api/home/movieinfo", {
        movie_id: this.random_movie_id
      })
      .then(response=> {
        // console.log("This is axios get func.");
        // console.log(response.data)
        // this.movie_info.name = response.movieName;
        // this.movie_info.type = response.tags;
        // this.movie_info.year = response.year;
        // this.movie_info.rate = response.rate;
        // this.movie_info.pic = response.imageURL;
        this.movie_info = response.data;
        console.log(this.movie_info)
      })
      .catch(er => {
        console.log(er);
      })
      // console.log
  },
  methods: {
    random_movie: function() {
      //return Math.ceil(Math.random()*9125)
      for (let k = 0; k < 8; k++) {
        this.random_movie_id.push(Math.ceil(Math.random() * 9125));
      }
    },
    postAxios: function() {
      // axios
      //   .get("/api/home/movie")
      //   .then(response => {
      //     console.log(response)
      //     console.log(1)
      //   });
    }
  }
};
</script>
<style scoped>
</style>
