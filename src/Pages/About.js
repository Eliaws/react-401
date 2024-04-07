import { elus } from '../Components/ArrayElus';

import iconeProfil from '../assets/iconeProfil.jpg';
import ContactForm from '../Components/ContactForm';
function About() {
    return (
      <div className="mt-2 mb-2 flex flex-col items-center justify-center relative isolate px-6 pt-14 lg:px-8 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h1 className="font-bold text-3xl mb-6">
          À propos de l'APIRP
        </h1>
        <div className="text-left mb-6">
          <p className="mt-6 text-s leading-8 text-justify">
            Le 9 mai 1977 était déclarée à la Préfecture de Police de Paris la création de « L'Amicale des professeurs d'italien de la région parisienne ». Rebaptisée « Association des professeurs d'italien de la région parisienne » (APIRP) en 1984, elle eut pour président(e)s successifs(ives) des professeurs de Collège et de Lycée de l’Éducation Nationale, Jean Constantin, Pierre Méthivier, Anne Mazire, Gabrielle Kerleroux, Ketty Zanforlini et depuis janvier 2017, Romina De Lucia. 

            Quarante ans après  sa création, sa vocation originelle (« établir et développer des liens de solidarité et d'amitié entre les italianistes de la région parisienne ») reste toujours d'actualité. Mais l'APIRP a évolué avec le temps. De nouvelles actions sont en effet apparues nécessaires : tout d'abord, la collecte d'informations fiables au sujet des implantations de postes dans les trois académies; ensuite, la mise en commun d'informations culturelles, de ressources pédagogiques, d'idées pour les cours; et enfin, l'entre-aide en cas de mutation, de fragilisation de poste, etc. Pour ce faire, l'APIRP entretient un dialogue régulier et constructif avec l'Inspection d'italien, en toute indépendance.

            L'APIRP a élaboré une plaquette de promotion de la langue italienne à destination des parents et des élèves en situation de choix, publie un bulletin par an, réunit ses adhérents en assemblée générale au début et à la fin de chaque année scolaire et a également créé un site Internet et une page Facebook. 

            Elle est présente lors de manifestations culturelles italo-françaises (Forum des association italiennes du XIIIè arrondissement, Festa del libro des Blancs Manteaux, réceptions au Centre culturel et à l'Ambassade d'Italie, entre autres). Elle représente aussi tous les professeurs d'italien de l'Ile de France au Congrès annuel de la FNAI (Fédération Nationale des Associations d'Italianistes).
          </p>
        </div>
        <div className="mx-auto mb-10 lg:max-w-xl">
          <h1 className="font-bold text-3xl mb-6"> Les élus du C.A de l'APIRP </h1>
          <h3 className="font-semibold text-2xl mb-6"> Élection du 16 mars 2019 </h3>
          <div className="grid gap-10 mx-auto lg:max-w-screen-lg">
            <div className="flex flex-col items-center justify-center">
              <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-3">
                  {elus.map((elus, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img src={iconeProfil} className="object-cover w-20 h-20 mb-2 rounded-full shadow"></img>
                      <div className="flex flex-col items-center">
                        <p className="font-bold">{elus.nom}</p>
                        <p className="font-semibold">{elus.role}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <p className="font-semibold">
          Pour nous contacter : apirp.association@gmail.com 
        </p>
        <ContactForm />
      </div>
    );
  }
  
  export default About;