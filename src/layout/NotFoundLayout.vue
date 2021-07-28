<template>
    <div class="p-grid">
        <div class="p-col notFound">
            <h1>Страница не найдена</h1>
            <h3>404</h3>
            <router-link to="/">
                <Button label="На главную" class="p-button-info p-button-text" />
            </router-link>
        </div>
    </div>
</template>

<script>
    import Button from 'primevue/button'
    export default {
        components:{
            Button
        }
    }
</script>

<style scoped>
.notFound{
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>