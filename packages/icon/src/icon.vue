<template>
  <i :class="'me-icon-' + name"></i>
</template>

<script>
export default {
  name: 'MeIcon',

  props: {
    name: String,
  },
};
</script>
