export const ProjectsSection = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-16">
      <h2 className="text-lg font-extrabold text-black dark:text-white">
        Projetos
      </h2>
      <div className="flex flex-col items-start justify-start gap-4 border border-black dark:border-white rounded-lg m-4 px-6 py-12">
        <h3 className="dark:text-white text-black text-sm font-bold self-center">
          Cine Mercy
        </h3>
        <p className="text-justify dark:text-white text-black text-xs">
          Site para cadastro de filmes para assistir com os amigos, você pode
          cadastrar próximos filmes, filmes anteriores, cadastrar filme
          assistidos, fazer reviews e ratings e etc. Para construção do site é
          utilizado NextJs e para construção da API é utilizado NestJs. Projeto
          em andamento.
        </p>
        <a
          href="https://github.com/victoriacesar/cinemercy"
          className="bg-brand-primary-dark dark:bg-brand-primary-main text-white dark:text-brand-primary-dark px-[12px] py-[10px] text-xxs font-bold rounded transition-all hover:bg-zinc-700 dark:hover:bg-zinc-300"
        >
          Ver mais
        </a>
      </div>
      <a
        href="https://github.com/victoriacesar?tab=repositories"
        className="bg-brand-primary-dark dark:bg-brand-primary-main text-white dark:text-brand-primary-dark px-[12px] py-[10px] text-xxs font-bold rounded transition-all hover:bg-zinc-700 dark:hover:bg-zinc-300"
      >
        Ver todos os projetos
      </a>
    </div>
  );
};
