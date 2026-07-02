import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <main key={router.pathname} className="page-fade">
      <Component {...pageProps} />
    </main>
  )
}
