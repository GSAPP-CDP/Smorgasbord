<template>
  <div class="post">
    <div class="header">
      <div class="title">{{ page.title }}</div>
    </div>
    <div class="body">
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $content }) {
    const page = await $content(params.slug).fetch()

    return {
      page
    }
  },
  computed: {
  },
  layout: 'module',
}
</script>

<style scoped>

.post {
  padding: 110px 30px 100px 30px;
  max-width: 800px;
  font-size: 1.0em;
  font-weight: regular;
  color: #444;
  word-wrap: break-word;
  
}

p {
  line-height: 1.7em;
}

.header {
  padding-bottom: 10px;
  border-bottom: 1px solid #4CBF8F;
  margin-bottom: 10px;
}

.title {
  font-weight: bold;
  font-size: 3em;
  color: #4CBF8F;
  margin-bottom: 15px;
  word-break: break-word;
}
 


.body {
  font-size: 0.9em;
} 

.title {
  font-weight: bold;
  font-size: 2em;
}

.
ul {
  margin: 0px;
}

</style>

