<template>
  <div id="nav">
    <div style="display:flex">
      <div style="margin-right: 10px">
        <router-link to="/typescript-test">typescript</router-link>
      </div>
      <div style="margin-right: 10px">
        <router-link to="/form-validate">Form-Validate</router-link>
      </div>
      <div style="margin-right: 10px">
        <router-link to="/#Home1">Home 1 router</router-link>
      </div>
      <div style="margin-right: 10px">
        <router-link to="/#Home2">Home 2 router</router-link>
      </div>
      <div style="margin-right: 10px">
        <router-link to="/about">About</router-link>
      </div>
      <div style="margin-right: 10px">
        <router-link to="/pdf">Pdf</router-link>
      </div>
      <div style="margin-right: 10px">
        <router-link to="/pdf-dist">Pdf-Dist</router-link>
      </div>
      <div style="margin-right: 10px">
        <router-link to="/pdf-dist-2">Pdf-Dist-2</router-link>
      </div>
      <div style="margin-right: 10px">
        <router-link to="/validate">Validate</router-link>
      </div>
      <div style="margin-right: 10px">
        <router-link to="/use-validate">Use-Validate</router-link>
      </div>
      <div style="margin-right: 10px">
        <router-link to="/parent/parent-nest-custom-one/true/#p1"
          >Parent</router-link
        >
      </div>
      <li>
        <u>
          {{ $route.query }}
        </u>
      </li>
    </div>
  </div>

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
