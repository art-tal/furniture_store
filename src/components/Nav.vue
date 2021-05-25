<template>

  <div class="container-fluid bg-light p-2">
    <nav class="container text-dark bg-light d-flex">
      <router-link to="/"
                   class="mr-5"
                   exact
      >
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
           :class="showNav ? 'active-wrap' : 'disable-wrap' "
      >
        <ul class="d-flex align-items-center my-0 h-100 p-0 list">
          <li class="active">
            <router-link class="nav_link"
                         active-class="active"
                         tag="a"
                         exact
                         to="/"
            >
              Home</router-link>
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


@keyframes show {
  from {
    left: -200px;
  }
  to {
    left: 0px;
  }
}

@keyframes hide {
  from {
    left: 0;
  }
  to {
    left: -200px;
    display: none;
  }
}

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
  animation: show 1s;
  animation-fill-mode: forwards;
}
.disable-wrap {
  animation: hide 1s;
  animation-fill-mode: forwards;
}

@media (max-width: 991.9px) {
  button.menu_open {
    display: block;
  }

  .drop {
    width: 200px;
    background-color: #d5d4d4 !important;
    position: absolute !important;
    top: 117px !important;
    padding: 10px 30px;
    margin: 0 !important;
    z-index: 10;
    ul {
      display: block !important;
      li {
        display: block;
        margin: 15px;
        font-size: 2rem;
        font-weight: normal;
        &:hover {
          font-weight: bold;
        }
      }
    }
  }
}
</style>