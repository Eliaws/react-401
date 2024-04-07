import { Link } from 'react-router-dom';
import imagebanniere from '../assets/imagebanniere.jpg';
import logoASSOSREACT from '../assets/logoASSOSREACT.jpg'; // Importez votre logo

import { sections } from './SectionsArray';

export default function Header() {
  return (
    <header>
      <div className="relative h-[350px] overflow-hidden bg-cover bg-[30%] bg-no-repeat" style={{ backgroundImage: `url(${imagebanniere})` }}>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              {/* Logo avec un lien vers la page d'accueil */}
              <Link to="/" className="absolute top-0 left-0 m-4">
                <img src={logoASSOSREACT} alt="Logo de l'association" className="m-2 h-24 w-auto" />
              </Link>
              <h1 className="mb-6 text-5xl font-bold">APIRP</h1>
              <h3 className="mb-8 text-3xl font-bold">Association des Professeurs d'Italien de la Région Parisienne</h3>
              {/* Liens vers les différentes sections */}
              {sections.map((section) => (
                <Link
                  key={section.title}
                  to={section.url}
                  className='mr-4 inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-s font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600'
                >
                  {section.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
