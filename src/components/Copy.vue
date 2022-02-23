<template>
  <div class="copy">
    <nuxt-content :document="copydata" />
  </div>

</template>

<style scoped>


p {
  margin-bottom: 15px;
  word-break: break-word;
}
 
</style>

<script>
export default {
  data () {
    return {
      copydata: {},
    };
  },
  props: ['copy'],
  async fetch() {

    try {
      const copydata = await this.$content('copy/' + this.copy, {deep: true}).fetch()
      this.copydata = copydata;
    } catch {
      console.error("Error: copy/" + this.copy + " not found");
    }

  },
  computed: {
  },
}

</script>
