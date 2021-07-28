import {useField} from "vee-validate";
import * as yup from "yup";
import {ref} from "vue";

// import {useStore} from 'vuex'

export function useConfirmationCodeForm() {

  const confirmationCode = ref(false)
  // const store = useStore()
  const {
    value: confirmationCodeValue,
    errorMessage: codeMessage,
    handleBlur: confirmationCodeBlur
  } = useField('code',
      yup
          .string()
          .trim()
          .required('Поле не может быть пустым')
  )

  const sendCode = () => {
    const userObj = {
      confirmationCode: confirmationCodeValue.value,
      type: 'text',
    }
    // store.dispatch('auth')
    console.log('userObj', userObj)
  }

  return {
    confirmationCode,
    confirmationCodeBlur,
    confirmationCodeValue,
    codeMessage,
    sendCode,
  }
}