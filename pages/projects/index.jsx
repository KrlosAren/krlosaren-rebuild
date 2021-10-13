import Head from 'next/head';
import Categories from '../../src/components/Categories/Categories';
import Project from '../../src/components/Project/Project';
import Spinner from '../../src/components/Spinner/Spinner';
import favicon from '/public/favicon.svg';

export async function getStaticProps(context) {
  const ACCESS_TOKEN =
    'c31abf92fdc196e6ec90890f9c1c1e920abd4d190a1a41199fc7d73e65ac05df';
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/projects`);
  const dribbbleApi = await fetch(
    `https://api.dribbble.com/v2/user/shots?access_token=${ACCESS_TOKEN}&per_page=34`
  );
  const { projects } = await res.json();
  const dribbble = await dribbbleApi.json();

  if (!projects) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      projects,
      dribbble,
    }, // will be passed to the page component as props
  };
}

const Projects = ({ projects, dribbble }) => {
  const mapDribbble = dribbble.map((item) => ({
    ...item,
    status: true,
  }));

  return (
    <>
      <Head>
        <title>Krlosaren | Projects </title>
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
        <main className='main main__project' id='main__container'>
          <h3>Proyectos</h3>
          <div className='main__projects'>
            {!projects ? (
              <Spinner />
            ) : (
              <Categories title='Code' page='code'>
                {projects.map((project) => (
                  <Project
                    key={project.id}
                    demoUrl={project.demoUrl}
                    repoUrl={project.repoUrl}
                    title={project.title}
                    img={project.img}
                    description={project.description}
                    status={project.status}
                    show={true}
                  />
                ))}
              </Categories>
            )}
            {!mapDribbble ? (
              <Spinner />
            ) : (
              <Categories title='Design' page='design'>
                {mapDribbble?.map((dribbble) => (
                  <Project
                    key={dribbble.id}
                    url={dribbble.html_url}
                    title={dribbble.title}
                    img={dribbble.images.hidpi}
                  />
                ))}
              </Categories>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Projects;
