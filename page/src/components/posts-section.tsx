const PostLink = ({
  date,
  title,
  href,
}: {
  date: string;
  title: string;
  href: string;
}) => (
  <a
    href={href}
    className="dark:text-white text-black underline hover:text-brand-primary-dark dark:hover:text-brand-primary-main transition-colors"
  >
    {date} - {title}
  </a>
);

const ViewAllPostsButton = () => (
  <a
    href="https://github.com/victoriacesar?tab=repositories"
    className="bg-brand-primary-dark dark:bg-brand-primary-main text-white dark:text-brand-primary-dark px-3 py-2 text-xxs font-bold rounded transition-all hover:bg-zinc-700 dark:hover:bg-zinc-300 w-fit self-center mt-4"
  >
    Ver todas as postagens
  </a>
);

export const PostsSection = () => {
  const posts = [
    {
      date: 'DD/MM/yyyy',
      title: 'Uma postagem interessante',
      href: 'https://www.linkedin.com/in/victoriacesar/recent-activity/all/',
    },
    {
      date: 'DD/MM/yyyy',
      title: 'Uma postagem interessante',
      href: 'https://www.linkedin.com/in/victoriacesar/recent-activity/all/',
    },
    {
      date: 'DD/MM/yyyy',
      title: 'Uma postagem interessante',
      href: 'https://www.linkedin.com/in/victoriacesar/recent-activity/all/',
    },
    {
      date: 'DD/MM/yyyy',
      title: 'Uma postagem interessante',
      href: 'https://www.linkedin.com/in/victoriacesar/recent-activity/all/',
    },
    {
      date: 'DD/MM/yyyy',
      title: 'Uma postagem interessante',
      href: 'https://www.linkedin.com/in/victoriacesar/recent-activity/all/',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-12 border border-black dark:border-white rounded-lg m-4 px-6 py-12 mt-16">
      <div className="flex flex-col gap-5 w-full">
        <h2 className="text-lg font-extrabold text-black dark:text-white text-center">
          Últimas postagens
        </h2>
        <div className="flex flex-col items-start gap-4">
          {posts.map((post, index) => (
            <PostLink
              key={index}
              date={post.date}
              title={post.title}
              href={post.href}
            />
          ))}
        </div>
        <ViewAllPostsButton />
      </div>
    </div>
  );
};
