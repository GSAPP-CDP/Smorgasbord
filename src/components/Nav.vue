<template>
  <div class="nav">
    <Logo />
    <div class="title">List of Modules</div>
    <ModuleIndex />
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
  },
  computed: {
  },
}
</script>


<style scoped>
  .nav {
    color: #4A4A4A;
    padding: 20px 30px;
    font-weight: bold;
  }
  
  a {
    text-decoration: none;
  }

  .title {
    font-size: 2em;
    font-weight: bold;
  }

</style>
