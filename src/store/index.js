export const state = () => ({
  counter: 0,
  path: ""
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
