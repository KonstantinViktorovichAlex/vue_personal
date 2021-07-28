import {ref} from "vue";

export const menuItems = ref([
    {
        key: '0',
        label: 'Главная',
        icon: 'pi pi-th-large',
        to: '/',
    },
    {
        key: '1',
        label: 'Услуги',
        icon: 'pi pi-book',
        items: [
            {
                key: '1-0',
                label: 'Интернет',
                icon: 'pi pi-globe',
                to: ''
            },
            {
                key: '1-1',
                label: 'Телефония',
                icon: 'pi pi-phone',
                to: ''
            },
            {
                key: '1-2',
                label: 'Видеонаблюдение',
                icon: 'pi pi-video',
                to: ''
            },
            {
                key: '1-3',
                label: 'Антивирус',
                icon: 'pi pi-shield',
                to: ''
            },
            {
                key: '1-4',
                label: 'Вызов мастера',
                icon: 'pi pi-exclamation-triangle',
                to: ''
            }
        ]
    },
    {
        key: '2',
        label: "Помощь",
        icon: 'pi pi-question-circle',
        items: [
            {
                key: '2-0',
                label: 'Техническая поддержка',
                icon: 'pi pi-cog',
                to: ''
            },
            {
                key: '2-1',
                label: 'Часто задаваемые вопросы',
                icon: 'pi pi-comment',
                to: ''
            }
        ]
    },
    {
        key: '3',
        label: 'Финансы',
        icon: 'pi pi-wallet',
        to: ''
    },
    {
        key: '4',
        label: 'Акции',
        icon: 'pi pi-shopping-cart',
        to: ''
    },
    {
        key: '5',
        label: 'Избранное',
        icon: 'pi pi-star-o',
        to: ''
    },
])