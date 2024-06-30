<template>
  <div class="img">
    <img :src="imgSrc()" :alt="alt" />
  </div>
</template>

<script>
// An overly simplistic way of checking for valid URLs.
function isValidUrl(string) {
  const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return regex.test(string);
}

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
    },
  },
  computed: {
    thispath() {
      return this.$nuxt.$route.path;
    }
  },
  methods: {
    imgSrc() {
      // Preventing overwriting the image URL if we provide a fully qualified
      // external URL.
      if (isValidUrl(this.src)) {
        return this.src;
      }
      
      // this is so gross..... but the only way to do it

      try {

/*        console.log(this.dir);
        console.log(this.src);
        const moduledir = this.$parent.$parent.$data.module.dir;
        console.log("xo");
        console.log(moduledir);
        console.log("x");
        console.log(this.$nuxt.$route.name);
        console.log("yo"); */

        var thispath = this.$nuxt.$route.path;
        var thisdir = thispath.substr(0, thispath.replace(/\/$/, '').lastIndexOf("/"));

        //console.log("##########")
//        console.log(thisdir);
  

        var srconly = this.src.split('#')[0]
        var srchash = "";
        if(this.src.split('#')[1]) {
          srchash = "#" + this.src.split("#")[1];
        }
        
        return require(`~/content${thisdir}/${srconly}`) + srchash;
      } catch (error) {
        return null;
      }
    }

  }
}
</script>
<style scoped>




</style>
