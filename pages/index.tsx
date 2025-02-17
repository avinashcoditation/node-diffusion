import Head from 'next/head'
import { ReactFlowProvider } from 'reactflow'
import { AppBar } from '../components/AppBar'
import { Editor } from '../components/Editor'

export default function Home() {
  return (
    <>
      <Head>
        <title>Render Imagination</title>
        <meta name='description' content='Organize latent space' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col'>
        <ReactFlowProvider>
          <AppBar />
          <Editor />
        </ReactFlowProvider>
      </main>
    </>
  )
}
