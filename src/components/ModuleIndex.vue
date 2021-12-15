<template>
  <div class="moduleindex">
    <ul v-for="sequence in sequencedModules">
      {{ sequence.dir }}
      <ul v-for="module in sequence.modules">
        <li :class="[ module.path === $nuxt.$route.path ? 'active' : '']" >
          <NuxtLink :to="module.path">- {{ moduleTitle(module) }}</NuxtLink>
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
  methods: {
    moduleTitle(module) {
      if(module.title !== "") { 
        return module.title;
      } else {
        return "index";
      }
    },
  },
  async fetch() {
    var modules = await this.$content('modules', { deep: true }).sortBy('moduleid') //TODO sort by other metric
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })


    var sequencedModules = {};
    modules.forEach(m => {
      let seqsplit = m.dir.split('/')
      let seqname = seqsplit[seqsplit.length - 1]
    	if (!sequencedModules.hasOwnProperty(seqname)) {
        sequencedModules[seqname] = {};
        sequencedModules[seqname].dir = seqname;
        sequencedModules[seqname].modules = [];
      } 
      sequencedModules[seqname].modules.push(m);
    });


    this.sequencedModules = sequencedModules;
    this.modules = modules;
  },
}
</script>
