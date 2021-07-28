<template>
  <div class="p-text-center p-text-bold p-mb-3">
    Проверьте ваш почтовый ящик, на него мы выслали письмо со ссылкой на восстановление пароля
  </div>

  <form class="p-grid p-jc-center p-mt-2 p-mt-3">
    <div class="p-col-10">
        <span class="p-float-label p-mb-1">
          <InputText
              id="code"
              type="text"
              v-model="confirmationCodeValue"
              @blur="confirmationCodeBlur"
              class="width-input-code"
          />
          <label for="code">Введите код подтверждения</label>
        </span>
      <small v-if="codeMessage" class="p-error">{{ codeMessage }}</small>
    </div>
    <div class="p-col-2">
      <router-link :to="{name: 'newPassword'}" class="forgot_forward">
        <Button type="button" class="p-text-capitalize btn_forgot" label="ДАЛЕЕ"/>
      </router-link>
    </div>
  </form>

  <div class="p-grid p-jc-center p-mt-2">
    <div class="p-col-7">
      <Button label="Выслать письмо еще раз" class="p-button-outlined btn_forgot"/>
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
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import {useConfirmationCodeForm} from "../../../use/confirmationCodeForm";

export default {
  props: ['changeRoute'],
  setup() {
    return {
      ...useConfirmationCodeForm(),
    }
  },
  components: {
    Button,
    InputText,
  }
}
</script>

<style scoped>
.btn_forgot {
  width: 100%;
  height: 35px;
}

.forgot_forward {
  text-decoration: none;
}

.forgot_back {
  text-decoration: none;
}

.width-input-code {
  width: 100%;
}
</style>