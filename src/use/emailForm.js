import {useField} from "vee-validate";
import * as yup from "yup";
import {ref} from "vue";
import {useStore} from 'vuex'

export function useEmailForm() {

    const emailRemember = ref(false)
    const store = useStore()
    const {value: emailValue, errorMessage: emailErrorMessage, handleBlur: emailBlur} = useField('email',
        yup
            .string()
            .email('Введите корректный email')
            .trim()
            .required('Поле email не может быть пустым')
    )

    const {value: passwordValue, errorMessage: passwordErrorMessage, handleBlur: passwordBlur} = useField('password',
        yup
            .string()
            .required('Пароль не может быть пустым')
            .min(6, 'Пароль не может быть меньше 6 символов')
    )

    const sendEmail = () => {
        const userObj = {
            login:emailValue.value,
            password:passwordValue.value,
            type: 'email',
            rememberMe: emailRemember.value
        }
        store.dispatch('auth')
        console.log('email', userObj)

    }

    return {
        email: emailValue,
        emailMessage: emailErrorMessage,
        emailBlur,
        passwordValue,
        passwordErrorMessage,
        passwordBlur,
        emailRemember,
        sendEmail
    }
}