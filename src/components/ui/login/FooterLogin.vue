<template>
  <div class="p-col-12 p-grid p-jc-center footer">
    <div class="p-col-4 phone-footer">
      <p>Служба круглосуточной поддержки клиентов: 8-800-222-96-96</p>
      <p>Отдел по работе с абонентами: (81153) 6-90-00</p>
    </div>
    <div class="p-col-4 copyright-footer">
      <p>Все права защищены</p>
      <p>Группа компаний МАРТ &copy; 2021</p>
    </div>
    <div class="p-col-4 p-text-center">
      <ul class="social-list">
        <li><a href="#" class="vk"><i class="fab fa-vk social-icon"></i></a></li>
        <li><a href="#" class="odnoklassniki"><i class="fab fa-odnoklassniki social-icon"></i></a></li>
        <li><a href="#" class="instagram"><i class="fab fa-instagram social-icon"></i></a></li>
        <li><a href="#" class="facebook"><i class="fab fa-facebook-f social-icon"></i></a></li>
      </ul>
    </div>
  </div>

</template>

<script>
import '@fortawesome/fontawesome-free/js/all.js';

export default {}
</script>

<style scoped>
.footer {
  color: white;
  margin: 0;
  position: fixed;
  height: 70px !important;
  bottom: 0;
  background-color: #1f2d40;
}

.phone-footer > p {
  margin-left: 65px;
  margin-bottom: 0;
}

.copyright-footer {
  text-align: center;
}

.copyright-footer > p {
  margin-bottom: 0;
}

ul {
  position: absolute;
  margin-top: 4px;
}

ul li {
  list-style: none;
  float: left;
  margin-right: 7px;
}

ul li a {
  display: block;
  position: relative;
  text-align: center;
  color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  line-height: 38px;
  transition: .5s;
  border: 2px solid #a8a9ab;
}

ul li a.vk:hover {
  color: #6287ae;
  box-shadow: 0 0 5px #6287ae;
}

ul li a.odnoklassniki:hover {
  color: #ed812b;
  box-shadow: 0 0 5px #ed812b;
}

ul li a.instagram:hover {
  color: #8359ee;
  box-shadow: 0 0 5px #8359ee;
}

ul li a.facebook:hover {
  color: #3f67bc;
  box-shadow: 0 0 5px #3f67bc;
}

.social-icon {
  font-size: 1.6em;
}

.social-list {
  display: inline;
}
</style>