<template>
  <nav class="navbar navbar-expand-lg text-white navbar-dark
   bg-dark">
      <a class="logo navbar-brand" href="#">
        <img src="../assets/image/logo.png" alt="logo">
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Главная <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">О нас</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Каталог
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/">Серийная мебель</router-link>
              <router-link class="dropdown-item" to="/">Заказная мебель</router-link>
<!--              <div class="dropdown-divider"></div>-->
<!--              <a class="dropdown-item" href="#">Something else here</a>-->
            </div>
          </li>
        </ul>
<!--        <form class="form-inline my-2 my-lg-0">-->
<!--          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">-->
<!--          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
<!--        </form>-->
      </div>
    </nav>
</template>

<script>
export default {
  name: "Nav",
}
</script>

<style scoped>

</style>