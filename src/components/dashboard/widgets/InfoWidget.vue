<template>
  <Panel :style="{color:colorTitle}" :header="title" :class="['info-widget',`${cssClass}`]">
    <template #icons>
      <span :style="{color:colorTitle, fontSize:'25px'}" :class="['pi', `${widgetIcon}`, 'p-mr-2', 'p-mt-1']"></span>
    </template>
    <p><span :style="{color: color}"> {{ info }} </span></p>
  </Panel>
</template>

<script>
import Panel from 'primevue/panel';

export default {
  name: "InfoWidget",
  props: {
    title: String,
    info: String,
    color: String,
    colorTitle: String,
    backgroundTitle:String,
    cssClass: String,
    widgetIcon:String,
  },
  components: {
    Panel
  }
}
</script>