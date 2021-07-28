<template>
  <div class="p-text-center p-text-bold p-mb-3">Введите Ваш лицевой счет, логин или номер телефона</div>
  <form class="p-fluid p-formgrid p-mt-3" @submit.prevent>
    <div class="p-grid">
      <div class="p-field p-col-10">
        <span class="p-float-label">
      <InputText
          id="login"
          type="text"
          v-model="login"
          @blur="loginBlur"
          :class="{'p-invalid':loginErrorMessage}"
      />
      <label for="login">Лицевой счет, логин или номер телефона</label>
      </span>
        <small v-if="loginErrorMessage" class="p-error ">{{ loginErrorMessage }}</small>
      </div>
      <div class="p-field p-col-2">
        <router-link :to="{name: 'smsStepThree'}" class="forgot_back">
          <Button label="ДАЛЕЕ" class="btn_sms"></Button>
        </router-link>
      </div>
    </div>
  </form>
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
import InputText from 'primevue/inputtext';
import Button from "primevue/button";
import {useSmsStepOne} from "../../../use/smsStepOne";

export default {
  props: ['changeRoute'],

  setup() {
    return {
      ...useSmsStepOne(),
    }
  },

  components: {
    InputText,
    Button
  }
}
</script>

<style scoped>
.btn_sms {
  height: 35px;
}

.forgot_back {
  text-decoration: none;
}
</style>