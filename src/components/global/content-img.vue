<template>
  <div>
    <img :src="imgSrc()" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: 'ContentImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  computed: {
    thisDir() {
      return this.$route.params.pathMatch.split("/")[0];
    }
  },
  methods: {
    imgSrc() {
      try {
        var srconly = this.src.split('#')[0]
        var srchash = "";
        if(this.src.split('#')[1]) {
          srchash = "#" + this.src.split("#")[1];
        }
        
        return require(`~/content/modules/${this.thisDir}/${srconly}`) + srchash;
      } catch (error) {
        return null
      }
    }

  }
}
</script>
