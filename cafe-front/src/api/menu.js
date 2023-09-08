// src/api/menu.js
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'; // バックエンドAPIのURL

export function getMenuList() {
  return axios.get(`${BASE_URL}/pikachu`);
}