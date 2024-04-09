function Adherer() {
    return (
        <div className="mt-2 mb-2 flex flex-col items-center justify-center relative isolate px-6 pt-14 lg:px-8 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className="font-bold text-3xl mb-6">
            Pourquoi adhérer à l'APIRP ?
            </h1>
            <div className="text-left mb-6">
                <p className="mt-6 text-s leading-8 text-justify">
                    Pour:
                        <ul className="list-disc ml-6">
                            <li>Participer activement aux assemblées générales.</li>
                            <li>Recevoir chaque année le bulletin imprimé de l’association et les plaquettes gratuites pour la promotion de l’italien.</li>
                            <li>Soutenir des initiatives pour la promotion de l’enseignement de l’italien en île-de-France :
                                <ul className="ml-6">
                                    <li>- La réalisation de ce site, conçu comme un outil de partage et de renseignement pour tous les professeurs d’italien de l’île-de-France ;</li>
                                    <li>- La réalisation et l’impression de plaquettes pour la promotion de l’italien.</li>
                                    <li>- Notre présence lors des manifestations et des évènements culturels (tels que La festa del libro e della cultura italiana ou le Forum des associations franco-italiennes, etc).</li>
                                </ul>
                            </li>
                            <li>Connaître le réseau des professeurs d’italien de la Région Parisienne.</li>
                            <li>Pouvoir être représenté et soutenu, en toutes circonstances et auprès des instances officielles, par une association reconnue.</li>
                            <li>L’union faisant la force, l’A.P.I.R.P. est un moyen pour ne pas rester isolé et avoir des échanges actifs sur notre métier.</li>
                        </ul>
                </p>
            </div>
            <h1 className="font-bold text-3xl mb-6">
            Qui peut adhérer ?
            </h1>
            <div className="text-left mb-6">
                <p className="mt-6 text-s leading-8 text-justify">
                    Peuvent faire partie de l’Association tous les professeurs d’italien de la région parisienne en activité ou à la retraite, quel que soit l’ordre d’enseignement auquel ils appartiennent.
                </p>
            </div>
        </div>
    );
}

export default Adherer;