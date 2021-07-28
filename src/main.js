import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import BadgeDirective from "primevue/badgedirective";
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/vela-orange/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import './index.css'
import Toast from 'primevue/toast';

createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue, {
        ripple: true,
        locale: {
            weak: 'Слабый',
            medium: 'Средний',
            strong: 'Надежный',
            passwordPrompt: 'Введите пароль',
            dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            // dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
            monthNames: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
            // monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: 'Сегодня',
            firstDayOfWeek: 0,
            dateFormat: 'dd.mm.yy',
        }
    })
    .use(ToastService)
    .component('Toast', Toast)
    .directive('tooltip', Tooltip)
    .directive('badge', BadgeDirective)
    .mount('#app')
