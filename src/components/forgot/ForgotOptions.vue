<template>
  <div class="p-text-center p-text-bold p-mb-3">Выберите способ восстановления</div>
  <div class="p-grid p-jc-center">
    <div class="p-col-6">
      <router-link :to="{name: 'smsStepTwo'}" class="forgot_back">
        <Button  @click="changeRoute('sms')" label="Через SMS-код" class="p-button-outlined btn_forgot"/>
      </router-link>
    </div>
  </div>
  <div class="p-grid p-jc-center p-mt-2">
    <div class="p-col-6">
      <router-link :to="{name: 'emailStepTwo'}" class="forgot_back">
        <Button @click="changeRoute('email')"  label="Через Email" class="p-button-outlined btn_forgot"/>
      </router-link>
    </div>
  </div>
  <div class="p-grid p-jc-center p-mt-2">
    <div class="p-col-5 p-text-center">
      <router-link :to="{name: 'login'}" class="forgot_back">
        <Button label=" НАЗАД К АВТОРИЗАЦИИ" icon="pi pi-chevron-circle-left" iconPos="left"
                class="p-button-text p-button-sm p-text-bold"/>
      </router-link>
    </div>
  </div>

</template>

<script>
import Button from 'primevue/button'

export default {
  name: "ForgotOptions",
  props:['changeRoute'],
  components: {
    Button
  }
}
</script>

<style scoped>
.btn_forgot {
  width: 100%;
}

.forgot_back {
  text-decoration: none;
}
</style>