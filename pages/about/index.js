import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <Head>
        <title>Krlosaren | About </title>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@krlosaren' />
        <meta name='twitter:creator' content='@krlosaren' />
        <meta
          name='twitter:title'
          content='Carlos Lopez Zavarce frontend developer portafolio'
        />
        <meta
          name='twitter:description'
          content='Carlos Lopez Zavarce frontend developer portafolio'
        />
        <meta
          name='twitter:image'
          content='https://storage.googleapis.com/krlosaren-portafolio/images/thumbnail.png'
        />
        <meta
          property='og:title'
          content='Carlos Lopez Zavarce frontend developer portafolio'
        />
        <meta
          property='og:description'
          content='Carlos Lopez Zavarce frontend developer portafolio'
        />
        <meta
          property='og:image'
          content='https://storage.googleapis.com/krlosaren-portafolio/images/thumbnail.png'
        />
        <meta property='og:url' content='krlosaren.com' />
        <meta property='og:site_name' content='Carlos Lopez' />
        <meta property='og:locale' content='es_ES' />
        <meta property='og:type' content='article' />
        <meta property='fb:app_id' content='788028837' />
        <meta
          name='description'
          content='Carlos Lopez portafolio frontend developer and backend developer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div id='main__container'>
        <main className='main main__about'>
          <h3>¿Quién es Carlos?</h3>
          <div className='main__text'>
            <p>
              Quién es <b>Carlos</b>
              , no siempre resulta fácil responder🤨. Cumplo con diversos roles
              en cada aspecto de la vida.
              <br />A veces soy <a href='projects#architecture'></a>, otras{' '}
              <a href='projects#code'>Programador</a>, algunas veces{' '}
              <a href='projects#design'>Diseñador</a>. Pero siempre un
              🎒viajero. Al final del dia mi mejor respuesta siempre es{' '}
              <b>Soy Carlos.</b>
            </p>
            <br />
            <p>
              Y quién es <b>Carlos</b>, en principio un soñador. Estudié 🏦
              <b>Arquitectura</b>, hice 🥋
              <b>Karate</b>, he corrido 🏃🏻‍♂️
              <b>Maratones</b>. He vivido en 2 paises{' '}
              <del>(Venezuela, Costa Rica)</del>, he conocido otros. Y todo esto
              me ha ayudado a abrir la visión sobre el mundo🌎, y siempre a
              querer más.
            </p>
            <br />
            <p>
              Ahora quién es <b>Carlos</b> profesionalmente, Me defino como 🎨💻
              <b className='linkDecoration'>Programador y Diseñador</b>, pero
              tambien soy <b>Arquitecto</b>. Con muchas ganas de aprender
              comence en el mundo de la tecnología con <code>PHP</code>. Avance
              con <code>HTML, CSS, JavaScript</code>. Comence a entender diseño
              de interfaces
              <code>(UI)</code>. Y actualmente profundizo en tecnologías, como{' '}
              <code>ReactJs</code> ademas de otras herramientas
              <code>
                Github, NodeJs, Python, SQL, Preprocesadores, Webpack
              </code>{' '}
              y un largo etc..., con el objetivo de entender más como funciona
              este inmenso mundo.
            </p>
            <br />
            <p>
              Quiero poder participar en la{' '}
              <b>creación productos que hagan feliz a los clientes</b>
              🥳. Continuar con mi <b>aprendizaje</b>, aportar mis <b>ideas</b>y
              contribuir con la creación de ser parte de un{' '}
              <b>equipo de alto impacto.</b>
            </p>
            <br />
            <p>
              Puedo aportar tanto en{' '}
              <Link href='/design'>
                <a className='linkDecoration'>Diseño</a>
              </Link>{' '}
              como en <b className='linkDecoration'>Programación</b>. Me gusta
              que las cosas salgan bien, la 🤯
              <b>Organización</b> y el <b>Detalle</b>
              son realmente importates para mi. Mi experiencia académica📚,
              profesional y social me permite aportar
              <b>Puntos de Vista Distintos</b> y <b>Nuevos enfoques</b>.
            </p>
            <br />
            <p>
              El <b>Equipo</b> y la <b>Comunicación</b> son pilares
              fundamentales para lograr el objetivo. Me gusta trabajar en
              lugares que 👩🏻‍🚀
              <b>Aporten a mi vida profesional</b> y me empujen a{' '}
              <b>ser cada vez mejor.</b>
              🚀
            </p>
          </div>
          <Image
            src='https://storage.googleapis.com/krlosaren-portafolio/images/avatar_carlos.svg'
            width='500'
            height='500'
            alt='carlos lopez zavarce '
          />
        </main>
      </div>
    </>
  );
};

export default About;
