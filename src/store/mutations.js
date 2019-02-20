let mutations = {
  increment (state) {
    // mutate state
    state.count++
  },
  update_title (state, title) {
    console.log('mutations 接收title:' + title)
    state.title = title
  }
}

export default mutations
