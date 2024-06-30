<template>
  <div class="post" v-if="!loading">
    <div class="postheader">
      <div class="posttitle"><span class="val">{{ module.title }}</span></div>
      <div class="postauthor">by <span class="val">{{ moduleAuthors }}</span></div>
      <div class="postlastupdated" v-if="moduleDate">last updated: <span class="val">{{ moduleDate }} </span></div>
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
  padding: 110px 30px 100px 30px;
  max-width: 800px;
  font-size: 1.0em;
  font-weight: regular;
  color: #444;
  word-wrap: break-word;
}

* >>> p {
  line-height: 1.5em;
}

* >>> li {
  line-height: 1.5em;
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
  width: 100%;
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

* >>> h1, * >>> h2, * >>> h3, * >>> h4  {
  clear: both;
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

* >>> code {
  background-color: #f4f4f4;
  padding: 3px 6px;
  border-radius: 5px;
}

* >>> blockquote {
  border-left: 2px solid #666;
  padding-left: 20px;
  margin-left: 10px;
  color: #666;
}

/* Add some conveniences for laying out images.
  Perhaps work on a more consistent way in the future?
*/
.postbody >>> .row {
  display: flex;
  flex-direction: row;
}
.postbody >>> .row>*,
.postbody >>> .cols-1>* { width: 100%; }
.postbody >>> .cols-2>* { width: 50%; }
.postbody >>> .cols-3>* { width: 33%; }
.postbody >>> .cols-4>* { width: 25%; }

@media (max-width: 900px) {
  /* Break the columns for mobile/tablet.
    Placeholder for when mobile is fixed.
    */
  .postbody >>> .mobile-cols-1 {
    display: flex;
    flex-direction: column;
  }
  .postbody >>> .mobile-cols-1>* {
    width: 100%;
  }
}
</style>

<script>
export default {
  scrollToTop: true,
  data () {
    return {
      module: {},
      loading: true,
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
    moduleAuthors() {
      try {
        return this.module.authors.join(", ");
      } catch {
        return "";
      }
    }
  },
  created() {
   this.$nextTick(function() {
      this.loading = false;
    })
  }
}
</script>
