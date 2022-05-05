<template>
  <div>
  </div>
</template>

<style scoped>

div {
  font-family: Lato;
  color: black;
}

</style>

<script>

export default {
  data() {
    return {
      modules: [],
    };
  },
  layout: 'module',
  middleware: 'redirect_front_page',
}
</script>
