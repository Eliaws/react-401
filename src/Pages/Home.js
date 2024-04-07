function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[500px]">
      <h1 className="font-bold text-3xl mb-6">
        Bienvenue sur le site de l'Association des Professeurs d'Italien de la Région Parisienne
      </h1>
      <div className="text-center font-semibold text-left mb-6">
        <p>APIRP est une association qui a pour but de promouvoir la langue et la culture italiennes en France.</p>
        <p>Vous trouverez sur ce site des informations sur nos activités, nos projets, nos partenariats.</p>
      </div>
      <div className="text-left m-3">
        <p className="font-semibold mb-4">Notre association a pour vocation:</p>
        <ul className="list-disc ml-6">
          <li>d’établir et développer des liens de solidarité et d’amitié entre les italianistes de la région parisienne ;</li>
          <li>de renseigner les professeurs d’italien à tous niveaux sur la diffusion de l’enseignement de l’italien en région parisienne ;</li>
          <li>de promouvoir l’enseignement de l’italien.</li>
        </ul>
        <p className="font-bold mt-4">Pour nous contacter : apirp.association@gmail.com</p>
      </div>
    </div>
  );
}

export default Home;
