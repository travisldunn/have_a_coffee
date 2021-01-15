import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Have a Coffee</title>
        <link rel="icon" href="/favico.png" />
      </Head>

      <main className="main">
        <div className="hero">
          <div className="leftBox">
            <img src="/hacLogo.png" alt="Have a Coffee Logo" className="logo" />
            <h1 className="headline">
              Direto dos melhores produtores
              <br />
              Escolha seu café favorito
              <br />
              Do jeito que você precisa
            </h1>
            <p>Transparência e rapidez de ponta a ponta.</p>

            <button>Quero Café</button>
          </div>

          <img src="/cup.jpg" alt="" className="cup" />
        </div>

        <div className="whyCoffee">
          <img src="/explicativo1.jpg" alt="" />
          <div>
            <h1>Porque o Have a Coffee?</h1>
            <p>
              Por trás de cada xícara de café, existe um mundo de transformações
              e sensações.
            </p>
            <p>
              Do coração de quem produz com consciência. Da raiz de um lavoura
              saudável. Passando pela transformação dos grãos por torras frescas
              e em pequenas quantidades Até ser entregue a você com comodidade e
              rapidez.
            </p>
            <p>Queremos levar o melhor do café até você.</p>
            <p>Mas do seu jeito.</p>
            <p>Transcenda as barreiras do café com a gente.</p>
          </div>
        </div>
        <div className="comoFun">
          <h1>Como Funciona?</h1>
          <div className="funBox">
            <div>
              <img
                src="/favico.png"
                alt="coffee cup"
                style={{ backgroundColor: "white" }}
              />
              <h2>Escolha seu perfil de torra</h2>
              <p>
                Claro, médio ou escuro? As torras mais claras tem sabor cítrico
                ou frutado, as médias são mais amendoados e as mais escuras tem
                sabor mais amargo.
              </p>
            </div>
            <div>
              <img src="/iloop.png" alt="" />
              <h2>Intenso ou Equilibrado?</h2>
              <p>
                Do sabor delicado ao café mais encorpado com aromas intesnsos.
                Nossos microlotes trazem novas sensações à todo tipo de paladar.
              </p>
            </div>
            <div>
              <img src="/cart.png" alt="" />
              <h2>Escolha a Quantidade</h2>
              <p>
                Agora é só escolher a quantidade que você precisa. Seu café vai
                chegar fresco e com rapidez
              </p>
            </div>
          </div>
        </div>
        <div className="products">
          <h1>Conheça os Melhores</h1>
          <div className="productBox">
            <div>
              <img src="/1Prod.jpg" alt="" />
              <h2>Gente Boa</h2>
              <button>Eu Quero</button>
            </div>
            <div>
              <img src="/2Prod.jpg" alt="" />
              <h2>Coisa Séria</h2>
              <button>Eu Quero</button>
            </div>
            <div className="last">
              <img src="/3Prod.jpg" alt="" />
              <h2>Porradão</h2>
              <button>Eu Quero</button>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <h1>Apaixonados Por Café</h1>
        <img src="/footer.jpg" alt="" className="desktop" />
        <img src="/mobileFooter.png" alt="" className="mobile" />
      </footer>
    </div>
  );
}
