<template>
  <div id="default">
    <div id="nav-column">
      <Logo width="300px"/>
      <Copy class="introblurb" copy="introblurb" />
      <div id="nav"><Nav index="true"/></div>
    </div>
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
</style>

