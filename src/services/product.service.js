import http from "./http-common";
class DataService {
  getAll() {
        return http.get('http://localhost:8081/api/product-list')
  }
  
}

export default new DataService;