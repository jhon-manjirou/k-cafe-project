<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import MatchEvent from './components/MatchEvent.vue'
// import HelthProfile from './components/HelthProfile.vue'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- ヘッダー部分 -->
  <header>
    <!-- ロゴ部分 -->
    <div class="logo">
      <RouterLink to="/"><img src="@/assets/images/umaii-icon.png" alt="umaii-icon" /><img src="@/assets/images/umaii-logo.png" alt="umaii-icon" /></RouterLink>
    </div>
    <!-- 右部分: ログインボタンとハンバーガーメニュー -->
    <div class="right-section">
      <!-- ログインボタン -->
      <a href="#" class="login-button">ログイン</a>
      <!-- ハンバーガーメニュー -->
      <div class="hamburger-menu" @click="toggleMenu">
        <img src="@/assets/images/arrow_left_fill48.png" class="hamburger-icon" v-if="active">
        <img src="@/assets/images/menu_fill48.png" class="hamburger-icon" v-else="active">
      </div>
    </div>
    <div class="menu" v-show="active">
      <ul>
        <li><RouterLink  to="/menu" @click="toggleMenu">メニュー</RouterLink></li>
        <li><RouterLink  to="/event" @click="toggleMenu">イベント</RouterLink></li>
        <li><a class="not-develop" href="#" @click="toggleMenu">プロフィール</a></li>
        <li><a class="not-develop" href="#" @click="toggleMenu">マッチング</a></li>
      </ul>
    </div>
  </header>
  <!-- その他のコンテンツ -->
  <main>
    <RouterView/>
    <!-- <MenuIndex/> -->
    <!-- <HelthProfile/> -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },
  methods: {
    toggleMenu() {
      this.active = !this.active
    }
  }
}
</script>
<style>
/* ヘッダー */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fcf4ec;
}
.logo img {
  height: 40px;
}
.right-section {
  display: flex;
  align-items: center;
}
.login-button {
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}
.login-button:hover {
  background-color: #45A049;
}
.hamburger-menu {
  z-index: 9;
  margin: auto 0px;
  cursor: pointer;
}
.hamburger-menu img {
  height: 30px;
  display: block;
}
.hamburger-menu img:hover {
  background-color: #e5e5e5;
  border-radius: 20px;
}
.menu {
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 8;
  padding: 4vw;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu li {
  line-height: 150%;
  border-bottom: #45A049;
  font-size: 32px;
}
.not-develop{
  text-decoration-line: line-through;
}
/* メインコンテンツ */
main {
  text-align: center;
  margin-top: 10px;
  /* border-top: 2px solid #a5a5a5; */
}
</style>
