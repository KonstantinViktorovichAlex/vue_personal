import {ref} from "vue";
import {infoWidgetsItems} from "./infoWidgetsItems";
import getWidgets from "../../../api/widgets/getWidgets";

export function useWidget() {
    const items = ref(infoWidgetsItems)
    const isLoading = ref(true)

    getWidgets().then((response) => {
        if (response.request.readyState === 4) {
            items.value = items.value.map((item, index) => ({...item, ...response.data[index]}));
            isLoading.value = false
        }
    })

    return {
        isLoading,
        items
    }
}