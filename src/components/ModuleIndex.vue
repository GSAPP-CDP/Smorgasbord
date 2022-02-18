<template>
  <div class="moduleindex">
    <ul v-for="sequence in contentdata.sequences">
      {{ sequence.slug}}
      <ul v-for="module in sequence.modules">
        <!--<li :class="[ module.path === $nuxt.$route.path ? 'active' : '']" >-->
        <NuxtLink :to="sequence.path + '/' + module.file">- {{module.file }} {{ moduleTitle(module.file) }}</NuxtLink>
        </li>
      </ul>
    </ul>

      <ul v-for="module in modules">
        {{ module }}
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
  computed: {
    contentdata () {
      return this.$store.state.contentdata
    }
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

    /*
    modules.forEach(m => {

      let seqname = m.dir.split('/').at(-1)
      console.log(m.path.split('/'))

    	if (!sequencedModules.hasOwnProperty(seqname)) {
        sequencedModules[seqname] = {};
        sequencedModules[seqname].dir = seqname;
        sequencedModules[seqname].modules = [];
      } 
      sequencedModules[seqname].modules.push(m);
    });

    console.log(modules)


    this.sequencedModules = sequencedModules;*/
    this.modules = modules;
  },
}
</script>
