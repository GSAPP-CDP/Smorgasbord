<template>
  <div class="img">
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
        const moduledir = this.$parent.$parent.$data.module.dir;

        var srconly = this.src.split('#')[0]
        var srchash = "";
        if(this.src.split('#')[1]) {
          srchash = "#" + this.src.split("#")[1];
        }
        
        return require(`~/content${moduledir}/${srconly}`) + srchash;
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
