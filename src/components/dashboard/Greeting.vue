<template>
  <div v-if="isLoading">
    <Skeleton class="p-mb-2" borderRadius="16px" width="20rem"></Skeleton>
  </div>
  <div v-else class="p-text-bold p-text-bold wrap">
    <span class="icon-greeting" >
        <img src="../../assets/img/waving.png" alt="greeting">
    </span>
    <span class="p-ml-2">{{ greeting }}, {{ user }}!</span>
  </div>
</template>

<script>
import {useGreeting} from "../../use/greeting";
import Skeleton from 'primevue/skeleton';

export default {
  name: "Greeting",
  props: {
    username: String,
  },

  setup() {

    return {
      ...useGreeting(),
    }
  },
  components: {
    Skeleton
  }

}
</script>

<style scoped>
i {
  vertical-align: middle;
  font-size: 1.1rem;
}

i, span {
  color: var(--yellow-500)
}
  .wrap{
    color: var(--yellow-500);
    font-size: 1.5rem;
  }
  .icon-greeting{
  }
</style>