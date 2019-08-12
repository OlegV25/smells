import { ACCOUNTS } from '@/redux/actions/accounts'

export default (state = null, { type, payload }) => {
  switch (type) {
    case ACCOUNTS.READ.SUCCESS:
      return payload.response
    default:
      return state
  }
}
