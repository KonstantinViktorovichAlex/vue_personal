import {ref} from "vue";
import getOffers from "../../api/offers/getOffers";

export const useOffers = () => {

    const products = ref();
    const isLoading = ref(true)

    getOffers().then((response) => {
        if(response.request.readyState === 4) {
            products.value = response.data
            isLoading.value = false;
        }
    })

    return {
        products,
        isLoading
    }
}