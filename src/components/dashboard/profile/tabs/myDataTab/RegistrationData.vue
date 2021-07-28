<template>
  <div>
    <Fieldset legend="Регистрационные данные" class="p-mt-3">
      <div class="p-grid">
        <div class="p-col-2">
          <p>Вид документа</p>
          <p>{{ documentType }}</p>
        </div>
        <div class="p-col-2">
          <p>Серия / Номер</p>
          <p>{{ series }} / {{ number }}</p>
        </div>
        <div class="p-col-2">
          <p>Дата выдачи</p>
          <p>{{ dateIssue }}</p>
        </div>
      </div>
      <Divider></Divider>
      <div class="p-grid">
        <div class="p-col-6">
          <p>Место выдачи</p>
          <p>{{ placeIssue }}</p>
        </div>
      </div>
      <Divider></Divider>
      <div class="p-grid">
        <div class="p-col-6">
          <p>Адрес регистрации</p>
          <p>{{ addressRegistration }}</p>
        </div>
      </div>
    </Fieldset>
  </div>
</template>

<script>
import Fieldset from 'primevue/fieldset'
import Divider from 'primevue/divider'

export default {
  props: {
    documentType: String,
    series: String,
    number: String,
    dateIssue: String,
    placeIssue: String,
    addressRegistration: String
  },
  components: {
    Fieldset,
    Divider
  }
}
</script>

<style scoped>

</style>