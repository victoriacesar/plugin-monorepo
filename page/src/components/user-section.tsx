import personIcon from '../assets/foto-perfil.jpg';

const skills = {
  Ferramentas: ['Notion', 'Jira', 'Slack', 'Mural'],
  Metodologias: ['Scrum', 'Jira', 'Kanban'],
  'Banco de dados': ['PostgreSQL', 'MongoDB', 'Firebase'],
};

export const UserSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-8 py-8 md:px-16 md:py-16 gap-6">
        <img
          src={personIcon}
          alt="User Icon"
          className="size-48 sm:size-48 md:size-48 lg:size-56 xl:size-64 max-w-64 max-h-64 rounded-full"
        />
        <h1 className="text-xlg font-extrabold text-black dark:text-white">
          Victória César
        </h1>
        <a
          href="https://www.linkedin.com/in/victoriacesar/"
          className="bg-brand-primary-dark dark:bg-brand-primary-main text-white dark:text-brand-primary-dark px-4 py-3 text-xxs font-bold rounded transition-all hover:bg-zinc-700 dark:hover:bg-zinc-300"
        >
          Entre em contato
        </a>
      </div>
      <div className="flex flex-col items-center justify-center gap-12 border border-black dark:border-white rounded-lg m-4 px-6 py-12">
        <div className="flex flex-col gap-5">
          <h2 className="text-lg font-extrabold text-black dark:text-white text-center">
            Sobre mim
          </h2>
          <p className="text-justify dark:text-white">
            Olá, 👋 eu me chamo Victória. <br /> Eu sou desenvolvedora
            fullstack, estou trabalhando com desenvolvimento web no momento e
            atualmente moro no Brasil 📍. Minha stack atual é o JavaScript e
            continuo sempre estudando e me mantendo atualizada sobre
            desenvolvimento para a web. Meu próximo foco é desenvolvimento
            mobile 📱.
          </p>
        </div>
        <div className="w-full flex flex-col gap-5">
          <h3 className="text-md font-bold text-black dark:text-white">
            Habilidades
          </h3>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-2">
              <h4 className="text-sm font-bold text-black dark:text-white">
                {category}
              </h4>
              <ul className="ml-8">
                {items.map((item) => (
                  <li key={item} className="text-justify dark:text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
