<template>
  <div class="post">

    <Module :slug="slug" />
    
    
  </div>

</template>

<style>

</style>

<script>
export default {
  data () {
    return {
      module: {},
    };
  },
  async asyncData({ params }) {
    const slug = params.slug;
    return { slug }
  }
}
</script>

