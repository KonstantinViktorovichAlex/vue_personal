<template>
  <div class="p-grid p-jc-center p-pt-2">
    <div class="p-col-12">
      <div class="p-grid">
        <div class="p-col-12 p-mt-0">
          <Header/>
        </div>
      </div>
      <Sidebar/>
      <div class="p-grid">
          <div class="p-col-10 p-offset-1 main-content-wrapper">
            <div class="blur">
                <router-view></router-view>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/dashboard/header/Header";
import Sidebar from '../components/sidebar/Sidebar'
export default {
  components: {
    Header,
    Sidebar,
  }
}
</script>

<style scoped>
.main-content-wrapper {
  position: relative;
  height: 100vh;
  padding: 0;
  margin-top: -7px;
  border-radius: 5px;
}
.blur {
  position: absolute;
  width: 100%;
}

</style>