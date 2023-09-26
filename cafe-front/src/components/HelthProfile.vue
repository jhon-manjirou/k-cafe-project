<template>
  <h1>ユーザープロフィール</h1>
  <div class="profile__card">
    <div class="user__image">
      <!-- プロフィール画像 -->
    </div>
    <div class="user__detail">
      <p class="user__name">{{ info.name }}</p>
      <p class="user__mirage">{{ info.mileage }}</p>
      <p class="user__mission">塩分を控えましょう</p>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'

export default {
    data () {
    return {
    info: null
    }
},
mounted () {
    axios
    .get('http://localhost:4040/employee')
    .then((response) => {this.info = response.data[0];})
}
}
</script>
  
<style>

</style>