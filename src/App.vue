<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav__link" to="/">Home</router-link>
      <router-link class="nav__link" to="/about">About</router-link>
      <router-link class="nav__link" to="/lesson1">Lesson1</router-link>
      <router-link class="nav__link" to="/lesson2">Lesson2</router-link>
      <router-link class="nav__link" to="/lesson3">Lesson3</router-link>
      <router-link class="nav__link" to="/lesson4">Lesson4</router-link>
      <router-link class="nav__link" to="/lesson5">Lesson5</router-link>
      <router-link class="nav__link" to="/lesson6">Lesson6</router-link>
      <router-link class="nav__link" to="/lesson7">Lesson7</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  color: #42b983;
  margin-bottom: 50px;
}

.line {
  margin: 50px auto;
  width: 100px;
  height: 2px;
  border: none;
  background-color: #ddd;
}
</style>

<style scoped>
.nav__link + .nav__link::before {
  content: "|";
  color: #bbb;
  margin: 0 10px;
}
</style>
