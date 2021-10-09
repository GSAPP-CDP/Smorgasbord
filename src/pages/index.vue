<template>
  <div>
    Smorgasbord Index
    <ul v-for="module in modules">
      <li><NuxtLink :to="'modules/' + module.slug">{{module.title}}</NuxtLink></li>
    </ul>
  </div>
</template>

<style scoped>

</style>

<script>

export default {
  data() {
    return {
      modules: [],
    };
  },
  async fetch() {
    var modules = await this.$content('modules', { deep: true })
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    this.modules = modules;
  },
}
</script>
