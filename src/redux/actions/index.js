import * as auth from "./auth";
import * as products from "./products";
import * as cart from './cart';


export default {
    ...auth,
    ...products,
    ...cart

}