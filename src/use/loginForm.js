import {useField} from "vee-validate";
import {useForm} from "vee-validate";
import * as yup from "yup";
import {ref} from "vue";
import {useStore} from 'vuex'
import {useRouter} from "vue-router";

export function useLoginForm() {

    const loginRemember = ref(false)
    const store = useStore()
    const router = useRouter()
    const {handleSubmit} = useForm()
    const {value: loginValue, errorMessage: loginErrorMessage, handleBlur: loginBlur} = useField('login',
        yup
            .string()
            .trim()
            .required('Поле логин не может быть пустым')
            .min(3, 'Логин не может быть меньше 3 символов')
    )

    const {value: passwordValue, errorMessage: passwordErrorMessage, handleBlur: passwordBlur} = useField('password',
        yup
            .string()
            .required('Пароль не может быть пустым')
            .min(6, 'Пароль не может быть меньше 6 символов')
    )

    const sendLogin = handleSubmit(async (values) => {
        await store.dispatch('auth/login', {values, loginRemember})
        await router.push('/')
    })

    return {
        login: loginValue,
        loginMessage: loginErrorMessage,
        loginBlur,
        passwordValue,
        passwordErrorMessage,
        passwordBlur,
        loginRemember,
        sendLogin,

    }
}