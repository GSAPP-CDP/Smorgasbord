<template>
  <div class="logo">
      <div class="img"><img src="~/assets/logo.svg" /></div>
    <div class="text">
      <div class="cdp"><a href="/">GSAPP CDP</a> </div>
      <div class="smorgasbord"><a href="/">Smorgasbord</a> </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
  },
  computed: {
  },
}
</script>


<style scoped>
.logo {
  height: 100px;
}

a {
  text-decoration: none;
}

.img img {
  width: 60px;
}

.img {
  float: left;
  padding-right: 10px;
}
.cdp {
}
.smorgasbord {
  font-weight: 700;
  font-size: 1.5em;
}


</style>
