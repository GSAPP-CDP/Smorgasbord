<template>
  <div class="nav">
    <div class="links">
      <div class="navlink"><NuxtLink to="/welcome">Welcome</NuxtLink></div>
      <div class="navlink"><NuxtLink to="/how-to-use-this-site">How To Use This Site</NuxtLink></div>
    </div>
    <ModuleIndex :index="index" />
      <div class="navlink"><NuxtLink to="/credits">Credits</NuxtLink></div>
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

.navlink {
}

.links {
  border-bottom: 2px dotted gray;
  margin-bottom: 20px;
  padding: 0px 5px 20px 5px;
}

  .nav {
    color: #4A4A4A;
    font-weight: bold;
  }
  
  a {
    /* border-bottom: 2px dotted #D82E8A; */
    display: inline-block;
  }

  .title {
    font-size: 2em;
    font-weight: bold;
  }

</style>
