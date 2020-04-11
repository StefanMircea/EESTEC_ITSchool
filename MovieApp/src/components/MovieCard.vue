<template>
    <div  class="movie-card">
    <img :src="movie.Poster">
    <h1> {{ movie.Title }}</h1>
    <h2 >{{ movie.Year }} </h2>
    </div>   
</template>

<script>
export default {
    props: [
        "movie"
    ],
    data() {
        return {
            img: require("../assets/logo.png")
        }
    }
}
</script>

<style scoped>

.movie-card {
    width: 300px;
    height: 400px;
    border: 1px solid black;

    margin-right: 10px;
    margin-top: 10px;
}

img {
    width: 150px;
}

h1 {
    font-size: 30px;
}

</style>