<template>
    <div v-if="isLoading" class="p-col">
        <h4 class="offers-title">Быстрый доступ к договорам</h4>
        <Skeleton height="319px" borderRadius="16px"></Skeleton>
    </div>
    <div v-else class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="offersCarousel">
            <template #header>
                <h4 class="offers-title">Персональные предложения</h4>
            </template>
            <template #item="slotProps">
                <OffersItem
                        :slotProps="slotProps"
                >
                </OffersItem>
            </template>
        </Carousel>
    </div>
</template>

<script>

    import {ref} from "vue";
    import {useOffers} from "./useOffers";
    import {offersCarouselOptions} from './offersCarouselOptions'
    import Carousel from 'primevue/carousel';
    import OffersItem from './OffersItem'
    import Skeleton from 'primevue/skeleton'

    export default {
        setup() {
            const offersCarousel = ref(offersCarouselOptions)
            return {
                ...useOffers(),
                offersCarousel,
            }
        },

        components: {
            Carousel,
            OffersItem,
            Skeleton
        }
    }
</script>

<style scoped>
    .offers-title {
        color: var(--yellow-500);
    }

</style>