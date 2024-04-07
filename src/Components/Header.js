import { BrowserRouter as Router, Link, createBrowserRouter } from 'react-router-dom';
import imagebanniere from '../assets/imagebanniere.jpg';


import Home from '../Pages/Home';
import About from "../Pages/About";
import Activites from "../Pages/Activites";
import Promouvoir from "../Pages/Promouvoir";
import Apprendre from "../Pages/Apprendre";
import Divers from "../Pages/Divers";
import Adherer from "../Pages/Adherer";
import Forum from "../Pages/Forum";

import { sections } from './SectionsArray';



export default function Header(){
    return (
    <>
        <header>
            <div
                className="relative h-[350px] overflow-hidden bg-cover bg-[30%] bg-no-repeat"  style={{ backgroundImage: `url(${imagebanniere})` }}>
                <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
                    <div className="flex h-full items-center justify-center">
                        <div className="px-6 text-center text-white md:px-12">
                            <h1 className="mb-6 text-5xl font-bold">APIRP</h1>
                            <h3 className="mb-8 text-3xl font-bold">Association des Professeurs d'Italien de la Région Parisienne</h3>
                                    {sections.map((section) => (
                                        <Link
                                            color="inherit"
                                            noWrap
                                            className='mr-4 inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-s font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600'
                                            key={section.title}
                                            variant="body2"
                                            to={section.url}
                                            sx={{ p: 1, flexShrink: 0 }}
                                            element={<section.url/>}
                                        >
                                            {section.title}
                                        </Link>
                                    ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
    )
}