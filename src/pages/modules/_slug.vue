<template>
  <div class="post">

    <div class="header">
    </div>
    <div class="body">
      <nuxt-content :document="module" />
    </div>
    <div class="footer">
      {{ module.date }}
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


</style>

<script>
export default {
  async asyncData({ $content, app, params, error }) {
    const [module] = await $content({ deep: true }).where({ slug: params.slug }).fetch();

    if (!module) {
      return error({ statusCode: 404, message: 'Module not found' })
    }
    return { module: module };
  },
}
</script>

