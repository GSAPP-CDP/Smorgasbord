<template>
  <img :src="imgSrc()" :alt="alt" />
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
    thisPath() {
      return this.$route.params.pathMatch;
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
        
        return require(`~/content/modules/${this.thisPath}${srconly}`) + srchash;
      } catch (error) {
        return null
      }
    }

  }
}
</script>
