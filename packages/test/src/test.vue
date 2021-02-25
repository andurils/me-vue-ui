<template>
  <div class="me-test" :style="{ backgroundColor: bgColor }"></div>
</template>

<script>
export default {
  name: 'MeTest',
  props: {
    bgColor: {
      type: String,
      default: '#ccc',
    },
  },
};
</script>

<style>
.me-test {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: zm-opacity 2s infinite linear;
}
@keyframes zm-opacity {
  0% {
    opacity: 1;
  }
  10%,
  90% {
    opacity: 0.8;
  }
  20%,
  80% {
    opacity: 0.7;
  }
  30%,
  70% {
    opacity: 0.5;
  }
  40%,
  60% {
    opacity: 0.3;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.95;
  }
}
</style>
