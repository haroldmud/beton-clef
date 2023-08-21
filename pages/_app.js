import '../styles/globals.css'
import { Inter } from '@next/font/google'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import menuSlice from '../slice/menuSlice'

const inter = Inter({ subsets: ['latin'] })
const store = configureStore({
  reducer: {
    menu: menuSlice
  }
})
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  )
}
