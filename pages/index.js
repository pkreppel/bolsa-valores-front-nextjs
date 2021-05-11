import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Minha Carteira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Carteira de Ações e Fiis
        </h1>

        <div className="grid">
          <div className="card">
            <Link href="/carteira/acoes">
              <a>
              <h3>Ações &rarr;</h3>
              <p>Carteira de Ações</p>
              </a>
            </Link>
          </div>

          <div className="card">
            <Link  href="/carteira/fiis">
              <a>
                <h3>Fiis &rarr;</h3>
                <p>Carteira de Fiis</p>
              </a>
            </Link>
          </div>
        </div>
      </main>

      <style jsx>{`
        
        
      `}</style>

      <style jsx global>{`
       
      `}</style>
    </div>
  )
}
