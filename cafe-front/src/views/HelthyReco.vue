<script>
import axios from 'axios'

export default {
    data () {
    return {
    recoMenu: null,
    helthyMenu: null,
    }
},
mounted () {
    axios
    .get('http://localhost:4040/helthyfood')
    .then((response) => {this.helthyMenu = response.data;}),
    axios
    .get('http://localhost:5000/api/recommendfood/1')
    .then((response) => {this.recoMenu = response.data;})

}
}
</script>