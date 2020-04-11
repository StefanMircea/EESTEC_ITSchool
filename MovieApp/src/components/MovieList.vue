<template>
    <div id="movie-list">
        <h1> Search for a movie </h1>
        <input placeholder="search" v-model="searchModel" @input="search()">
        <div id="movie-container"> 
            <MovieCard v-for="(movieObject,index) in moviesArray" :key="index" :movie="movieObject"/>
        </div>
    </div>    
</template>

<script>
import MovieCard from "../components/MovieCard"

export default {
    components: {
        MovieCard
    },
    data() {
        return {
            searchModel: "",
            baseUrl: "http://www.omdbapi.com/?apikey=9762f508&s=",
            moviesArray: []
        }
    },
    methods: {
        search(){
            let url = `${this.baseUrl}${this.searchModel}`;
            this.$http.get(url).then(data => {
                if(data.body.Response == "True")
                    this.moviesArray = data.body.Search.slice(0,10);
            });
        }
    }
}
</script>

<style scoped>

#movie-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

</style>