<template>
    <div class="p-mr-1 p-mt-2 p-mb-2 p-ml-1">
        <Card class="offer" :class="slotProps.data.color">
            <template #title>
                {{slotProps.data.title}}
            </template>
            <template #content>
                    <Divider></Divider>
                    <div class="p-grid">
                        <div class="p-col" v-if="slotProps.data.image">
                            <img class="card-image"  alt="user header" :src="slotProps.data.image">
                        </div>
                        <div class="p-col offers-card-content">
                            {{slotProps.data.content}}
                        </div>
                    </div>
                    <Divider></Divider>
            </template>
            <template #footer>
                <div class="p-text-right">
                    <Button icon="pi pi-info" label="Подробнее" />
                </div>
            </template>
        </Card>

    </div>
</template>

<script>
    import Card from 'primevue/card';
    import Button from 'primevue/button';
    import Divider from 'primevue/divider';

    export default {
        props:['slotProps'],

        components:{
            Card,
            Button,
            Divider,
        }
    }
</script>

<style scoped>
    .card-image{
        width: 170px;
    }
    .offers-card-content{
        min-height: 130px;
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
    }
</style>