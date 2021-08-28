// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    projects: [
      {
        id: 0,
        title: 'Urban Eatery',
        demoUrl: 'https://guru-hotel-c7cb6.web.app/',
        repoUrl: 'https://github.com/KrlosAren/guruHotel-yelp',
        img: 'https://storage.googleapis.com/krlosaren-portafolio/images/guru-hotel-c7cb6.web.app_.png',
        description:
          'Urban Eatery is an app to search about restaurants in the city.\n Look for reviews , photos about the local, schedules and prices.',
        status: false,
      },
      {
        id: 1,
        title: 'Suculentagram',
        demoUrl: 'https://krlosaren.github.io/suculentagram-v2/',
        repoUrl: 'https://github.com/KrlosAren/suculentagram-v2',
        img: 'https://storage.googleapis.com/krlosaren-portafolio/images/suculentagram.png',
        description:
          'E-commerce para plantas. Flujo de compras desde visualizar productos hasta el formulario de pago.\n Incluye un blog y una seccion de comunidad.',
        status: true,
      },
      {
        id: 2,
        title: 'Task User',
        demoUrl: 'https://todo-user-project.uc.r.appspot.com/home',
        repoUrl: 'https://github.com/KrlosAren/suculentagram-v2',
        img: 'https://storage.googleapis.com/krlosaren-portafolio/images/taskUser.png',
        description:
          'Proyecto CRUD de tareas con registro y login de usuario.\n Hecho con Python y Flask.',
        status: true,
      },
      {
        id: 3,
        title: 'Dashboard',
        demoUrl: 'https://krlosaren.github.io/dashboard-ts/',
        repoUrl: 'https://github.com/KrlosAren/dashboard-ts',
        img: 'https://storage.googleapis.com/krlosaren-portafolio/images/krlosaren.github.io_dashboard-ts_%20(1).png',
        description:
          'Dashboard fake para monitorear crytpo monedas.\n Permite ver noticias y cuanta inversion tienes en criptomonedas.',
        status: false,
      },
      {
        id: 4,
        title: 'Merch Store',
        demoUrl: 'https://merch-demo-store.web.app/',
        repoUrl: 'https://github.com/KrlosAren/merch-demo-store',
        img: 'https://storage.googleapis.com/krlosaren-portafolio/images/merch-demo-store.web.app_%20(1).png',
        description:
          'E-commerce Platzi Conf Merch contiene el flujo de usuario hasta boton de compras.\n Hecho con ReactJs.',
        status: true,
      },
      {
        id: 5,
        title: 'Static Jobs Listings',
        demoUrl: 'https://github.com/KrlosAren/static-jobs-listings-master',
        repoUrl: 'https://github.com/KrlosAren/suculentagram-v2',
        img: 'https://storage.googleapis.com/krlosaren-portafolio/images/static-jobs-listings-master_.png',
        description:
          'Dashboard de trabajos en TI con filtro construido en Javascript Vanilla.',
        status: true,
      },
      {
        id: 6,
        title: 'Article Preview',
        demoUrl: 'https://github.com/KrlosAren/article-preview-component',
        repoUrl: 'https://github.com/KrlosAren/suculentagram-v2',
        img: 'https://storage.googleapis.com/krlosaren-portafolio/images/article-preview.png',
        description:
          'Article preview parte de los retos de https://www.frontendmentor.io/',
        status: true,
      },
      {
        id: 7,
        title: 'Social Media Dashboard',
        demoUrl: 'https://krlosaren.github.io/social-media-dashboard/',
        repoUrl: 'https://github.com/KrlosAren/suculentagram-v2',
        img: 'https://storage.googleapis.com/krlosaren-portafolio/images/social-media-dashboard_.png',
        description:
          'Social media Dashoboard con Mmodo oscuro.\n Parte de los retos de https://www.frontendmentor.io/',
        status: true,
      },
      {
        id: 8,
        title: 'Huddle Landing Page',
        demoUrl: 'https://krlosaren.github.io/huddle-landing-page/',
        repoUrl: 'https://github.com/KrlosAren/suculentagram-v2',
        img: 'https://storage.googleapis.com/krlosaren-portafolio/images/huddle-landing-page_.png',
        description:
          'Huddle Landing Page simple Landing Page.\n Parte de los retos de https://www.frontendmentor.io/',
        status: true,
      },
      {
        id: 9,
        title: 'Four Card Feature',
        demoUrl:
          'https://krlosaren.github.io/four-card-feature-section-master/',
        repoUrl: 'https://github.com/KrlosAren/suculentagram-v2',
        img: 'https://storage.googleapis.com/krlosaren-portafolio/images/four-card.png',
        description:
          'Four Card Feature.\n Parte de los retos de https://www.frontendmentor.io/',
        status: true,
      },
    ],
  });
};
