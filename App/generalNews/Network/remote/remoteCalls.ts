import { AUTH_TOKEN, baseURL } from "@/app/config/config";
import axios from "axios";



const urldata = { 
    baseUrl: baseURL,
    contentType: 'application/json',
    responseType: "plain",
    receiveDataWhenStatusError: true,}
    const instance = axios.create({
        // .. where we make our configurations
    });
    instance.defaults.baseURL = urldata.baseUrl;
    instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    instance.defaults.headers.post['Content-Type'] = urldata.contentType;
    instance.interceptors.request.use(request => {
        console.log(request);
        // Edit request config
        return request;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });
    
    instance.interceptors.response.use(response => {
        console.log(response);
        // Edit response config
        return response;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });
 

//function getNews(url:String,query:string) {
//    const nowDate = new Date().toISOString().split('T')[0]; //"yyyy-mm-dd"
//    return axios.get(url + `?q=${query}&from=${nowDate}&apiKey=${NEWS_API}`);
//}
//function getRecipes(url:String, query:string) {
//    return axios.get(url + `?q=${query}&apiKey=${NEWS_API}`);
//}
