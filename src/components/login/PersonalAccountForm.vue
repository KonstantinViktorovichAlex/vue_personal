<template>
  <form class="p-fluid p-mt-3">
    <div class="p-field">
      <span class="p-input-icon-right p-float-label p-mb-1">
        <i class="pi pi-file"
           v-tooltip.right="'Номер лицевого счета указан в квитанции об оплате и договоре. ' +
         'Состоит из 6 символов, начинается с нуля'"
        />
        <InputText
            id="account"
            type="number"
            v-model="account"
            @blur="accountBlur"
            :class="{'p-invalid':accountMessage}"
        />
        <label for="account">Введите номер лицевого счета</label>
      </span>
      <small v-if="accountMessage" class="p-error ">{{ accountMessage }}</small>
    </div>
    <div class="p-field">
      <span class="p-float-label p-mb-1">
        <Password
            id="accountPassword"
            v-model="passwordValue"
            :feedback="false"
            toggleMask
            :class="{'p-invalid':passwordErrorMessage}"
        />
        <label for="accountPassword">Введите пароль</label>
      </span>
      <small v-if="passwordErrorMessage" class="p-error">{{ passwordErrorMessage }}</small>
    </div>
    <div class="p-grid p-mt-3">
      <div class="p-col-6">
        <div class="p-field-checkbox">
          <Checkbox id="accountRemember" v-model="accountRemember" :binary="true"/>
          <label for="accountRemember">Запомнить меня</label>
        </div>
      </div>
      <div class="p-col-6 p-text-right">
        <router-link :to="{name: 'forgotOptions'}" style="color: #e60017">Забыли пароль?</router-link>
      </div>
    </div>
    <div class="p-grid p-jc-center">
      <div class="p-col-2">
        <Button label="Войти" @click="sendAccount"/>
      </div>
    </div>
  </form>
  <PersonalInformation/>
</template>

<script>
import {usePersonalAccountForm} from "../../use/personalAccountForm";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import PersonalInformation from "./PersonalInformation";

export default {

  setup() {

    return {
      ...usePersonalAccountForm(),
    }
  },
  components: {
    PersonalInformation,
    InputText,
    Password,
    Checkbox,
    Button,

  }
}
</script>

<style scoped>

</style>