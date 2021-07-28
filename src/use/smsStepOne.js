import {useField} from "vee-validate";
import * as yup from "yup";


export function useSmsStepOne() {

    const {value: loginValue, errorMessage: loginErrorMessage, handleBlur: loginBlur} = useField('login',
        yup
            .string()
            .trim()
            .required('Поле не может быть пустым')
    )

    return {
        login: loginValue,
        loginErrorMessage,
        loginBlur,
    }

}