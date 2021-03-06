import Head from 'next/head';
import Image from 'next/image';

const Post = () => {
  const css1 =
    'https://storage.googleapis.com/krlosaren-portafolio/images/ccs1.svg';
  const css2 =
    'https://storage.googleapis.com/krlosaren-portafolio/images/css2.svg';
  const css3 =
    'https://storage.googleapis.com/krlosaren-portafolio/images/css3.svg';
  const html =
    'https://storage.googleapis.com/krlosaren-portafolio/images/html.svg';
  const js =
    'https://storage.googleapis.com/krlosaren-portafolio/images/js.svg';
  const makesimple =
    'https://storage.googleapis.com/krlosaren-portafolio/images/makesimple.gif';
  return (
    <>
      <Head>
        <title>Krlosaren | MakeSimple </title>
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
      </Head>

      <div id='main__container'>
        <main className='main'>
          <div className='post__content'>
            <h3>Mini Retos para Intentar</h3>
            <p>
              Cambiar de ??rea de conocimiento no siempre es sencillo, salir de
              la zona de confort no resulta un paso f??cil. Este es mi caso, soy
              arquitecto de profesi??n, pero con ganas de trabajar en tecnolog??a.
            </p>
            <p>
              Cuando das tus primeros pasos en programaci??n puede ser abrumador,
              Backend, Frontend, Base de Datos, PHP, JavaScript, Dockers, DevOps
              y otros t??rminos que parecer??an imposibles de entender. Tranquilo
              solo respira y sigue leyendo.
            </p>
            <p>
              Decidir que aprender de primero puede ser una decisi??n dif??cil, en
              mi caso decid?? aprender sobre desarrollo web y en paralelo ir
              tomando cursos y clases sobre fundamentos de programaci??n,
              necesario cuando solo conoces lo b??sico de computadoras.
            </p>
            <p>
              Esta decisi??n se basa en la cercan??a que tengo con el dise??o, un
              ??rea que se me hace m??s familiar , esto me llevo a aprender
              lenguajes como HTML y CSS para pintar en el navegador y poder
              visualizar lo que voy creando, sin embargo, esto no es suficiente
              para realizar funcionalidades con las que interactuamos en
              nuestras aplicaciones favoritas, as?? que era necesario aprender
              JavaScript(JS), un lenguaje de programaci??n que te permite
              interactuar con el navegador, el cliente y poder darle m??s
              dinamismo a tus aplicaciones web.
            </p>
            <p>
              Claro, aprender JavaScript puede ser una tarea larga y un poco
              frustrante, as?? que luego de varios cursos, mucha practica y m??s
              errores, decid?? realizar ciertos retos que permitan poner en
              pr??ctica los conocimientos que he ido adquiriendo. Y es esto lo
              que te quiero compartir.
            </p>
            <p>
              Mi intenci??n es ir poniendo en pr??ctica HTML, CSS y JS a trav??s de
              peque??as aplicaciones, porque conozco lo frustrante que puede ser
              querer realizar una aplicaci??n compleja. Entonces apliquemos
              ???Divide y vencer??s???, con peque??as piedras se construyen grandes
              caminos.
            </p>
            <p>
              Haremos esto juntos, con cada reto aprenderemos nuevas cosas, que
              pueden parecer peque??as pero con la combinaci??n de todas puedes
              hacer el siguiente Google, bueno espera un poco, primero
              aprendamos a hacer una calculadora.
            </p>
            <h2>El primer reto ser?? realizar un DropDown.</h2>
            <p>Aqu?? el resultado final:</p>
            <div
              style={{ position: 'relative', width: '100%', height: '500px' }}>
              <Image
                src={makesimple}
                alt='dropdown'
                layout='fill'
                objectFit='none'
                quality={100}
              />
            </div>
            <p>
              Me gustar??a aclarar que no soy experto, compartir?? mi forma de
              hacerlo, seguro existen formas m??s optimas, si me las muestras
              seria genial.
            </p>
            <p>Ahora el C??digo HTML:</p>
            <div
              style={{ position: 'relative', width: '100%', height: '500px' }}>
              <Image
                src={html}
                alt='html-code'
                layout='fill'
                objectFit='none'
                quality={100}
              />
            </div>
            <p>
              Como ver??n, es un HTML sencillo, donde tengo un contenedor, y
              dentro de este se encuentra el men??.
            </p>
            <p>
              Aqu?? lo que hice fue hacer un contenedor, el cual tendr??a dos DIV,
              uno que contiene el bot??n para desplegar el men?? y el otro el men??
              a desplegar. Con esto logramos manejar todo desde el contenedor
              del DropMenu y el Settings, y hacer un poco m??s legible el c??digo.
            </p>
            <div
              style={{ position: 'relative', width: '100%', height: '500px' }}>
              <Image
                src={css1}
                alt='css1-code'
                layout='fill'
                objectFit='none'
                quality={100}
              />
            </div>
            <p>
              En el CSS para hacer que el men?? este por default oculto uso una
              Opacity = 0 y aparte creo otra clase con Opacity = 1 , que ser??
              agregada de manera din??mica en JS, estas mismas clases contiene la
              parte de transiciones, para hacer m??s elegante el despliegue.
            </p>
            <div
              style={{ position: 'relative', width: '100%', height: '500px' }}>
              <Image
                src={css2}
                alt='css2-code'
                layout='fill'
                objectFit='none'
                quality={100}
              />
            </div>
            <p>
              Ya luego de tener el HTML y CSS, usamos JS para darle dinamismo.
            </p>
            <div
              style={{ position: 'relative', width: '100%', height: '500px' }}>
              <Image
                src={js}
                alt='js-code'
                layout='fill'
                objectFit='none'
                quality={100}
              />
            </div>
            <p>
              El c??digo en JS es muy sencillo, usamos las constantes, BUTTON
              para el bot??n del men??, DROPMENU que ser?? el men?? a desplegar y
              ARROW que girara el indicador cuando el menu esta desplegado y
              cuando no.
            </p>
            <p>
              Ya con esto realizamos una simple funci??n, donde a los elementos
              HTML anteriormente mencionados, le agregamos o quitamos las clases
              auxiliares que creamos en el CSS.
            </p>
            <p>
              Aqu?? usamos una propiedad de JS que es
              Element.classNameList.toggle, que nos permite revisar si una clase
              esta aplicada a nuestro elemento e intercambiar entre estas.
            </p>
            <p>
              En nuestro caso, agregamos las clases Show__menu y After, las
              cuales desplegar??n el men??, y rotar??n nuestra flecha.
            </p>
            <div
              style={{ position: 'relative', width: '100%', height: '500px' }}>
              <Image
                src={css3}
                alt='css3-code'
                layout='fill'
                objectFit='none'
                quality={100}
              />
            </div>
            <p>
              Por otro lado, uso una funci??n de JS preventDefault(), para
              eliminar la recarga al hacer click sobre el bot??n de Settings, y
              as?? seguir con el flujo del programa.
            </p>
            <p>
              Ojal?? este mini tutorial sea de tu agrado, y puedas comentar otras
              maneras de realizar lo mismo, o como incluso mejorar??a el c??digo.
            </p>
            <p>
              Puedes revisar el c??digo completo en el repositorio de GitHub:
              <a
                href='https://github.com/KrlosAren/Make-Simple/tree/master/00_Settings'
                target='_blank'
                rel='noreferrer'>
                https://github.com/KrlosAren/Make-Simple/tree/master/00_Settings
              </a>
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Post;
