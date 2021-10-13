import Head from 'next/head';
import Header from '../src/components/Header/Header';
import Me from '../src/components/Me/Me';
import Prologe from '../src/components/Prologe/Prologe';
import favicon from '/public/favicon.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Krlosaren | Home </title>
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
        <link rel='icon' href={favicon.src} />
      </Head>
      <div id='main__container'>
        <Header />
        <Prologe />
        <Me />
      </div>
    </>
  );
}
