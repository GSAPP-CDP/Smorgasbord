<template>
  <div class="moduleindex" :class="{ indexview: index }">

    <div class="course">
      <div class="coursetitle">Mapping and Data</div>

      <SequenceLinks path="14-geospatial-concepts" />
      <SequenceLinks path="15-intro-qgis" />
    </div>

    <div class="course">
      <div class="coursetitle">Architectural Drawing</div>

      <SequenceLinks path="12-rhino-intro" />
      <SequenceLinks path="13-arch-drawing" />
    </div>

    <div class="course">
      <div class="coursetitle">Programming for Design Practices: A - Grasshopper</div>

      <SequenceLinks path="4-grasshopper-intro" />
      <SequenceLinks path="5-computational-design-modeling-in-grasshopper" />
    </div>

    <div class="course">
      <div class="coursetitle">Programming for Design Practices: B - Python</div>

      <SequenceLinks path="6-intro-to-python" />
      <SequenceLinks path="7-fundamentals-of-python" />
      <SequenceLinks path="8-intro-to-python-in-rhino" />
      <SequenceLinks path="10-spatial-python" />
    </div>

    <div class="course">
      <div class="coursetitle">Programming for Design Practices: C - Web and Interactivity</div>

      <SequenceLinks path="11-interactive-web" />
      <SequenceLinks path="16-ambient-computing-network-architecture" />
      <SequenceLinks path="17-ambient-computing-interactivity" />
      <SequenceLinks path="18-behavioral-modeling-intro" />
    </div> 

  </div>
</template>

<style scoped>

.course {
}

.coursetitle {
  font-size: 2em;
  margin: 30px 0px;
}

.moduleindex {
  color: 555;
  font-family: Lato;
  color: black;
}

.sequence {
  line-height: 1.5em;
  margin-bottom: 20px;
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
