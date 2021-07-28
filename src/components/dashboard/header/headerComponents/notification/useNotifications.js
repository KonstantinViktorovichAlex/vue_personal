import {ref} from "vue";
import getNotificationHeader from "../../../../../api/notificationHeader/getNotificationHeader";

export function useNotifications() {
    const items = ref([]);
    const op = ref();

    getNotificationHeader().then((res) => {
        console.log(res.data)
        items.value = res.data
    })
    const clearNotification = () => {
        items.value = []

    }
    const toggle = (event) => {
        op.value.toggle(event);
    };

    return {
        items,
        op,
        clearNotification,
        toggle,
    }
}

