<template>
  <h1>メニュー</h1>
  <div class="card-group">
    <div class="card" v-for="dish in info" :key="dish.id">
      <div class="card__imgframe">
        <!-- <img src="@/assets/images/dish_sample.png"> -->
      </div>
      <div class="card__textbox">
        <div class="card__titletext">
          {{ dish.name }}
        </div>
        <div class="card__overviewtext">
          <p>kcal：{{ dish.energy }}</p>
          <p>たんぱく質：{{ dish.protein }}</p>
          <p>脂質：{{ dish.lipid }}</p>
          <p>炭水化物：{{ dish.carbohybrates }}</p>
        </div>
      </div>
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
      .get('http://localhost:4040/food')
      .then((response) => {this.info = response.data;})
  }
}
</script>

<style>
.card-group{
  margin-left: auto;
  margin-right: auto;
  max-width: 640px;
  width: 90%;
  height: auto;
   /* ポイント１ */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
/* ポイント２ */
.card-group > :nth-child(2n){
  margin-left: 20px;
}
/* ポイント３ */
.card-group > :nth-child(n+3){
  margin-top: 20px;
}
.card{
  /* ポイント４ */
  width: calc((100% - 20px * 1) / 2);
  height: auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,.2)
}
.card__imgframe{
  background-image: url('@/assets/images/dish_sample.png');
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  /* background: #bbb; */
  box-sizing: border-box;
}
.card__textbox{
  width: 100%;
  height: auto;
  padding: 20px 18px;
  background: #fff;
  box-sizing: border-box;
}
.card__textbox > * + *{
  margin-top: 10px;
}
.card__titletext{
  font-size: 24px;
  font-weight: bold;
  line-height: 125%;
}
.card__overviewtext{
  font-size: 16px;
  line-height: 1;
}
.card__overviewtext p{
  margin-top: 1px;
}
</style>
