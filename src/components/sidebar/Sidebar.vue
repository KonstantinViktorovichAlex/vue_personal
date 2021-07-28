<template>
        <Button iconPos="right" icon="pi pi-arrow-right"  @click="visibleLeft = true" class="sidebar-button p-mt-1" />
        <Sidebar v-model:visible="visibleLeft" :baseZIndex="1000" :modal="false" class="sidebar-news">
            <div class="sidebar-news-wrapper" v-for="item in items" :key="item.id">
                <h3 class="news-header">{{item.header}}</h3>
                <p class="news-content">{{item.content}}</p>
                <p class="news-date"><i class="pi pi-calendar"></i> <strong>{{new Date().toLocaleString()}}</strong></p>
                <div class="news-button">
                    <Button label="Подробнее..."  class="p-button-link"  />
                </div>
                <hr>
            </div>
        </Sidebar>
</template>

<script>
    import {items} from './sidebarItems'
    import Sidebar from 'primevue/sidebar';
    import Button from 'primevue/button'
    import {ref} from "vue";
    export default {
        setup() {
            const visibleLeft = ref(false);
            return{
                visibleLeft,
                items
            }
        },
        components: {
            Sidebar,
            Button
        }
    }
</script>

<style scoped>
.sidebar-button{
    position: fixed;
    top: 50%;
    left: 0px;
    z-index:100
}
.news-header{
    color: #686dce
}
.news-content{
    color: #ffffff;
}
.news-button{
    text-align: right;
}
.news-date{
    color: #ffffff;
}

</style>