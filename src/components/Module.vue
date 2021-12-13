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

<style>

.post {
  font-size: 0.95em;
  font-weight: regular;
  margin: auto;
  width: 50vw;
  max-width: 700px;
  color: #444;
}
p {
  line-height: 1.6em;
}

blockquote {
  font-size: 0.9em;
  line-height: 1.8em;
  color: #666;

}

a {
  color: #529F98
}

a:visited {
  color: #6D71BF;
}


.title {
  font-weight: bold;
}


img {
  width: 100%;
}

img[src$='#img-left'] { 
  float:left;
  width: 50%;
  padding: 10px;
}

img[src$='#img-right'] { 
  float:right;
  width: 50%;
  padding: 10px;
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
  props: ['slug'],
  async fetch() {
    let self = this;
    const [module] = await this.$content('modules', { deep: true }).where({ slug: self.slug })
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    this.module = module;
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
