<template>
  <div class="moduleindex">
    <ul v-for="sequence in contentdata.sequences">
      {{ sequence.contentdata.title }}
      <ul v-for="module in sequence.modules">
        <!--<li :class="[ module.path === $nuxt.$route.path ? 'active' : '']" >-->
        <NuxtLink :to="module.contentdata.path">- {{ module.contentdata.title }}</NuxtLink>
        </li>
      </ul>
    </ul>

  </div>
</template>

<style scoped>

.active, .active > *  {
  color: #4CBF8F !important; 
  font-weight: bold;
}
.moduleindex {
  color: 555;
  font-family: Lato;
  color: black;
  line-height: 1.5em;

}

a {
  text-decoration: none;
}



ul {
  padding: 0px 0px 0px 10px;
  list-style-type: none;
}

</style>

<script>

export default {
  data() {
    return {
    };
  }, 
  computed: {
    contentdata () {
      return this.$store.state.contentdata
    }
  },
  methods: {
  },
}
</script>
