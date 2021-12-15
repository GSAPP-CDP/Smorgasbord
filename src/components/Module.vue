<template>
  <div class="post">
    <div class="header">
    </div>
    <div class="body">
      <nuxt-content :document="module" />
    </div>
    <div class="footer">
      {{ moduleDate }} 
    </div>

    
    
  </div>

</template>

<style scoped>

.post {
  padding: 100px 30px 100px 10px;
  font-size: 0.95em;
  font-weight: regular;
  color: #444;
  word-wrap: break-word;
  
}
p {
  line-height: 1.6em;
}

blockquote {
  font-size: 0.9em;
  line-height: 1.8em;
  color: #666;

}


.title {
  font-weight: bold;
}



.instruction {
  background-color: #CCC;
  border-radius: 10px;
  padding: 20px 10px;
}

.instruction p:last-child {
  margin-bottom: 0px;
}

/* image caption */
img + em, div.img + em {
  color: #888;
  margin-bottom: 10px;
  display: inline-block;
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
