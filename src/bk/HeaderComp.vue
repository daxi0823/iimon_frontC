<template>
  <header>
    <v-toolbar
      class="container mx-auto"
      width="375"
      height="56"
      position: fixed
    >
      <h2 class="logo">
        <router-link to="/"
          ><img
            src="https://placehold.jp/3d4070/ffffff/45x45.png"
            alt="Dating logo"
            width="45"
            height="45"
        /></router-link>
      </h2>
      <div class="gnav_wrapper">
        <div
          @click="toggleActive"
          :class="{ active: isActive }"
          id="menu_btn"
          class="hamburger_menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav id="gnav" :class="{ active: isActive }">
          <ul>
            <li @click="toggleActive">
              <router-link to="/">Home</router-link>
            </li>
            <li @click="toggleActive">
              <router-link to="/setting-menu">管理画面-Menu</router-link>
            </li>
            <li @click="toggleActive">
              <router-link to="/stop-watch">Stop Watch</router-link>
            </li>
            <li @click="toggleActive">
              <router-link to="/clock">Clock</router-link>
            </li>
            <li @click="toggleActive">
              <router-link to="/webapi">Web API</router-link>
            </li>
            <li @click="toggleActive">
              <router-link to="/webapi-img">Random Image</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <!--gnav_wrapper-->
      </v-toolbar
    ><!--gnav_wrapper-->
  </header>
</template>

<script>
const h = document.querySelector("html");

export default {
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.isActive = false;
      if (this.isActive === true) {
        h.classList.add("active");
      } else {
        h.classList.remove("active");
      }
    });
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
      if (this.isActive === true) {
        h.classList.add("active");
      } else {
        h.classList.remove("active");
      }
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  /* position: fixed; */
  /* position: sticky; */
  z-index: 100;
  /* bottom: 0; */
  top: 0;
  left: 0;
  /* background: rgba(253, 249, 243, 0.7); */
}
header .container {
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
}
.logo {
  width: 220px;
}
#gnav {
  /* display: none; */
  position: absolute;
  top: -200vh;
  left: 0;
  width: 100vw;
  background-color: rgba(58, 19, 1, 0.7);
  padding-top: 80px;
  /* transform: translateX(-100vw); */
  transition: all 1s;
}
#gnav.active {
  top: 0;
  overflow: scroll;
  height: 100vh;
  /* transform: translateX(0); */
}
#gnav ul {
  display: flex;
  flex-direction: column;
}
#gnav li {
  border-top: solid 1px #fff;
}
#gnav a {
  color: #fff;
  padding: 20px;
  text-align: center;
}
#gnav a:hover {
  background-color: #3a1301;
}
@media (min-width: 4000px) {
  #gnav {
    transition: none;
    transform: none;
    position: initial;
    top: auto;
    left: auto;
    width: auto;
    background-color: transparent;
    padding-top: 0;
  }
  #gnav ul {
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
  }
  #gnav li {
    border: none;
  }
  #gnav a {
    padding: 0;
    color: #3a1301;
  }
  #gnav a:hover {
    background-color: transparent;
    color: rgba(58, 19, 1, 0.7);
    text-decoration: underline;
  }
}
/* ハンバーガーメニュー */
.nav_hidden {
  display: none;
}
.hamburger_menu,
.hamburger_menu span {
  display: inline-block;
}
.hamburger_menu {
  /* display: none; */
  position: relative;
  z-index: 10;
  width: 40px;
  height: 18px;
  cursor: pointer;
}
.hamburger_menu:hover {
  opacity: 0.8;
}
.hamburger_menu span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #3a1301;
  transition: all 0.4s;
}
.hamburger_menu span:nth-of-type(1) {
  top: 0;
}
.hamburger_menu span:nth-of-type(2) {
  top: 8px;
}
.hamburger_menu span:nth-of-type(3) {
  top: 16px;
}

.hamburger_menu.active span {
  background-color: #fff;
}
.hamburger_menu.active span:nth-of-type(1) {
  transform: translateY(8px) rotate(-45deg);
}
.hamburger_menu.active span:nth-of-type(2) {
  display: none;
}
.hamburger_menu.active span:nth-of-type(3) {
  transform: translateY(-8px) rotate(45deg);
}

@media (min-width: 4000px) {
  .hamburger_menu {
    display: none;
  }
}
</style>