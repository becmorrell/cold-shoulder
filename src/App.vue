<template>

  <h1>Alisons Cold Shoulder</h1>

  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/exerciseDiary">Exercises</router-link> 
    <router-link to="/painScale">Pain Scale</router-link> 
    <router-link to="range">Range of Movement Diary</router-link>
    <router-link to="/weeklyAchieved">This week I have..</router-link>
    <router-link to="/motivation">Motivation 💪🏼</router-link>
    
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 4px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
