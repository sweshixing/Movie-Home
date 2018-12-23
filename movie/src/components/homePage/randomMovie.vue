<template>
  <el-row style="margin-top:100px;">
    <el-col :span="15" :offset="4" style>
      <el-row>
        <el-col
          :span="4"
          v-for="(movie,index) in movie_info"
          style="margin-bottom:40px;height:550px;"
          :key="index"
          :offset="2"
        >
          <el-card shadow="always" :body-style="{ padding: '0px' }">
            <img v-bind:src="movie.imageURL" width="100%" height="290px" class="image">
            <div style="padding: 15px;height:240px">
              <span>{{ movie.name }}</span>
              <el-rate
                v-model="movie.rate"
                style="margin-bottom:10px"
                show-score
                text-color="#ff9900"
              ></el-rate>
              <div style="margin-top:10px">
                <span style="color:grey  ">{{ movie.movieName }}</span>
              </div>
              <div class="movie-info" style="margin-top: 10px;">
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
      .then(response => {
        // console.log("This is axios get func.");
        // console.log(response.data)
        // this.movie_info.name = response.movieName;
        // this.movie_info.type = response.tags;
        // this.movie_info.year = response.year;
        // this.movie_info.rate = response.rate;
        // this.movie_info.pic = response.imageURL;
        this.movie_info = response.data;
        console.log(this.movie_info);
      })
      .catch(er => {
        console.log(er);
      });
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
.el-card {
  border-radius: 10px;
}
.el-tag {
  margin: 5px 5px 5px 5px;
}
</style>
