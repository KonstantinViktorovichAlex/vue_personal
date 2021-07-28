<template>
        <Dialog modal header="Новое обращение" v-model:visible="displayModal" :style="{width: '40vw'}" >

            <form>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label>Выберите тему</label>
                        <p class="p-m-0">
                            <Dropdown
                                    v-model="selectedTheme"
                                    :options="themes"
                                    optionLabel="name"
                                    optionValue="code"
                                    id="appealTheme"
                                    placeholder="Выберите тему обращения"
                                    @blur="blurSelectedTheme"
                                    :class="{'p-invalid': errorSelectedTheme }"
                            />
                        </p>
                    </div>
                </div>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="firstname">Ваше имя</label>
                        <InputText
                                v-model="firstName"
                                id="firstname"
                                type="text"
                                @blur="blurFirstName"
                                :class="{'p-invalid': errorFirstName }"
                        />
                        <small v-if="errorFirstName" class="p-error ">{{ errorFirstName }}</small>
                    </div>
                </div>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="lastname">Ваша фамилия</label>
                        <InputText
                                v-model="lastName"
                                id="lastname"
                                type="text"
                                @blur="blurLastName"
                                :class="{'p-invalid': errorLastName }"
                        />
                        <small v-if="errorLastName" class="p-error ">{{ errorLastName }}</small>
                    </div>
                </div>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="patronymic">Ваше отчество</label>
                        <InputText
                                v-model="patronymic"
                                id="patronymic"
                                type="text"
                                @blur="blurPatronymic"
                                :class="{'p-invalid': errorPatronymic }"
                        />
                        <small v-if="errorPatronymic" class="p-error ">{{ errorPatronymic }}</small>
                    </div>
                    <div class="p-field p-col">
                        <label for="DateOfBirth">Дата рождения</label>
                        <Calendar id="DateOfBirth"
                                  v-model="dateOfBirth"
                                  :class="{'p-invalid': errorDateOfBirth }"
                                  :showIcon="true"
                                  @blur="blurDateOfBirth"
                        />
                        <small v-if="errorDateOfBirth" class="p-error ">{{ errorDateOfBirth }}</small>
                    </div>
                </div>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="passportSeries">Серия паспорта</label>
                        <InputText
                                v-model="passportSeries"
                                id="passportSeries"
                                type="number"
                                :class="{'p-invalid': errorPassportSeries }"
                                @blur="blurPassportSeries"
                        />
                        <small v-if="errorPassportSeries" class="p-error ">{{ errorPassportSeries }}</small>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="passportID">Номер паспорта</label>
                        <InputText
                                v-model="passportID"
                                id="passportID"
                                type="text"
                                :class="{'p-invalid': errorPassportID }"
                                @blur="blurPassportID"
                        />
                        <small v-if="errorPassportID" class="p-error ">{{ errorPassportID }}</small>
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="dateOfIssue">Дата выдачи</label>
                        <Calendar
                                id="dateOfIssue"
                                v-model="dateOfIssue"
                                :showIcon="true"
                                :class="{'p-invalid': errorDateOfIssue }"
                                @blur="blurDateOfIssue"
                        />
                        <small v-if="errorDateOfIssue" class="p-error ">{{ errorDateOfIssue }}</small>
                    </div>
                    <div class="p-field p-col-12">
                        <label for="issuedBy">Кем выдан</label>
                        <Textarea
                                v-model="issuedBy"
                                id="issuedBy"
                                rows="2"
                                :class="{'p-invalid': errorIssuedBy }"
                                @blur="blurIssuedBy"
                        />
                        <small v-if="errorIssuedBy" class="p-error ">{{ errorIssuedBy }}</small>
                    </div>
                    <div class="p-field p-col-12">
                        <label for="address">Адрес регистрации</label>
                        <Textarea
                                v-model="address"
                                id="address"
                                rows="2"
                                :class="{'p-invalid': errorAddress }"
                                @blur="blurAddress"
                        />
                        <small v-if="errorAddress" class="p-error ">{{ errorAddress }}</small>
                    </div>
                    <p class="danger-info">Внимание! Если адрес электронной почты и/или телефон будут указаны неверно,
                        специалисты Службы поддержки не смогут связаться с вами в случае необходимости.</p>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="email">Контактный email</label>
                        <InputText
                                v-model="email"
                                id="email"
                                type="email"
                                :class="{'p-invalid': errorEmail }"
                                @blur="blurEmail"
                        />
                        <small v-if="errorEmail" class="p-error ">{{ errorEmail }}</small>
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="phone">Контактный телефон</label>
                        <InputText
                                v-model="phone"
                                id="phone"
                                type="text"
                                :class="{'p-invalid': errorPhone }"
                                @blur="blurPhone"
                        />
                        <small v-if="errorPhone" class="p-error ">{{ errorPhone }}</small>
                    </div>
                    <p class="success-info">Прикрепите скан или фотографию 2й и 3й страницы паспорта, а также страницу с
                        текущей регистрацией</p>
                    <div class="p-field p-col-12">
                        <FileUpload class="upload-appeal-modal" name="demo[]" url="./upload.php" @upload="onUpload" :multiple="true" accept="image/*"
                                    :maxFileSize="1000000">
                            <template #empty>
                                <p>Перетащите файлы для загрузки</p>
                            </template>
                        </FileUpload>
                    </div>
                    <div class="p-field-checkbox p-col-12">
                        <Checkbox
                                id="binary"
                                v-model="checkApply"
                                :binary="true"
                        />
                        <label for="binary">Принимаю согласие в рамках политики компании в отношении обработки персональных
                            данных</label>
                    </div>
                </div>
            </form>
            <template #footer>
                <Button
                        label="Отправить"
                        icon="pi pi-check"
                        @click="sendAppeal"
                />
            </template>
        </Dialog>
</template>
<script>
    import {ref} from "vue";
    import {useNewAppealModal} from "./useNewAppealModata";
    import {themesOfAppeal} from './themesOfAppeal'
    import useCalendarDate from './useCalendarDate'
    import Dropdown from 'primevue/dropdown'
    import InputText from 'primevue/inputtext'
    import Textarea from 'primevue/textarea'
    import FileUpload from 'primevue/fileupload'
    import Checkbox from 'primevue/checkbox'
    import Calendar from 'primevue/calendar'
    import Button from 'primevue/button'
    import Dialog from 'primevue/dialog'


    export default {
        props:{
            isOpen:{
                type:Object,
            },
            showToast: {
                type: Function,
            }
        },

        setup(props) {
            const themes = ref(themesOfAppeal);

            return{
                themes,
                ...useNewAppealModal(props.isOpen, props.showToast),
                ...useCalendarDate(),
            }
        },
        components:{
            Dialog,
            Dropdown,
            InputText,
            Textarea,
            FileUpload,
            Checkbox,
            Calendar,
            Button,
        },
    }
</script>

<style scoped>

</style>