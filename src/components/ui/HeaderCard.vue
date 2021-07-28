<template>
    <div class="p-grid p-text-center">
        <div class="p-col-12">
            <h3>
                <Avatar :icon="icon" size="large" shape="circle" style="background-color: #3F51B5; color: #ffffff" />
                {{title}}
            </h3>
        </div>
    </div>
</template>

<script>
import Avatar from "primevue/avatar";

export default {
    props: {
        title:{
            type: String,
            required: true,
        },
        icon:{
            type: String,
            default: 'pi-circle-on'
        }
    },
    components:{
        Avatar
    }
}

</script>

<style scoped>

</style>