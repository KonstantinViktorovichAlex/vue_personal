import {useField} from "vee-validate";
import * as yup from "yup";
import {ref} from "vue";
// import {useStore} from 'vuex'

export function useConfirmationForm() {

  const confirmationPassword = ref(false)
  // const store = useStore()
  const {
    value: newPasswordValue,
    errorMessage: newPasswordErrorMessage,
    handleBlur: newPasswordBlur
  } = useField('new-password',
      yup
          .string()
          .trim()
          .required('Поле пароль не может быть пустым')
          .min(7, 'Новый пароль не может быть меньше 7 символов')
  )

  const {
    value: confirmationPasswordValue,
    errorMessage: confirmationPasswordErrorMessage,
    handleBlur: confirmationPasswordBlur
  } = useField('confirmation-password',
      yup
          .string()
          .required('Пароль не может быть пустым')
          .min(7, 'Пароль не может быть меньше 7 символов')
  )

  const sendNewPassword = () => {
    const userObj = {
      newPassword: newPasswordValue.value,
      confirmationPassword: confirmationPasswordValue.value,
      type: 'password',
    }
    // store.dispatch('auth')
    console.log('userObj', userObj)

  }

  return {
    confirmationPassword,
    newPasswordErrorMessage,
    newPasswordBlur,
    newPasswordValue,
    confirmationPasswordValue,
    confirmationPasswordErrorMessage,
    confirmationPasswordBlur,
    sendNewPassword,
  }
}