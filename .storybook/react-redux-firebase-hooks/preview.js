import { ReactReduxFirebase, ReduxProvider } from './decorators'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    source: {
      type: 'code',
    },
  },
}

export const decorators = [ReduxProvider, ReactReduxFirebase]
