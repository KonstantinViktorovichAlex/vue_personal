<template>
  <Message :severity="type" :closable="closable" :sticky="!autoClose" :life="life">
    <div class="p-grid p-align-center">
      <div class="p-col-3">
        <h4 class="p-ml-4 p-text-bold p-text-uppercase title-message">{{ header }}</h4>
      </div>
      <div class="p-col-6">
        <p class="p-ml-4 text-message">{{ text }}</p>
      </div>
      <div v-if="button" class="p-col-3 p-mt-2">
        <Button :label="button.text" :class="'p-button-raised p-button-' + button.type" @click="$emit('click')"/>
      </div>
    </div>
  </Message>
</template>

<script>
import {computed} from "vue";
import Message from 'primevue/message';
import Button from 'primevue/button';

export default {
  name: "CustomMessage",
  props: {
    type: {
      type: String,
      default: 'info'
    },
    header: {
      type: String,
      default: 'Вы не передали заголовок'
    },
    text: {
      type: String,
      default: 'Вы не передали текст'
    },
    button: {
      type: Object,
    },
    closable: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    delay: {
      type: String,
      default: "3000"
    }
  },
  setup(props) {



    return {
      life: computed(() => +props.delay)
    }
  },
  components: {
    Message,
    Button,
  }
}
</script>
<style scoped>
.text-message {
  margin-bottom: 0;
  margin-top: 4px;
}

.title-message {
  margin: 4px 0 0 0;
}
</style>