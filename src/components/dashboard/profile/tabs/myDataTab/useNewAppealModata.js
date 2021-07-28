import {useField} from "vee-validate";
import {useForm} from "vee-validate";
import * as yup from "yup";
import {ref} from "vue";
import postNewAppealForm from "../../../../../api/newAppealForm/postNewAppealForm";


export function useNewAppealModal(value, showToast) {

    const {handleSubmit} = useForm()
    const displayModal = ref(value);

    const {value: selectedTheme, errorMessage: errorSelectedTheme, handleBlur: blurSelectedTheme} = useField('appealTheme',
        yup
            .string()
            .trim()
            .required()
    )

    const {value: firstName, errorMessage: errorFirstName, handleBlur: blurFirstName} = useField('firstName',
        yup
            .string()
            .trim()
            .required('Поле не может быть пустым')
    )
    const {value: lastName, errorMessage: errorLastName, handleBlur: blurLastName} = useField('lastname',
        yup
            .string()
            .trim()
            .required('Поле не может быть пустым')
    )
    const {value: patronymic, errorMessage: errorPatronymic, handleBlur: blurPatronymic} = useField('patronymic',
        yup
            .string()
            .trim()
            .required('Поле не может быть пустым')
    )
    const {value: dateOfBirth, errorMessage: errorDateOfBirth, handleBlur: blurDateOfBirth} = useField('DateOfBirth',
        yup
            .string()
            .required('Поле не может быть пустым')
    )
    const {value: passportSeries, errorMessage: errorPassportSeries, handleBlur: blurPassportSeries} = useField('passportSeries',
        yup
            .string()
            .min(4, 'Серия паспорта не может быть короче 4')
            .max(4, 'Номер паспорта не может быть длиннее 4')
            .required('Поле не может быть пустым')
    )
    const {value: passportID, errorMessage: errorPassportID, handleBlur: blurPassportID} = useField('passportID',
        yup
            .string()
            .min(6, 'Номер паспорта не может быть короче 6')
            .max(6, 'Номер паспорта не может быть длиннее 6')
            .required('Поле не может быть пустым')
    )
    const {value: dateOfIssue, errorMessage: errorDateOfIssue, handleBlur: blurDateOfIssue} = useField('dateOfIssue',
        yup
            .string()
            .required('Поле не может быть пустым')
    )
    const {value: issuedBy, errorMessage: errorIssuedBy, handleBlur: blurIssuedBy} = useField('issuedBy',
        yup
            .string()
            .trim()
            .required('Поле не может быть пустым')
    )
    const {value: address, errorMessage: errorAddress, handleBlur: blurAddress} = useField('address',
        yup
            .string()
            .trim()
            .required('Поле не может быть пустым')
    )
    const {value: email, errorMessage: errorEmail, handleBlur: blurEmail} = useField('email',
        yup
            .string()
            .email('Введите корректный email')
            .trim()
            .required('Поле не может быть пустым')
    )
    const {value: phone, errorMessage: errorPhone, handleBlur: blurPhone} = useField('phone',
        yup
            .string()
            .trim()
            .min(10, 'Введиде корректынй телефон, (911-366-66-66)')
            .required('Поле не может быть пустым')
    )
    const {value: checkApply, errorMessage: errorCheckApply} = useField('binary',
        yup
            .boolean()
            .required()
    )

    const onUpload = () => {
        console.log('good')
    }

    const sendAppeal = handleSubmit(async (values) => {
        await postNewAppealForm(values)
            .then((response) => {
                if (response.request.readyState === 4) {
                    showToast('success', 'Загрузка прошла успешно', 5000)
                    displayModal.value = false
                }
            }).catch((err) => {
                console.log(err)
                showToast('error', 'Произошла ошибка', 5000)
            })
    })

    return {
        selectedTheme,
        errorSelectedTheme,
        blurSelectedTheme,
        firstName,
        errorFirstName,
        blurFirstName,
        lastName,
        errorLastName,
        blurLastName,
        patronymic,
        errorPatronymic,
        blurPatronymic,
        dateOfBirth,
        errorDateOfBirth,
        blurDateOfBirth,
        passportSeries,
        errorPassportSeries,
        blurPassportSeries,
        passportID,
        errorPassportID,
        blurPassportID,
        dateOfIssue,
        errorDateOfIssue,
        blurDateOfIssue,
        issuedBy,
        errorIssuedBy,
        blurIssuedBy,
        address,
        errorAddress,
        blurAddress,
        email,
        errorEmail,
        blurEmail,
        phone,
        errorPhone,
        blurPhone,
        checkApply,
        errorCheckApply,
        sendAppeal,
        displayModal,
        onUpload,
    }
}