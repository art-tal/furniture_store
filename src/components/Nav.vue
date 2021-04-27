<template>
  <nav class="navbar navbar-expand-lg text-white navbar-light
   bg-light">
      <a class="logo navbar-brand" href="#">
        <img src="../assets/image/logo-70.png" alt="logo">
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Catalog
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/">Serial furniture</router-link>
              <router-link class="dropdown-item" to="/">Custom furniture</router-link>
<!--              <div class="dropdown-divider"></div>-->
<!--              <a class="dropdown-item" href="#">Something else here</a>-->
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Contacts</router-link>
          </li>
        </ul>
<!--        <form class="form-inline my-2 my-lg-0">-->
<!--          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">-->
<!--          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
<!--        </form>-->

        <form class="input-group form-inline my-2 my-lg-0">
          <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
          </div>
        </form>
      </div>
    </nav>
</template>

<script>
export default {
  name: "Nav",
}
</script>

<style scoped lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");
  a.logo {
    margin-right: 30px;
    img {
      width: 56px;
    }

  }
</style>