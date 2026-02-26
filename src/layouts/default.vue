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

.introblurb {
  margin-bottom: 20px;
  max-width: 600px;
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

@media (max-width: 768px) {
  #layout-module {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }

  #nav-column {
    flex-basis: auto;
    width: 100%;
    max-height: 40vh;
    padding: 15px 20px;
    border-bottom: 2px solid #ccc;
  }

  #logo {
    height: 70px;
  }

  #content-column {
    overflow-y: visible;
    width: 100%;
  }
}
</style>

<script>
export default {
  scrollToTop: true,
}

</script>

