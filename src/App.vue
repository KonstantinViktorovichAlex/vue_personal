<template>
  <div :class="layout + '-layout'">
    <router-view></router-view>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {computed} from "vue";

export default {
  name: 'App',
  setup() {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout)
    }
  },
}
</script>
