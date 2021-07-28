<template>
    <div class="p-grid header">
        <div class="p-col-12">
            <Menubar :model="items" class="header-menu">
                <template #start>
                    <Logo/>
                </template>
                <template #end>
                    <div class="user-container">
                        <Search/>
                        <Notification/>
                        <User/>
                    </div>
                </template>
            </Menubar>
        </div>
    </div>
</template>

<script>
    import {ref} from "vue";
    import {menuItems} from './menuItems'
    import Logo from "./headerComponents/Logo";
    import Search from "./headerComponents/Search";
    import User from "./headerComponents/user/User";
    import Menubar from 'primevue/menubar';
    import Notification from "./headerComponents/notification/Notification";

    export default {

        setup() {
            const items = ref(menuItems)
            return {
                items,
            }
        },

        components: {
            User,
            Search,
            Logo,
            Menubar,
            Notification
        }
    }
</script>

<style scoped>
    .header {
        background-color: #293241;
    }

    .user-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>