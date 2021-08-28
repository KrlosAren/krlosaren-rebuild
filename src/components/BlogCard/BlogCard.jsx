import Link from 'next/link';

const BlogCard = ({ title, content, url }) => {
  return (
    <div className='blog__card'>
      <h4>{title}</h4>
      <p>{content}</p>
      <Link href={url}>
        <a>...Continuar</a>
      </Link>
    </div>
  );
};

export default BlogCard;
