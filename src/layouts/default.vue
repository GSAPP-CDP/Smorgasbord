<template>
  <div id="layout-module">
    <div id="nav-column">
      <div id="logo"><Logo width="220px"/></div>
      <div id="nav"><Nav /></div>
    </div>
    <div id="content-column"><Nuxt /><Copyright /></div>
    <div id="graph-column"><Graph /></div>
  </div>
</template>


<style >
#default {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #F2EDE7;
  font-family: "IBM Plex Sans", Helvetica, sans-serif;
}
a, a:visited {
  color: #555;
}
#default > * {
}
#nav-column {
  padding: 20px 30px;
  overflow-y: auto;
  flex-grow: 0;
  flex-shrink: 0;
  width: 90vw;
  max-width: 900px; 
} 
.moduleindex {
}
  
.introblurb {
  margin-bottom: 20px;
  max-width: 600px;
}
#graph-column {
  display: none;
}

#layout-module {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #F2EDE7;
  font-family: "IBM Plex Sans", Helvetica, sans-serif;
}

a, a:visited {
  color: #555;
}


#default > * {
}

#nav-column {
  overflow-y: auto;
  flex-basis: 350px;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 20px 30px;
}

#logo {
  height: 100px;
}

#content-column {
  overflow-y: auto;
  width: 100%;
}

#graph-column {
  display: none;
}
</style>

<script>
export default {
  scrollToTop: true,
}

</script>


