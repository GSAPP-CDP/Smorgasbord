<template>
  <Module :path="path" />

</template>

<style>

</style>

<script>
export default {
  data () {
    return {
      path: "",
    };
  },
  async asyncData({ $content, app, params }) {
    const slug = params.slug;

    const path = `/modules/${params.pathMatch || 'index'}`
//    const [document] = await $content({ deep: true }).where({ path }).fetch()
    console.log(path);
    /*
    if (!document) {
      return error({ statusCode: 404, message: 'Page not found' })
    } */

    return { path };

    console.log(params);
//    return { slug }
  }
}

</script>

