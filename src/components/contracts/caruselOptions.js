import {ref} from 'vue';

export const contractCarouselOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '600px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1
    }
]

export const caruselOptions = () => {

    const items = ref([
        {
            items: [
                {
                    label: 'Обещанный платеж',
                    icon: 'pi pi-credit-card',
                },
                {
                    label: 'История платежей',
                    icon: 'pi pi-book',
                },
                {
                    label: 'Автоплатеж',
                    icon: 'pi pi-check-circle',
                },
                {
                    label: 'Отказ от бумажной квитанции',
                    icon: 'pi pi-times-circle',
                },
            ]
        },
    ]);
    const menu = ref(null);
    const toggle = (event) => {
        menu.value.toggle(event);
    };


    return {
        items,
        menu,
        toggle
    }

}