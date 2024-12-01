<template>
  <div
    class="w-fit p-[10px] m-[10px] rounded-[10px] max-w-[60%] overflow-auto"
    :class="{
      'b b-solid b-[#b288d6]': role == 'assistant',
      'b b-solid b-[#7075df] self-end': role == 'user',
    }"
  >
    <div v-html="message"></div>
  </div>
</template>

<script setup lang="ts">
const role = defineModel("role");
const message = defineModel("message");
</script>

<style scoped lang="scss"></style>
