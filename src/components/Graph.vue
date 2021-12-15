<template>
  <div class="graph">
    {{ links }} 
  </div>
</template>
<style scoped>
.graph {
  overflow: auto;
  height: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      modules: [],
      sequencedModules: {},
      links: [],
    };
  },
  props: {
  },
  computed: {
  },
  async fetch() {
    var modules = await this.$content('modules', { deep: true }).sortBy('moduleid') //TODO sort by other metric
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })


    var links = [];
    var sequencedModules = {};
    modules.forEach(m => {
    	if (!sequencedModules.hasOwnProperty(m.dir)) {
        sequencedModules[m.dir] = {};
        sequencedModules[m.dir].dir = m.dir;
        sequencedModules[m.dir].modules = [];

      } 
      sequencedModules[m.dir].modules.push(m);
      console.log(m.uniqueLinks);
      m.uniqueLinks.forEach(ul => {
        links.push(m.title + "---" + ul);
      });
    });
    this.links = links;


    this.sequencedModules = sequencedModules;
    this.modules = modules;
  },
}
</script>


