import {apiGet} from '../../utils/utils';
import {PRODUCTS} from '../../config/urls';



export const productList = ()=> {
    return apiGet(PRODUCTS);
  
}



