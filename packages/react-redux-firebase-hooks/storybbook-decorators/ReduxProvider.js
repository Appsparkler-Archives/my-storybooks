import { Provider } from 'react-redux'
import store from './store'

export default (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
)
