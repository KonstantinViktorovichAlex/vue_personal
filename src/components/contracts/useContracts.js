import {ref} from "vue";
import getContracts from "../../api/contracts/getContracts";

export function useContracts() {
    const items = ref([])
    const isLoading = ref(true)

    getContracts().then((response) => {
        if (response.request.readyState === 4) {
            items.value = response.data
            isLoading.value = false
        }
    })

    return {
        isLoading,
        items
    }
}