import {ref} from "vue";

export default function useCalendarDate () {
    const minDate = ref(new Date());
    const maxDate = ref(new Date());
    const invalidDates = ref();
    const date = ref();

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;


    minDate.value.setMonth(prevMonth);
    minDate.value.setFullYear(prevYear);
    maxDate.value.setMonth(nextMonth);
    maxDate.value.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    invalidDates.value = [today, invalidDate];

    return {
        date
    }

}