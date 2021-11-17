<template>
  <div class="nav">
    <a href="/">GSAPP SMORGASBORD</a> 
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
    background-color: #333;
    color: white;
    padding: 10px;
    font-weight: bold;
  }
  
  a {
    text-decoration: none;
    color: white !important;
  }
</style>
