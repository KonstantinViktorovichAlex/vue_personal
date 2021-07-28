import {useField} from "vee-validate";
import * as yup from "yup";
import {ref} from "vue";

export function useEmailValidationForgotEmail() {

  const emailRemember = ref(false)
  const {value: emailValue, errorMessage: emailErrorMessage, handleBlur: emailBlur} = useField('email',
      yup
          .string()
          .email('Введите корректный email')
          .trim()
          .required('Поле email не может быть пустым')
  )

  return {
    email: emailValue,
    emailMessage: emailErrorMessage,
    emailBlur,
    emailRemember
  }
}