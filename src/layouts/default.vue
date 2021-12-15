<template>
  <div id="default">
    <div id="nav"><Nav /></div>
    <div id="content"><Nuxt /></div>
    <div id="graph"><Graph /></div>
  </div>
</template>

<style scoped>
#default {
  display: flex;
  width: 100%;
  height: 100vh;
}
#default > * {
}

#content {
  flex-grow: 1;
}
</style>

