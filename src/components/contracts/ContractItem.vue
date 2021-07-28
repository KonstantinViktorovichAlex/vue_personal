<template>
  <div class="p-mr-1 p-mt-2 p-mb-2 p-ml-1">
    <Panel class="contract">
      <template #header>
        <div class="header-panel">
          <div class="document">
            <div>
              <h4 :class="slotProps.data.documentIcon + ' icon'"></h4>
            </div>
            <div>
              <h4>{{ slotProps.data.number }}</h4>
            </div>
          </div>
          <div class="address">
            <div>
              <span :class="slotProps.data.addressIcon + ' icon'"></span>
            </div>
            <div>
              {{ slotProps.data.address }}
            </div>
          </div>
        </div>
      </template>
      <template #icons>
        <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
          <span class="pi pi-ellipsis-v"></span>
        </button>
        <Menu id="config_menu" ref="menu" :model="items" :popup="true"/>
      </template>
      <div class="content">
        <h3 class="price">{{ slotProps.data.balance }} руб.</h3>
        <p>{{ slotProps.data.description }}</p>
      </div>
      <Divider/>
      <div class="document-buttons">
        <Button label="Оплатить" class="p-button-sm p-button-primary"/>
        <div>
          <Dialog header="QR-code" v-model:visible="displayQr" :style="{width: '30vw'}">
            <div class="p-text-center">
              <img class="qr-image" src="../../assets/qr/qr-.png" alt="qr">
            </div>
          </Dialog>
          <a href="pdf/testPdf.pdf">
            <Button icon="fas fa-file-pdf" class="p-button-rounded p-button-warning p-button-outlined p-mr-2"/>
          </a>
          <Button @click="openQr" icon="fas fa-qrcode" class="p-button-rounded p-button-warning p-button-outlined"/>
        </div>
      </div>
    </Panel>
  </div>
</template>

<script>
import {ref} from 'vue';
import {caruselOptions} from "./caruselOptions";
import Dialog from 'primevue/dialog';
import Panel from 'primevue/panel';
import Menu from 'primevue/menu';
import Divider from 'primevue/divider';
import Button from 'primevue/button';

export default {
  props: ['slotProps'],

  setup() {
    const displayQr = ref(false);

    const openQr = () => {
      displayQr.value = true;
    };

    return {
      ...caruselOptions(),
      displayQr,
      openQr,
    }
  },

  components: {
    Panel,
    Menu,
    Divider,
    Button,
    Dialog,
  }

}
</script>

<style scoped>
.document {
  display: flex;
  align-items: center;
  margin-top: -25px;
  color: #686dce
}

.address {
  display: flex;
  align-items: center;
  color: #ffffff
}

.icon {
  margin-right: 10px;
}

.document-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content {
  min-height: 105px;
  color: #ffffff
}

.price {
  color: #686dce;
}

.qr-image {
  width: 230px;
}
</style>