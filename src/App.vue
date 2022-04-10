<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-danger bg-dark">
      <div class="d-flex">
        <a class="navbar-brand" href="/"
          ><i class="fas fa-headset text-white" style="font-size: 24px"
            >Game Opinion</i
          ></a
        >
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/"
                ><router-link to="/"
                  ><i class="text-white fa fa-home">Home</i></router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/opiniones"
                ><router-link to="/opiniones"
                  ><i class="far fa-home text-white">Opiniones</i></router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin"
                ><router-link to="/administracion"
                  ><i class="fas fa-user-cog text-white"
                    >Administración</i
                  ></router-link
                ></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <p></p>
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      saludo: "Hola mundeque",
    };
  },
  methods: {
    ...mapActions(["getGames"]),
  },
  created() {
    this.getGames();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
