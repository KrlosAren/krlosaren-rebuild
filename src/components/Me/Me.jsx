import Image from 'next/image';
import Link from 'next/link';

const Me = () => {
  return (
    <div className='me'>
      <div className='me__img'>
        <Image
          src='https://storage.googleapis.com/krlosaren-portafolio/images/avatar_carlos.svg'
          width='500'
          height='500'
          alt='carlos lopez zavarce '
        />
      </div>
      <div className='me__description'>
        <h2>
          Soy, Carlos
          <span role='img' aria-label='face-smiley' className='emoji'>
            😁
          </span>
        </h2>
        <ul>
          <li>
            Soy desarrollador <b>Front-end y Diseñador</b> 💻.
          </li>
          <li>
            <span role='img' aria-label='building'>
              🏢
            </span>
            Estudié arquitectura.
          </li>
          <li>
            Vivo en <del>Venezuela, Costa Rica,</del> Chile.{' '}
          </li>
          <li>
            Me gusta <b>viajar</b>
            🚀, <b>comer</b> 🍕 y <b>leer</b> 📚.
          </li>
          <li>Diariamente me cuestiono el porqué de la vida.</li>
          <li>
            Soy cinturon negro en karate-do{' '}
            <span role='img' aria-label='karate'>
              🥋
            </span>
            . <del>(Miyagi fue mi sensei).</del>
          </li>
          <li>
            <b>
              La playa
              <span role='img' aria-label='beach'>
                🌴🥥
              </span>{' '}
              y la montaña
              <span role='img' aria-label='sun'>
                🌄
              </span>{' '}
              son mis lugares favoritos.
            </b>
          </li>
          <li>
            Salir a caminar{' '}
            <span role='img' aria-label='run'>
              🏃🏻‍♂
            </span>{' '}
            me ayuda a solucionar <b>problemas</b>
            (cocinar también 🥪).
          </li>
          <li>Quiero correr un ultramaratón algun día.</li>
          <li>
            <b>Aprender</b> cosas es parte de mi filosofía de vida 👓.
          </li>
          <li>
            Cuanto tengo tiempo libre, busco en que ocuparlo
            <del>(Síndrome de Estocolmo).</del>
          </li>
        </ul>
      </div>
      <div className='me__buttons' id='buttons'>
        <Link href='/about'>
          <a className='button-primary button btnActive'>Yo</a>
        </Link>
        <Link href='/projects'>
          <a className='button-primary button btnActive'>Proyectos</a>
        </Link>
      </div>
    </div>
  );
};

export default Me;
