<template>
    <div class="p-mr-3">
        <i class="pi pi-bell p-text-secondary bell-notification"
           style="font-size: 2rem;
                    color: white"
           v-badge.warning="items.length === 0 ? '' : items.length"
           aria-controls="overlay_menu"
           label="Toggle"
           @click="toggle"
           aria-haspopup="true"></i>
        <OverlayPanel ref="op" appendTo="div" :showCloseIcon="false" id="overlay_panel" style="width: 450px" :breakpoints="{'960px': '75vw'}">
            <div v-if="items.length === 0">
                <h5 >Уведомлений нет!</h5>
            </div>
            <div v-else>
                <div class="p-grid">
                    <div class="p-col">
                        <p :key="item.content + 1" v-for="item in items">
                            <i class="pi  pi-info-circle p-mr-3"></i>
                            <strong>{{item.content}}</strong>
                            <Divider/>
                        </p>
                    </div>
                </div>
                <div class="overlay-footer">
                    <Button @click="clearNotification" label="Очистить" icon="pi pi-trash" class="p-button-sm p-button-danger"  />
                </div>
            </div>
        </OverlayPanel>
    </div>
</template>

<script>
    import {useNotifications} from "./useNotifications";
    import Divider from 'primevue/divider';
    import OverlayPanel from 'primevue/overlaypanel';
    import Button from 'primevue/button';
    export default {
        setup() {
            return {
                ...useNotifications()
            }
        },
        components: {
            OverlayPanel,
            Button,
            Divider
        }
    }
</script>

<style scoped>
    .link-item {
        margin: 0;
    }

    .link-item > p {
        margin: 0;

    }

    .bell-notification {
        cursor: pointer;
    }
    .overlay-footer{
        text-align: end;
    }

</style>