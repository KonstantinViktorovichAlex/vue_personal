<template>
  <div class="p-text-center p-text-bold p-mb-3">На номер телефона, привязанного к вашему аккаунту отправлено SMS с
    кодом. Дождитесь его и введите в поле ниже.
  </div>
  <form class="p-fluid p-formgrid p-mt-3">
    <div class="p-grid">
      <div class="p-field p-col-10">
        <span class="p-float-label">
      <InputText id="login"/>
      <label for="login">Введите код из SMS</label>
      </span>
      </div>
      <div class="p-field p-col-2">
        <router-link :to="{name: 'newPassword'}" class="forgot_back">
          <Button label="ДАЛЕЕ" class="btn_sms"></Button>
        </router-link>
      </div>
    </div>
  </form>
  <div class="p-grid p-jc-center p-mt-2">
    <div class="p-col-5">
      <Button label="ВЫСЛАТЬ КОД ПОВТОРНО" icon="pi pi-replay" iconPos="left"
              class="p-button-text p-button-sm p-text-bold" :class="{ 'p-disabled': isActive }"
              @click="startTimer"/>
    </div>
    <div class="p-col-7">
      <p class="time_sek" :class="{ 'p-d-none': isTimer }">ЧЕРЕЗ {{ second }} СЕК.
        <i class="pi pi-spin pi-spinner" style="fontSize: 1.2rem; margin-left: 8px;"></i>
      </p>
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
import InputText from 'primevue/inputtext';
import Button from "primevue/button";

export default {
  props: ['changeRoute'],

  components: {
    InputText,
    Button
  },
  data() {
    return {
      second: 40,
      isActive: true,
      isTimer: false,
    }
  },
  methods: {
    startTimer() {
      if (this.second > 0) {
        this.isActive = true
        this.isTimer = false
        setTimeout(() => {
          this.second -= 1
          this.startTimer()
        }, 1000)
      } else if (this.second === 0) {
        this.isActive = false
        this.isTimer = true
        this.second = 40
      }
    },
  },
  created() {
    this.startTimer()
  },
}
</script>

<style scoped>
.btn_sms {
  height: 100%;
}

.forgot_back {
  text-decoration: none;
}

.time_sek {
  padding-top: 6px;
}
</style>