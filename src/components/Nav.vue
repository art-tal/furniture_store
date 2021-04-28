<template>
  <div class="container-fluid bg-light p-2">
    <nav class="container text-dark bg-light d-flex">
      <router-link to="/" class="mr-5">
        <img src="../assets/image/logo-70.png" alt="logo">
      </router-link>

      <button class="btn btn-outline-secondary menu_open"
              @click="toggleNav"
              type="button"
              >
        <i class="bi bi-list" v-if="showNav"></i>
        <i class="bi bi-x" v-else></i>
      </button>

      <div class="drop mx-4">
        <ul class="d-flex align-items-center my-0 h-100 p-0 list">
          <li class="active">
            <router-link to="/" class="nav_link">Home</router-link>
          </li>
          <li class="dropdown">
            <a class="nav_link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Catalog
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="nav_link d-block" to="/">Serial furniture</router-link>
              <router-link class="nav_link d-block" to="/">Custom furniture</router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav_link" to="/">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav_link" to="/">Contacts</router-link>
          </li>
        </ul>
      </div>
    </nav>
<!--    <nav class="container navbar navbar-expand-lg text-white navbar-light ">-->
<!--      <a class="logo navbar-brand" href="#">-->
<!--        <img src="../assets/image/logo-70.png" alt="logo">-->
<!--      </a>-->

<!--      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--        <span class="navbar-toggler-icon"></span>-->
<!--      </button>-->

<!--      <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
<!--        <ul class="navbar-nav mr-auto">-->
<!--          <li class="nav-item active">-->
<!--            <router-link to="/" class="nav-link">Home<span class="sr-only">(current)</span></router-link>-->
<!--          </li>-->
<!--          <li class="nav-item dropdown">-->
<!--            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--              Catalog-->
<!--            </a>-->
<!--            <div class="dropdown-menu" aria-labelledby="navbarDropdown">-->
<!--              <router-link class="dropdown-item" to="/">Serial furniture</router-link>-->
<!--              <router-link class="dropdown-item" to="/">Custom furniture</router-link>-->
<!--              &lt;!&ndash;              <div class="dropdown-divider"></div>&ndash;&gt;-->
<!--              &lt;!&ndash;              <a class="dropdown-item" href="#">Something else here</a>&ndash;&gt;-->
<!--            </div>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <router-link class="nav-link" to="/">About</router-link>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <router-link class="nav-link" to="/">Contacts</router-link>-->
<!--          </li>-->
<!--        </ul>-->
<!--        &lt;!&ndash;        <form class="form-inline my-2 my-lg-0">&ndash;&gt;-->
<!--        &lt;!&ndash;          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">&ndash;&gt;-->
<!--        &lt;!&ndash;          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>&ndash;&gt;-->
<!--        &lt;!&ndash;        </form>&ndash;&gt;-->

<!--        <form class="input-group form-inline my-2 my-lg-0 w-50">-->
<!--          <input id="search_field"-->
<!--                 name="search_field"-->
<!--                 type="text"-->
<!--                 class="form-control"-->
<!--                 placeholder="Search"-->
<!--                 aria-label="Search"-->
<!--                 aria-describedby="button-search">-->
<!--          <div class="input-group-append">-->
<!--            <button class="btn btn-outline-dark"-->
<!--                    type="button"-->
<!--                    id="button-search">-->
<!--              <i class="bi bi-search"></i>-->
<!--            </button>-->
<!--          </div>-->
<!--        </form>-->
<!--      </div>-->

<!--      <div class="basket mx-4">-->
<!--        <div class="btn btn-info position-relative">-->
<!--          <i class="bi bi-cart" v-if="!basketLength"></i>-->
<!--          <i class="bi bi-cart-fill" v-else></i>-->
<!--          <span class="badge badge-primary position-absolute" v-if="basketLength">{{ basketLength }}</span>-->

<!--        </div>-->
<!--      </div>-->
<!--    </nav>-->


  </div>

</template>

<script>
export default {
  name: "Nav",

  data() {
    return {
      basketLength: 0,
      showNav: true,
    }
  },

  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
  }
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

  button.menu_open {
    display: none;
    align-self: center;
    width: 40px;
    height: 40px;
    i {
      font-size: 2.0rem;

    }
  }

ul {
  list-style: none;
  .nav_link{
      margin-right: 15px;
      color: #3c3c3c !important;
  }
}

//.collapse.navbar-collapse {
//  position: absolute;
//  top: 110px;
//}

.input-group {

  width: 300px !important;
  //height: 30px;
  .form-control {
    //height: 100%;
    font-size: 1.4rem;
  }
  .bi {
    font-size: 1.4rem;
  }
}

.basket {
  flex-grow: 1;
  text-align: right;
  .btn {
    border-radius: 50%;
    .badge {
      top: -5px;
      right: -10px;
      font-size: 1.2rem;
    }
  }
}

@media (min-width: 768px) and (max-width: 991.9px) {
  button.menu_open {
    display: block;
  }

  .drop {
    display: none;
    position: absolute !important;
    top: 110px !important;
    left: 0;
  }
}
</style>