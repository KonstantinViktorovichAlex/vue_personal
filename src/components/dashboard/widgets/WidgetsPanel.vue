<template>
  <div class="p-col" v-for="item in items" :key="item.id">
    <Skeleton v-if="isLoading" height="98px" borderRadius="16px"></Skeleton>
    <InfoWidget
        v-else
        :title="item.title"
        :info="item.info"
        :color="item.color"
        :colorTitle="item.colorTitle"
        :backgroundTitle="item.backgroundTitle"
        :backgroundContent="item.backgroundContent"
        :cssClass="item.cssClass"
        :widgetIcon="item.widgetIcon"
    />
  </div>
</template>

<script>
import InfoWidget from "./InfoWidget";
import {useWidget} from "./widget";
import Skeleton from 'primevue/skeleton'

export default {
  name: "WidgetsPanel",

  setup() {
    return {
      ...useWidget()
    }
  },

  components: {
    InfoWidget,
    Skeleton
  },
}
</script>