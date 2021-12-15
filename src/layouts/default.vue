<template>
  <div id="default">
    <div id="nav"><Nav /></div>
    <div id="content"><Nuxt /></div>
    <div id="graph"><Graph /></div>
  </div>
</template>

<style >
#default {
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

#nav {
  overflow-y: auto;
  flex-basis: 350px;
  flex-grow: 0;
  flex-shrink: 0;
}

#content {
  overflow-y: auto;
}

#graph {
  display: none;
}
</style>

