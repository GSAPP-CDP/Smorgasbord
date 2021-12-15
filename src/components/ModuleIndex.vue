<template>
  <div class="moduleindex">
    <ul v-for="sequence in sequencedModules">
      {{ sequence.dir }}
      <ul v-for="module in sequence.modules">
        <li :class="[ module.path === $nuxt.$route.path ? 'active' : '']" >
          - <NuxtLink :to="module.path">{{module.title}}</NuxtLink>
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
      modules: [],
      sequencedModules: {},
    };
  },
  async fetch() {
    var modules = await this.$content('modules', { deep: true }).sortBy('moduleid') //TODO sort by other metric
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })


    var sequencedModules = {};
    modules.forEach(m => {
    	if (!sequencedModules.hasOwnProperty(m.dir)) {
        sequencedModules[m.dir] = {};
        sequencedModules[m.dir].dir = m.dir;
        sequencedModules[m.dir].modules = [];
      } 
      sequencedModules[m.dir].modules.push(m);
    });


    this.sequencedModules = sequencedModules;
    this.modules = modules;
  },
}
</script>
