<template>
  <div class="moduleindex" :class="{ indexview: index }">
    <ul v-for="sequence in contentdata.sequences" :class="{ sequence: true, hover: sequence.path == hover }" @mouseover="hover = sequence.path" @mouseleave="hover = false">
      <div class="sequencetitle">{{ sequence.contentdata.title }}</div>
      <div class="sequencemodules">
        <div v-for="module in sequence.modules" :class="[ module.contentdata.path === $nuxt.$route.path ? 'active' : '']" >
          <NuxtLink :to="module.contentdata.path"><span class="bullet" /> {{ module.contentdata.title }}</NuxtLink>
        </div>
      </div>
    </ul>


  </div>
</template>

<style scoped>

.active, .active > *  {
  color: #4CBF8F !important; 
  font-weight: bold;
}
.moduleindex {
  color: 555;
  font-family: Lato;
  color: black;
  line-height: 1.5em;
}

.hover.sequence  {
  color: #0096EA !important;
}

a {
  text-decoration: none;
}

a:hover {
  color: #0096EA !important;
}



ul {
  padding: 0px 0px 0px 10px;
  list-style-type: none;
}

.bullet::before {
  content: "•";
}

.sequencetitle {
  font-weight: bold;
  font-size: 1.15em;
}

.indexview .bullet {
}


.indexview.moduleindex {
  font-size: 1.25em;
}

.indexview .sequence {
  display: flex;
  flex-direction: row;
  border-top: 2px solid #555;
  padding-top: 5px;
  margin-bottom: 5px;
}

.indexview .sequence.hover {
  border-top: 2px solid #0096EA ;
}

.indexview .sequencetitle {
  width: 50%;
  padding-right: 20px;
}
.indexview .sequencemodules {
  width: 50%;
  font-style: italics;
}

.indexview .ul {
  padding-left: 0px;
}

</style>

<script>

export default {
  data() {
    return {
      hover: false,
    };
  }, 
  props: ['index', 'blah'],
  computed: {
    contentdata () {
      return this.$store.state.contentdata
    }
  },
  methods: {
  },
}
</script>
