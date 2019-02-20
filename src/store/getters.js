let getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  getCount: state => {
    return state.count
  }
}

export default getters
