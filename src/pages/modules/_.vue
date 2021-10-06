<template>
  <div class="post">

    <div class="header">
      <div class="title">{{ content.title }}</div>
    </div>
    <div class="body">
      <nuxt-content :document="content" />
    </div>
    <div class="footer">
      {{ content.date }}
    </div>
    hllo

    {{ moduleid}}

    <NuxtLink to="/archives">Archives</NuxtLink>
    
    
  </div>

</template>

<style>

.post {
  font-family: "Helvetica Neue", Helvetica, Arial, Geneva, sans-serif;
  font-size: 0.9em;
  font-weight: regular;
  margin: auto;
  width: 50vw;
  max-width: 700px;
  color: #444;
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
  data() {
    return {
      articles: null,
      content: [],
    };
  },
  async fetch() {
    console.log(this.moduleid);
    var content = await this.$content('modules', { deep: true }).where({ moduleid: { $eq: this.moduleid } }).fetch();
    if(content.length > 0 && content[0].published == "Yes") {
      this.content = content[0];
    }
  },
  computed: {
    moduleid() {
      return parseInt(this.$route.params.pathMatch.split("/")[0])
    },
    post() {
      //return this.$content.where({ moduleid: { $eq: 488 } });
    }
  }
}
</script>
