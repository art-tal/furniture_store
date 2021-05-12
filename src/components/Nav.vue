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
        <i class="bi bi-list" v-if="!showNav"></i>
        <i class="bi bi-x" v-else></i>
      </button>

      <div class="drop mx-4 bg-light"
           :class="{'active-wrap' : showNav}">
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
//@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");

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

.input-group {
  width: 300px !important;
  .form-control {
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


.active-wrap {
  display: block !important;
  transition-property: transform;
  transition-delay: 500ms;
  transition-duration: 2s;
  transition-timing-function: linear;
}

@media (max-width: 991.9px) {
  button.menu_open {
    display: block;
  }

  .drop {
    display: none;
    position: absolute !important;
    top: 117px !important;
    left: 0;
    padding: 10px 30px;
    margin: 0 !important;
    ul {
      display: block !important;
      li {
        display: block;
        margin: 10px 0;
      }
    }
  }
}
</style>