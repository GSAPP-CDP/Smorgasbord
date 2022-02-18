var content = require('/data/content.json')

export const state = () => ({
  counter: 0,
  path: "",
  content:  content,
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
