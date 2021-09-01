import Image from 'next/image';

const Project = ({
  status,
  repoUrl,
  description,
  demoUrl,
  title,
  img,
  show,
}) => {
  const descriptionLength = description?.length;

  const styles = {
    gridTempleRows: !show && 'none',
  };

  return (
    <article className='project' style={styles}>
      <div className='project__title'>
        <h4>{title}</h4>
      </div>
      <div
        className='project__header'
        style={{ width: '100%', height: 'auto', position: 'relative' }}>
        <Image
          src={img}
          alt={title}
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      {show ? (
        <div className='project__info'>
          {status ? <h5>Terminado</h5> : <h5>En proceso</h5>}
          <p>
            {description.length > 80
              ? `${description.slice(0, 100)} `
              : description}
          </p>
          <p className='tooltip'>...más</p>
          <p className='tooltiptext'>{description}</p>
          <div className='buttons-card'>
            <a href={demoUrl} target='_blank' rel='noreferrer'>
              Demo
            </a>
            <a href={repoUrl} target='_blank' rel='noreferrer'>
              Github
            </a>
          </div>
        </div>
      ) : null}
    </article>
  );
};

export default Project;
