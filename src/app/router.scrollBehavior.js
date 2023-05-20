export default function (to, from, savedPosition) {
    setTimeout(() => {
      document.getElementById('content-column').scrollTo({
        top: 0,
        left: 0,
      })
    }, 100)
  return { x: 0, y: 0 }
}



