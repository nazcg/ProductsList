import axios from 'axios';

const instance = axios.create({
    baseURL: "https://pz8cvzu4sl.execute-api.us-east-1.amazonaws.com/dev/product-ms/product/getProductByIdCompany?id=5e8d08fafd3f3d2eb89c5063"
});

export default instance;