<template>
  <div class="logo" :style="cssWidth">
    <a href="/"><img src="~/assets/logo_full.svg" /></a>
<!--    <div class="text">
      <div class="cdp"><a href="/">GSAPP CDP</a> </div>
      <div class="smorgasbord"><a href="/">Smorgasbord</a> </div>
</div> -->
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    width: {
      default: "150px",
      type: String,
    }
  },
  computed: {
    cssWidth() {
      return "width: " + this.width + "; "
    },
  },
}
</script>


<style scoped>
.logo {
}

a {
  text-decoration: none;
}

.cdp {
}
.smorgasbord {
  font-weight: 700;
  font-size: 1.5em;
}


</style>
