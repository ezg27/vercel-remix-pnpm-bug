import Head from 'next/head'
import { foo } from 'ui'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Admin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Admin</h1>
        <p>Name: {foo}</p>
      </main>
    </div>
  )
}
