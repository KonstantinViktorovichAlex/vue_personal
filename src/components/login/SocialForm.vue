<template>
  <CustomMessage
      type="error"
      header="Внимание!"
      text="Возможность авторизации через социальные сети пока не доступна. Пожалуйста, выберите другой способ входа"
  ></CustomMessage>
</template>

<script>
import CustomMessage from "../ui/CustomMessage";

export default {
  components: {
    CustomMessage
  }
}
</script>