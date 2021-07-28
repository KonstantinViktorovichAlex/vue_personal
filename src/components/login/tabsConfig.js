import LoginForm from "./LoginForm";
import PersonalAccountForm from "./PersonalAccountForm";
import EmailForm from "./EmailForm";
import SocialForm from "./SocialForm";

export const tabsConfig = [
    {
        icon:'pi pi-user',
        name:'Логин',
        component:LoginForm
    },
    {
        icon:'pi pi-file',
        name:'ЛИЦЕВОЙ СЧЕТ',
        component:PersonalAccountForm
    },
    {
        icon:'pi pi-envelope',
        name:'EMAIL',
        component:EmailForm
    },
    {
        icon:'pi pi-facebook',
        name:'СОЦ. СЕТИ',
        component:SocialForm
    },
]