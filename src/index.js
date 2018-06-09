export function composeReducer(enhancers = {}) {
	return reducer => (state, action) => (
    Object.keys(enhancers).reduce((newState, prop) => (
      Object.assign({}, newState, {
        [prop]: enhancers[prop](
          newState[prop],
          action
        )
      })
    ), reducer(state, action))
  )
}

export default composeReducer;