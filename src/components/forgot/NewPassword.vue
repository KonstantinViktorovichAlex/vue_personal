<template>
  <div class="p-text-center p-text-bold p-mb-3">
    Придумайте новый пароль для дальнейшей авторизации в личном кабинете
  </div>
  <form class="p-fluid p-mt-3">
    <div class="p-field">
      <span class="p-float-label p-mb-1">
        <Password
            id="new-password"
            v-model="newPasswordValue"
            toggleMask
            :class="{'p-invalid':newPasswordErrorMessage}"
            strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{7,})"
            appendTo="div"
        >
          <template #header>
            <h6>Новый пароль</h6>
          </template>
          <template #footer>
            <Divider/>
              <p class="p-mt-2">Требования к новому паролю</p>
               <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                 <li>Не короче 7 символов</li>
                 <li>Содержит цифры</li>
                 <li>Есть буквы латинского алфавита</li>
                <li>Содержит знаки препинания</li>
               </ul>
          </template>
        </Password>
        <label for="new-password">Введите новый пароль</label>
      </span>
      <small v-if="newPasswordErrorMessage" class="p-error">{{ newPasswordErrorMessage }}</small>
    </div>
    <div class="p-field">
      <span class="p-float-label p-mb-1">
        <Password
            id="confirmation-password"
            v-model="confirmationPasswordValue"
            :feedback="false"
            toggleMask
            :class="{'p-invalid':confirmationPasswordErrorMessage}"
        />
        <label for="confirmation-password">Повторите пароль</label>
      </span>
      <small v-if="confirmationPasswordErrorMessage" class="p-error">{{ confirmationPasswordErrorMessage }}</small>
    </div>
    <div class="p-grid p-jc-center">
      <div class="p-col-3">
        <Button label="Сохранить" @click="sendNewPassword"/>
      </div>
    </div>
  </form>
</template>

<script>
import Password from 'primevue/password';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import {useConfirmationForm} from "../../use/confirmationForm";

export default {
  props:['changeRoute'],
  setup() {

    return {
      ...useConfirmationForm(),
    }
  },
  components: {
    Password,
    Button,
    Divider
  },
}
</script>

<style scoped>

</style>