import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      reteun { value: state.value + 1 }
    case DECREMENT:
      reteun { value: state.value - 1 }
    default:
      return state
  }
}