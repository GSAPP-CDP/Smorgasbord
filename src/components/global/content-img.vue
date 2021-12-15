<template>
  <div class="img">
    {{ src }} 
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
    },
  },
  computed: {
  },
  methods: {
    imgSrc() {
      
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
        var thisdir = thispath.substr(0, thispath.lastIndexOf("/"))

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


img {
  max-width: 100%;
  height: auto; 
}
img[src$='#img-left'] { 
  width: 50%;
  padding: 10px;
}

img[src$='#img-right'] { 
  width: 50%;
  padding: 10px;
}


</style>
