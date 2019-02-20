let actions = {
  increment (context) {
    context.commit('increment')
  },
  update_title (context, title) {
    return new Promise((resolve, reject) => {
      console.log('actions 接收title start')
      console.log(title)
      console.log('actions 接收title end')
      context.commit('update_title', title)
      resolve()
    })
  }
}

export default actions
