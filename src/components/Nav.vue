<template>
  <div class="nav">
    <!--<div class="title">List of Modules</div>-->
    <ModuleIndex :index="index" />
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: ['index'],
  computed: {
  },
}
</script>


<style scoped>
  .nav {
    color: #4A4A4A;
    font-weight: bold;
    font-size: 0.85em;
  }
  
  a {
    text-decoration: none;
  }

  .title {
    font-size: 2em;
    font-weight: bold;
  }

</style>
