<template>
  <div>
    <Module :path="path" />
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
      document: null 
    };
  },
  computed: {
    path() {
      return "/modules/" + this.$route.params.sequence + "/" + this.$route.params.slug;
    }
  },
  async fetch() {
    let self = this;
    console.log(this.path);

    const document = await this.$content('modules', { deep: true }).where({ path: self.path }).fetch()
    this.document = document;
  }

}
</script>

