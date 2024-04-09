
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";

import Adherent_pdf from "../assets/Docs/Adherent_pdf.pdf";
import Pas_Adherent from "../assets/Docs/Pas_Adherent.pdf";
import Quiz from "../assets/Docs/Quiz.pdf";

export default function Promouvoir(){

    return (
        <>
          <section className="mt-3 p-3 space-y-2">
              <h1 className="text-2xl text-green-700">La plaquette éditée par L'APIRP</h1>
              <p className="text-slate-600">L'APIRP a édité un dépliant pour la promotion de l'apprentissage de la langue italienne dans les établissements scolaires de l'Île-de-France.</p>
          </section>

          <section className="mt-3 p-3 w-[80%] mx-auto">
              <div className="flex justify-around">
                    <img src={image1} alt="image 2" width="400" height="500"/>
                    <img src={image2} alt="image 1" width="400" height="500"/>
               </div>

               <div className="mt-3 p-3 w-[80%] mx-auto">
                  <h2 className="text-2xl text-green-700 mb-3">Pour commander les dépliants</h2>
                  <ul>
                    <li className=" bg-slate-50 shadow flex justify-between w- items-center p-3 rounded mb-3">
                        <span className="text-slate-600">Si vous etes un adhérent</span> 
                       <a href={Adherent_pdf} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-green-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                       </a>
                    </li>
                    <li className=" bg-slate-50 shadow flex justify-between w- items-center p-3 rounded mb-3">
                        <span className="text-slate-600">Si vous etes pas un adhérent</span> 
                       <a href={Pas_Adherent} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-green-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                       </a>
                    </li>
                    <li className=" bg-slate-50 shadow flex justify-between w- items-center p-3 rounded mb-3">
                        <span className="text-slate-600">Réponse au quiz de la plaquette</span> 
                       <a href={Quiz} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-green-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                       </a>
                    </li>
                  </ul>
               </div>
          </section>

          
        </>
    );
}