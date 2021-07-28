<template>
    <div>
        <Card>
            <template #title>
                <HeaderCard title="Вход в личный кабинет" icon="pi pi-lock"></HeaderCard>
            </template>
            <template #content>
                <LoginTabs></LoginTabs>
            </template>
        </Card>
    </div>
</template>

<script>
    import Card from 'primevue/card';
    import LoginTabs from '../components/login/LoginTabs'
    import HeaderCard from "../components/ui/HeaderCard";

    export default {

        components: {
            Card,
            LoginTabs,
            HeaderCard,
        }
    }
</script>

<style scoped>
    button {
        width: 100%
    }
</style>