<template>
  <div class="p-grid p-mt-3">
    <div class="p-col">
      <TabView>
        <TabPanel>
          <template #header>
            <i class="pi pi-user"></i>
            <span>Мои данные</span>
          </template>
          <MyDataTab/>
        </TabPanel>

        <TabPanel>
          <template #header>
            <i class="pi pi-credit-card"></i>
            <span>Привязанные карты</span>
          </template>
          <LinkedCardsTab/>
        </TabPanel>

        <TabPanel>
          <template #header>
            <i class="pi pi-lock"></i>
            <span>Пароли и авторизация</span>
          </template>
          <p>Пароли и авторизация</p>
        </TabPanel>

        <TabPanel>
          <template #header>
            <i class="pi pi-send"></i>
            <span>Соцсети</span>
          </template>
          <p>Соцсети</p>
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script>
import MyDataTab from "../components/dashboard/profile/tabs/myDataTab/MyDataTab";
import LinkedCardsTab from "../components/dashboard/profile/tabs/linkedCardsTab/LinkedCardsTab";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

export default {
  components: {
    MyDataTab,
    LinkedCardsTab,
    TabView,
    TabPanel,
  }
}
</script>

<style scoped>
i.pi {
  margin-right: 0.5rem;
}
</style>