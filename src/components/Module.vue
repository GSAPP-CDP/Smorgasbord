<template>
  <div class="post">
    <div class="postheader">
      <div class="posttitle"><span class="val">{{ module.title }}</span></div>
      <div class="postauthor">by <span class="val">{{ module.authors }}</span></div>
      <div class="postlastupdated">last updated: <span class="val">{{ moduleDate }} </span></div>
    </div>
    <div class="postbody">
      <nuxt-content :document="module" />
    </div>
    <div class="postfooter">
    </div>

    
    
  </div>

</template>

<style scoped>

.post {
  padding: 110px 30px 100px 10px;
  font-size: 1.0em;
  font-weight: regular;
  color: #444;
  word-wrap: break-word;
  
}

p {
  line-height: 1.7em;
}

blockquote {
  font-size: 0.9em;
  line-height: 1.8em;
  color: #666;

}

.postheader {
  padding-bottom: 10px;
  border-bottom: 1px solid #4CBF8F;
  margin-bottom: 10px;
}

.posttitle {
  font-weight: bold;
  font-size: 3em;
  color: #4CBF8F;
  margin-bottom: 15px;
  word-break: break-word;
}
 


.instruction {
  background-color: #CCC;
  border-radius: 10px;
  padding: 20px 10px;
}

.instruction p:last-child {
  margin-bottom: 0px;
}

/* https://vue-loader.vuejs.org/guide/scoped-css.html#child-component-root-elements */

* >>> img {
  max-width: 100%;
  height: auto; 
}
* >>> img[src$='#img-left'] { 
  max-width: 50%;
  max-height: 400px;
  padding: 10px 15px 10px 0px;
  float: left;
  clear: both;
}

* >>> img[src$='#img-right'] { 
  float: right;
  max-width: 50%;
  max-height: 400px;
  padding: 10px 0px 10px 15px;
  clear: both;
}

* >>> h1, * >>> h2, * >>> h3, * >>> h4, * >>> h4  {
  clear: both;
}

* >>> h3, * >>> h4, * >>> h4  {
  padding-top: 2em;
}

* >>> p {
}


/* image caption */
img + em, div.img + em {
  color: #888;
  margin-bottom: 10px;
  display: inline-block;
}

.val {
  font-weight: bold;
}

</style>

<script>
export default {
  data () {
    return {
      module: {},
    };
  },
  props: ['path'],
  async fetch() {
    let self = this;
    console.log(this.path);

    const [document] = await this.$content('modules', { deep: true }).where({ path: self.path }).fetch()


//    const [module] = await this.$content('modules', { deep: true }).where({ slug: self.slug })
//      .fetch()
/*      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      }) */

    this.module = document;
  },
  computed: {
    moduleDate() {
      try {
        return this.module.date;
      } catch {
        return "";
      }
    },
  },
}

</script>
