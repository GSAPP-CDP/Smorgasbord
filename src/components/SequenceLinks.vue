<template>
  <div class="sequence" v-if="sequencedata != null">

      <div class="sequencetitle">{{ sequenceTitle }}</div>
      <ol class="sequencemodules">
        <li v-for="module in sequencedata.modules" :class="[ module.contentdata.path === $nuxt.$route.path ? 'active' : '']" v-if="module.contentdata != null">
          <NuxtLink :to="module.contentdata.path"> {{ module.contentdata.title }}</NuxtLink>
        </li>
      </ol>



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

li {
  color: grey;
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
  props: ['path'],
  computed: {
    contentdata () {
      return this.$store.state.contentdata
    },
    sequencedata() {
      var self = this;
      var f = self.contentdata.sequences.filter(d => {
        return d.path == self.path;
      })
      if(f.length > 0) { return f[0]; }
      else { return null; }
    },
    sequenceTitle() {
      try {
        return this.sequencedata.contentdata.title;
      } catch {
        try { 
        return this.sequencedata.path;
        } catch {
          return "";
        }
      }
    },
  },
  methods: {
  },
}
</script>
