<template>
  <div class="p-grid">
    <div class="p-col-3">
      <div class="linked-card p-p-4">
        <div class="p-grid">
          <div class="p-col-12">
            <span style="font-size: 1.2rem">cloudcash</span>
            <br/>
            <span style="font-size: 0.61rem; color: silver">PREMIUM ACCOUNT</span>
          </div>
          <div class="p-col-12 p-my-2" style="font-size: 1.5rem; letter-spacing: 0.3rem;">
            5789 **** **** 2847
          </div>
          <div class="p-col-4 p-py-0">Card holder</div>
          <div class="p-col-8 p-py-0">Expire date</div>
          <div class="p-col-4 p-py-0">Mike Smith</div>
          <div class="p-col-8 p-py-0">06/21</div>
        </div>
      </div>
    </div>
    <div class="p-col-9">
      <div class="p-field p-grid">
        <label for="ap-status" class="p-col-fixed">Статус автоплатежа</label>
        <div class="p-col">
          <Tag id="ap-status" severity="success" value="Включен"></Tag>
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="ap-data" class="p-col-fixed">Дата автоматического платежа</label>
        <div class="p-col">
          <Calendar id="ap-data" v-model="apDate" :showIcon="true"/>
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="ap-sum" class="p-col-fixed">Сумма автоплатежа (руб.)</label>
        <div class="p-col">
          <InputNumber id="ap-sum" v-model="apSum" />
        </div>
      </div>
      <Button label="Редактировать" class="p-button-outlined p-button-info" icon="pi pi-pencil" />
    </div>
   <div class="p-grid p-mt-2">
     <div class="p-col">
       <Button class="p-ml-2" label="Добавить карту"/>
     </div>
   </div>
  </div>
</template>

<script>
import {ref} from "vue";
import Button from "primevue/button";
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import Tag from 'primevue/tag';

export default {
  name: "LinkedCard",

  setup() {
    const apDate = ref('20.07.2021');
    const apSum = ref(990);

    return {
      apDate,
      apSum
    }
  },

  components: {
    Button,
    Calendar,
    InputNumber,
    Tag
  }
}
</script>

<style scoped>
img {
  width: 100%;
}

label {
  width: 200px;
}

.linked-card {
  background: #197bbd;
  background: -moz-linear-gradient(top,  #197bbd 0%, #3391d0 100%);
  background: -webkit-linear-gradient(top,  #197bbd 0%,#3391d0 100%);
  background: linear-gradient(to bottom,  #197bbd 0%,#3391d0 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#197bbd', endColorstr='#3391d0',GradientType=0 );
  border-radius: 26px;
  width: 100%;
  height: 100%;
}
</style>