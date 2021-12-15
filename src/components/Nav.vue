<template>
  <div class="nav">
    <a href="/">GSAPP SMORGASBORD</a> 
    <div class="title">Smorgasbord list of modules</div>
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
    padding: 10px;
    font-weight: bold;
    overflow: auto;
    max-width: 33vw;
  }
  
  a {
    text-decoration: none;
  }

  .title {
    font-size: 2em;
  }
</style>
