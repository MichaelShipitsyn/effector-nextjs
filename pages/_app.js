import {Scope, fork, serialize} from 'effector'
import {Provider} from 'effector-react/scope'
import '../styles/globals.css'

let clientScope

function MyApp({ Component, pageProps }) {
  const scope = fork({
    values: {
      ...(clientScope && serialize(clientScope)),
      ...pageProps.initialState,
    },
  })
  if (typeof window !== 'undefined') clientScope = scope
  
  return (
    <Provider value={scope}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
