<template>
  <div class="text-[60px]">
    {{ dayRef }} {{ hourRef }}:{{ minutesRef }}:{{ secondsRef }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dayRef = ref();
const hourRef = ref();
const minutesRef = ref();
const secondsRef = ref();

const countdownToTime = (targetDate) => {
  const currentDate = new Date();
  const target = new Date(targetDate);

  const timeDifference = target.getTime() - currentDate.getTime();

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const formatTime = (time) => {
  return time.toString().padStart(2, "0");
};

const targetDate = "2025-03-30";

setInterval(() => {
  const time = countdownToTime(targetDate);
  dayRef.value = formatTime(time.days);
  hourRef.value = formatTime(time.hours);
  minutesRef.value = formatTime(time.minutes);
  secondsRef.value = formatTime(time.seconds);
}, 1000);
</script>

<style scoped></style>
