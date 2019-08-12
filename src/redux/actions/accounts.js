import { createAction } from 'redux-actions'
import { createRequestTypes } from '@/utils/actionHelpers'
import { API_CALL, API_METHODS } from '@/consts/api'

const baseName = 'ACCOUNTS'
export const ACCOUNTS = {
  CREATE: createRequestTypes(`${baseName}/CREATE`),
  CONFIRM: createRequestTypes(`${baseName}/CONFIRM`),
  LOGIN: createRequestTypes(`${baseName}/LOGIN`),
  READ: createRequestTypes(`${baseName}/READ`),
  RECOVERY_EMAIL: createRequestTypes(`${baseName}/RECOVERY_EMAIL`),
  RECOVERY_PASSWORD: createRequestTypes(`${baseName}/RECOVERY_PASSWORD`),
}

export const createAccount = createAction(ACCOUNTS.CREATE.REQUEST, (data, formikBag) => ({
  [API_CALL]: {
    actions: ACCOUNTS.CREATE,
    method: API_METHODS.POST,
    path: 'accounts',
    formikBag,
    data,
  },
}))

export const confirmAccount = createAction(ACCOUNTS.CONFIRM.REQUEST, token => ({
  [API_CALL]: {
    actions: ACCOUNTS.CONFIRM,
    method: API_METHODS.POST,
    path: 'accounts/confirm',
    data: { token },
  },
}))

export const loginAccount = createAction(ACCOUNTS.LOGIN.REQUEST, (data, formikBag) => ({
  [API_CALL]: {
    actions: ACCOUNTS.LOGIN,
    method: API_METHODS.POST,
    path: 'accounts/token',
    formikBag,
    data,
  },
}))

export const getAccount = createAction(ACCOUNTS.READ.REQUEST, () => ({
  [API_CALL]: {
    actions: ACCOUNTS.READ,
    method: API_METHODS.GET,
    path: '/accounts/me',
  },
}))

export const recoveryEmail = createAction(
  ACCOUNTS.RECOVERY_EMAIL.REQUEST,
  (username, formikBag) => ({
    [API_CALL]: {
      actions: ACCOUNTS.RECOVERY_EMAIL,
      method: API_METHODS.POST,
      path: '/accounts/recovery/email',
      data: { username },
      formikBag,
    },
  }),
)

export const recoveryPassword = createAction(
  ACCOUNTS.RECOVERY_PASSWORD.REQUEST, (data, formikBag) => ({
    [API_CALL]: {
      actions: ACCOUNTS.RECOVERY_PASSWORD,
      method: API_METHODS.POST,
      path: '/accounts/recovery/password',
      formikBag,
      data,
    },
  }),
)
