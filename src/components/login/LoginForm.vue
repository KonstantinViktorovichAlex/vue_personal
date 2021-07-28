<template>
  <form class="p-fluid p-mt-3">
    <div class="p-field">
      <span class="p-input-icon-right p-float-label p-mb-1">
        <i class="pi pi-user" v-tooltip.right="'Вспоминай свой логин'"/>
        <InputText
            id="login"
            type="text"
            v-model="login"
            @blur="loginBlur"
            :class="{'p-invalid':loginMessage}"
        />
        <label for="login">Введите логин</label>
      </span>
      <small v-if="loginMessage" class="p-error ">{{ loginMessage }}</small>
    </div>
    <div class="p-field">
      <span class="p-float-label p-mb-1">
        <Password
            id="password"
            v-model="passwordValue"
            :feedback="false"
            toggleMask
            :class="{'p-invalid':passwordErrorMessage}"
        />
        <label for="password">Введите пароль</label>
      </span>
      <small v-if="passwordErrorMessage" class="p-error">{{ passwordErrorMessage }}</small>
    </div>
    <div class="p-grid p-mt-3">
      <div class="p-col-6">
        <div class="p-field-checkbox">
          <Checkbox id="loginRemember" v-model="loginRemember" :binary="true"/>
          <label for="loginRemember">Запомнить меня</label>
        </div>
      </div>
      <div class="p-col-6 p-text-right">
        <router-link :to="{name: 'forgotOptions'}" style="color: #e60017">Забыли пароль?</router-link>
      </div>
    </div>
    <div class="p-grid p-jc-center">
      <div class="p-col-2">
        <Button label="Войти" @click="sendLogin"/>
      </div>
    </div>
  </form>
  <PersonalInformation/>
</template>

<script>
import {useLoginForm} from "../../use/loginForm";
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';
import PersonalInformation from "./PersonalInformation";

export default {

  setup() {

    return {
      ...useLoginForm(),
    }
  },
  components: {
    PersonalInformation,
    InputText,
    Password,
    Button,
    Checkbox,
  },
}
</script>

<style scoped>
.error {
  color: red
}
</style>