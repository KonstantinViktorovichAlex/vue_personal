<template>
  <form class="p-fluid p-mt-3">
    <div class="p-field">
      <span class="p-input-icon-right p-float-label p-mb-1">
        <i class="pi pi-envelope" v-tooltip.right="'Вспоминай свой email'"/>
        <InputText
            id="email"
            type="email"
            v-model="email"
            @blur="emailBlur"
            :class="{'p-invalid':emailMessage}"
        />
        <label for="email">Введите email</label>
      </span>
      <small v-if="emailMessage" class="p-error ">{{ emailMessage }}</small>
    </div>
    <div class="p-field">
      <span class="p-float-label p-mb-1">
        <Password
            id="emailPassword"
            v-model="passwordValue"
            :feedback="false"
            toggleMask
            :class="{'p-invalid':passwordErrorMessage}"
        />
        <label for="emailPassword">Введите пароль</label>
      </span>
      <small v-if="passwordErrorMessage" class="p-error">{{ passwordErrorMessage }}</small>
    </div>
    <div class="p-grid p-mt-3">
      <div class="p-col-6">
        <div class="p-field-checkbox">
          <Checkbox id="emailRemember" v-model="emailRemember" :binary="true"/>
          <label for="emailRemember">Запомнить меня</label>
        </div>
      </div>
      <div class="p-col-6 p-text-right">
        <router-link :to="{name: 'forgotOptions'}" style="color: #e60017">Забыли пароль?</router-link>
      </div>
    </div>
    <div class="p-grid p-jc-center">
      <div class="p-col-2">
        <Button label="Войти" @click="sendEmail"/>
      </div>
    </div>
  </form>
  <PersonalInformation/>
</template>

<script>
import {useEmailForm} from "../../use/emailForm";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import PersonalInformation from "./PersonalInformation";

export default {

  setup() {

    return {
      ...useEmailForm(),
    }
  },
  components: {
    PersonalInformation,
    InputText,
    Password,
    Checkbox,
    Button
  }
}
</script>

<style scoped>

</style>