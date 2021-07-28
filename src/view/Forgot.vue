<template>
  <Card>
    <template #header>
      <HeaderCard title="Восстановление пароля" icon="pi pi-question"></HeaderCard>
    </template>
    <template #title>
      <div class="card">
        <Steps
            :model="items"
            :readonly="true"
        />
      </div>
    </template>
    <template #content>
      <router-view :changeRoute="handleEmail"></router-view>
    </template>
  </Card>
</template>

<script>
import {smsSteps, emailSteps} from "./stepsItems";
import { ref } from 'vue';
import Card from 'primevue/card';
import Steps from 'primevue/steps'
import HeaderCard from "../components/ui/HeaderCard";

export default {
  name: "ForgotOptions",
  props:['changeRoute'],

  setup() {

    const items = ref(JSON.parse(localStorage.getItem('stepsItems')) || smsSteps);

    const handleEmail = (type) => {
      if(type === 'email'){
        items.value = emailSteps
        localStorage.setItem('stepsItems', JSON.stringify(emailSteps))
      }else if (type === 'sms') {
        items.value = smsSteps
        localStorage.setItem('stepsItems', JSON.stringify(smsSteps))
      }
    }

    return {
      items,
      handleEmail,
    }
  },

  components: {
    Card,
    Steps,
    HeaderCard
  }
}
</script>

<style scoped>
</style>