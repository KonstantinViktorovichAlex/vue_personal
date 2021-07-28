<template>
  <div class="p-grid">
    <Toast/>
    <div class="p-col">
      <ContactData
              fullName="Пупыркин Пупыр Пупырович"
              email="pupur.mail.ru"
              phone=9111111111
      />
    </div>
    <div class="p-col">
      <RegistrationData
              documentType="Паспорт"
              series=1212
              number=404040
              dateIssue="01.01.2020"
              placeIssue="Отдел УФМС России по Псковской области в г. Великие Луки"
              addressRegistration="Псковская обл., г. Великие Луки, ул. Ботвина 17, корп. 1, кв.99"
      />
    </div>
  </div>
  <div class="p-grid">
    <div class="p-col">
      <CustomMessage
              type="info"
              header="Внимание!"
              text=" Уважаемый абонент, если по каким-то причинам у вас поменялись регистрационные данные, просим сообщить нам об этом через форму обратной связи"
              :button="{
                text:'Обновить данные',
                type: 'info',
            }"
              @click="openModalCreatingNewAppeal"
      />
      <NewAppealModal
              :showToast="showToast"
              :isOpen="isOpen"
              @handleCloseModal="handleCloseModal"
      />
    </div>
  </div>
</template>

<script>

  import {ref} from "vue";
  import {computed} from "vue";
  import {useToast} from "primevue/usetoast";
  import CustomMessage from "../../../../ui/CustomMessage";
  import ContactData from "./ContactData";
  import RegistrationData from "./RegistrationData";
  import NewAppealModal from "./NewAppealModal";
  import Toast from 'primevue/toast';

export default {
  setup() {

    const toast = useToast()
    const isOpen = ref(false)

    const openModalCreatingNewAppeal = () => {
      isOpen.value = true
    };

    const showToast = (type, info, time) => {
      toast.add({severity:`${type}`, summary: `${info}`, life:`${time}`});
    }


    const handleCloseModal = () => {
      isOpen.value = false;

    };

    return {
      openModalCreatingNewAppeal,
      handleCloseModal,
      isOpen: computed(() => isOpen),
      showToast,
    }
  },
  components: {
    CustomMessage,
    RegistrationData,
    ContactData,
    NewAppealModal,
    Toast,
  }
}
</script>

<style scoped>
.danger-info {
  background-color: #7e4444;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
}

.success-info {
  background-color: #3f773f;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
}
</style>