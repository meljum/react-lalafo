import axios from "axios"; 
import { base_url } from "../constant";
 

const http = axios.create({
  baseURL: base_url,
})

const Api = {
    getHouses: () => http.get('houses'),
    deleteHouse: (id) => http.delete("houses/" + id)
}
export default Api;