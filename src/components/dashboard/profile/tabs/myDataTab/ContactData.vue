<template>
  <div class="p-grid">
    <div class="p-col">
      <Fieldset legend="Контактные данные" class="p-mt-3">
        <div class="p-grid">
          <div class="p-col">
            <p>ФИО: {{ fullName }}</p>
          </div>
        </div>
        <Divider></Divider>
        <div class="p-grid">
          <div class="p-col">
            <p>Email: {{ email }}</p>
          </div>
          <div class="p-col-1">
            <Button icon="pi pi-pencil" class="p-button-rounded p-button-outlined" v-tooltip.top="'Редактировать email'"/>
          </div>
        </div>
        <Divider></Divider>
        <div class="p-grid">
          <div class="p-col">
            <p>Мобильный телефон: +7{{ phone }}</p>
          </div>
          <div class="p-col-1">
            <Button icon="pi pi-pencil" class="p-button-rounded p-button-outlined"
                    v-tooltip.top="'Редактировать телефон'"/>
          </div>
        </div>
      </Fieldset>
    </div>
  </div>
</template>

<script>
import Fieldset from 'primevue/fieldset'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

export default {
  props: {
    fullName: String,
    email: String,
    phone: String,
  },
  components: {
    Fieldset,
    Button,
    Divider
  }
}
</script>