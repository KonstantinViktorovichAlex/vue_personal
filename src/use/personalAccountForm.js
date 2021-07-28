import {useField} from "vee-validate";
import * as yup from "yup";
import {ref} from "vue";
import {useStore} from "vuex";

export function usePersonalAccountForm() {

    const accountRemember = ref(false)
    const store = useStore()
    const {value: accountValue, errorMessage: accountErrorMessage, handleBlur: accountBlur} = useField('account',
        yup
            .string()
            .required('Лицевой счет не может быть пустым')
            .min(6, 'Лицевой счет не может быть меньше 6 символов')
    )

    const {value: passwordValue, errorMessage: passwordErrorMessage, handleBlur: passwordBlur} = useField('password',
        yup
            .string()
            .required('Пароль не может быть пустым')
            .min(6, 'Пароль не может быть меньше 6 символов')
    )

    const sendAccount = () => {
        const userObj = {
            login:accountValue.value,
            password:passwordValue.value,
            type: 'account',
            rememberMe: accountRemember.value
        }
        store.dispatch('auth')
        console.log('account', userObj)

    }

    return {
        account: accountValue,
        accountMessage: accountErrorMessage,
        accountBlur,
        passwordValue,
        passwordErrorMessage,
        passwordBlur,
        accountRemember,
        sendAccount,
    }
}