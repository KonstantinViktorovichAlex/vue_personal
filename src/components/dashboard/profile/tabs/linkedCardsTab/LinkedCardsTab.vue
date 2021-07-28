<template>
  <CustomMessage
      type="success"
      header="Привязанные карты"
      text="У вас нет ни одной привязанной карты. Добавьте карту, чтобы оплачивать услуги быстрее и удобнее."
      :button="{
                text:'Добавить карту',
                type: 'success',
            }"
      @click="openConfirmation"
  />

  <Dialog header="Согласие на привязку карты" v-model:visible="displayConfirmation" :style="{width: '350px'}" :modal="true">
    <div class="confirmation-content">
      <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
      <span>Согласен с <a href="#">условиями</a> привязки банковской карты и совершения автоплатежа.
        Привязка карты и подключение автоплатежа могут занять несколько минут.</span>
    </div>
    <template #footer>
      <Button label="Согласиться" icon="pi pi-check" @click="closeConfirmation" class="p-button-text" />
      <Button label="Отмена" icon="pi pi-times" @click="closeConfirmation" class="p-button-text" />
    </template>
  </Dialog>

  <LinkedCard />
</template>

<script>
import {ref} from 'vue';
import Button from 'primevue/button';
import CustomMessage from "@/components/ui/CustomMessage";
import Dialog from 'primevue/dialog';
import LinkedCard from "./LinkedCard";

export default {
  name: "LinkedCardsTab",

  setup() {
    const displayConfirmation = ref(false);

    const openConfirmation = () => {
      displayConfirmation.value = true;
    };

    const closeConfirmation = () => {
      displayConfirmation.value = false;
    };

    return {
      displayConfirmation,
      openConfirmation,
      closeConfirmation
    }
  },

  components: {
    Button,
    CustomMessage,
    Dialog,
    LinkedCard
  }
}
</script>

<style scoped>
.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  color: rgb(230, 0, 23);
}
</style>