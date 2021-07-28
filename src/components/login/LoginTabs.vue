<template>
    <TabView class="tabview-custom">
        <TabPanel v-for="(tab, index) in tabsConfig" :key="tab.name + index">
            <template #header>
                <i :class='tab.icon'></i>
                <span class="tab-title">{{tab.name}}</span>
            </template>
            <component :is="tab.component"></component>
        </TabPanel>
    </TabView>
</template>

<script>
    import {tabsConfig} from './tabsConfig'
    import TabView from 'primevue/tabview';
    import TabPanel from 'primevue/tabpanel';

    export default {

        setup() {

            return {
                tabsConfig
            }

        },
        components: {
            TabView,
            TabPanel,
        }
    }
</script>

<style scoped>
    i.pi {
        margin-right: 0.75rem;
        font-weight: 700;
    }

    .tab-title {
        text-transform: uppercase;
        font-weight: 700;
    }
</style>