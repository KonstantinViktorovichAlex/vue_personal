<template>
  <div v-if="isLoading" class="p-col">
    <h4 class="contracts-title">Быстрый доступ к договорам</h4>
    <Skeleton height="319px" borderRadius="16px"></Skeleton>
  </div>
  <div v-else class="card">
    <Carousel :value="items" :numVisible="3" :numScroll="3" :responsiveOptions="contractsCarousel">
      <template #header>
        <h4 class="contracts-title">Быстрый доступ к договорам</h4>
      </template>
      <template #item="slotProps">
        <contract-item
            :slotProps="slotProps"
        >
        </contract-item>
      </template>
    </Carousel>
  </div>
</template>

<script>
import {ref} from 'vue'
import {caruselOptions, contractCarouselOptions} from './caruselOptions'
import {useContracts} from './useContracts'
import Carousel from 'primevue/carousel';
import ContractItem from "./ContractItem";
import Skeleton from "primevue/skeleton";

export default {

  setup() {

    const contractsCarousel = ref(contractCarouselOptions)

    return {
      ...caruselOptions(),
      ...useContracts(),
      contractsCarousel,
    }
  },
  components: {
    ContractItem,
    Carousel,
    Skeleton
  }
}
</script>
<style scoped>
.contracts-title {
  color: var(--yellow-500);
}
</style>