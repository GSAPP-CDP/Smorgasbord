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
    },
  },
  computed: {
  },
  methods: {
    imgSrc() {
      
      // this is so gross..... but the only way to do it

      const moduledir = this.$parent.$parent.$data.module.dir;

      try {
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
