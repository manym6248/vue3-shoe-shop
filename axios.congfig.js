import axios from "axios";
const baseURL = process.env.Node_ENV === "production" ? "http://localhost:8000/api/" : "https://fakestoreapi.com" ;
const token = localStorage.getItem('token')
export default axios.create({
    baseURL,
    headers:{
        'Accept':'application/json',
        'Content-type':'application/json',
        'Authorization': `Bearer ${token}`
    }
}) 