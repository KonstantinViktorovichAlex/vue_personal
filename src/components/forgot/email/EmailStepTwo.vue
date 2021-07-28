<template>
  <div class="p-text-center p-text-bold p-mb-3">Введите Email привязанный в вашему аккаунту</div>
  <form class="p-fluid p-formgrid p-mt-3">
    <div class="p-grid">
      <div class="p-field p-col-10">
        <span class="p-float-label">
            <InputText
                id="login"
                type="email"
                v-model="email"
                @blur="emailBlur"
                :class="{'p-invalid':emailMessage}"
            />
      <label for="login">Email</label>
      </span>
        <small v-if="emailMessage" class="p-error ">{{ emailMessage }}</small>
      </div>
      <div class="p-field p-col-2">
        <router-link :to="{name: 'emailStepThree'}" class="forgot_back">
          <Button label="ДАЛЕЕ" class="btn_email"></Button>
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
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import {useEmailValidationForgotEmail} from "../../../use/emailValidationForgotEmail";

export default {
  props: ['changeRoute'],
  setup() {
    return {
      ...useEmailValidationForgotEmail(),
    }
  },
  components: {
    InputText,
    Button
  }
}
</script>

<style scoped>
.btn_email {
  height: 35px;
}

.forgot_back {
  text-decoration: none;
}
</style>