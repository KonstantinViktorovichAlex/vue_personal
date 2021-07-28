<template>
  <div class="p-mb-5 p-p-3 p-grid">
    <div class="p-col">
      <div class="p-grid-column">
        <div class="p-col">
          <Greetings username="Артем"/>
        </div>
        <div class="p-col">
          <CustomMessage
                  type="error"
                  header="Внимание!"
                  text=" До отключения услуг связи осталось 4 дня!"
                  :button="{
                text:'Пополнить баланс',
                type: 'danger'
            }"
                  closable
          />
        </div>
        <div class="p-col">
          <CustomMessage
                  type="success"
                  header="Добро пожаловать в обновленный личный кабинет!"
                  text="Совсем скоро мы добавим в обновленный личный кабинет
            еще больше нового функционала. А пока предлагаем познакомиться
            с уже имеющимися разделами кабинета и их возможностями."
                  :button="{
                text:'Познакомиться',
                type: 'success'
            }"
                  closable
          />
        </div>
        <div class="p-col">
          <CustomMessage
                  type="warn"
                  header="Настройка Автоплатежа"
                  text="Подключите Автоплатеж и баланс вашего лицевого счета
             будет пополнятся автоматически каждый месяц!"
                  :button="{
                text:'Привязать карту',
                type: 'warning'
            }"
                  closable
          />
        </div>
      </div>
    </div>
  </div>
  <div class="p-p-3 p-grid">
    <div class="p-col">
      <div class="p-grid">
        <WidgetsPanel/>
      </div>
    </div>
  </div>
  <div class="p-p-3 p-grid">
    <div class="p-col">
      <div class="p-grid">
        <Contracts/>
      </div>
    </div>
  </div>
  <div class="p-p-3 p-grid">
    <div class="p-col">
      <div class="p-grid">
        <Offers/>
      </div>
    </div>
  </div>

</template>

<script>
import Greetings from "../components/dashboard/Greeting";
import CustomMessage from "../components/ui/CustomMessage";
import WidgetsPanel from "../components/dashboard/widgets/WidgetsPanel";
import Contracts from "../../src/components/contracts/Contracts";
import Offers from "../components/offers/Offers";

export default {
  components: {
    Greetings,
    CustomMessage,
    Contracts,
    Offers,
    WidgetsPanel
  }
}
</script>
