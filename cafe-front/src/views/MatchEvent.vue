<template>
    <h1>イベント</h1>
    <div class="card-group">
      <div class="card" v-for="event in info" :key="event.id">
        <div class="card__imgframe">
          <!-- <img src="@/assets/images/dish_sample.png"> -->
        </div>
        <div class="card__textbox">
          <div class="card__titletext">
            {{ event.name }}
          </div>
          <div class="card__overviewtext">
            <p class="description">{{ event.description }}</p>
            <p class="date">開催予定日：{{ event.date }}</p>
            <p :class="{'active_status': event.status == '募集中', 'deactive_status': event.status == '受付終了'}">{{ event.status }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getMenuList } from '@/api/menu';
  import axios from 'axios'
  
  export default {
      data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get('http://localhost:4040/match')
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
    background-image: url('@/assets/images/event_sample.png');
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
    line-height: 125%;
  }
  .active_status {
    margin: 0 auto;
    font-size: 18px;
    height: auto;
    width: 70px;
    font-weight: bold;
    color: #e5e5e5;
    background-color: green;
    border-radius: 30px;
  }
  .deactive_status {
    margin: 0 auto;
    font-size: 18px;
    height: auto;
    width: 80px;
    font-weight: bold;
    color: #e5e5e5;
    background-color: gray;
    border-radius: 30px;
  }
  </style>