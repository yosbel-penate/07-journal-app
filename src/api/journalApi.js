import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demo-d7e2f-default-rtdb.firebaseio.com'
})

export default journalApi;