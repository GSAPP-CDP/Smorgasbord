<template>
  <div>
    <ul v-for="module in modules">
      <li>
        <NuxtLink :to="'modules/' + module.slug">{{module.title}}</NuxtLink>
        Moduleid: {{ module.moduleid }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

div {
  font-family: Lato;
  color: black;
}

</style>

<script>

export default {
  data() {
    return {
      modules: [],
    };
  },
  async fetch() {
    var modules = await this.$content('modules', { deep: true }).sortBy('moduleid')
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    this.modules = modules;
  },
}
</script>
