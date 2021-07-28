<template>
  <Avatar
          class="avatar"
          size="large"
          shape="circle"
          :image="avatar"
          @click="toggle"/>
  <Menu id="overlay_menu"
        ref="menu"
        :model="items"
        :popup="true">
  </Menu>
</template>

<script>
import {ref} from "vue";
import {itemMenu} from "./userMenuItems";
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';

export default {
  setup() {
    const name = 'VM';
    const avatar = ref(JSON.parse(localStorage.getItem('user')).avatar)
    const menu = ref();
    const toggle = (event) => {
      menu.value.toggle(event);
    };

    return {
      ...itemMenu(),
      name,
      menu,
      toggle,
      avatar
    }
  },
  components: {
    Avatar,
    Menu
  }
}
</script>

<style scoped>
.avatar {
  cursor: pointer;
}

.title-menu {
  margin-bottom: 0;
}
</style>