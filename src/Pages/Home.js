import Article1 from '../assets/Article1.jpg';


function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-3xl mb-6">
        Bienvenue sur le site de l'Association des Professeurs d'Italien de la Région Parisienne
      </h1>
      <div className="text-center font-semibold text-left mb-6">
        <p>APIRP est une association qui a pour but de promouvoir la langue et la culture italiennes en France.</p>
        <p>Vous trouverez sur ce site des informations sur nos activités, nos projets, nos partenariats.</p>
      </div>
      <div className="text-left m-3">
        <p className="font-semibold mb-4">Notre association a pour vocation :</p>
        <ul className="list-disc ml-6">
          <li>d’établir et développer des liens de solidarité et d’amitié entre les italianistes de la région parisienne ;</li>
          <li>de renseigner les professeurs d’italien à tous niveaux sur la diffusion de l’enseignement de l’italien en région parisienne ;</li>
          <li>de promouvoir l’enseignement de l’italien.</li>
        </ul>
        <p className="font-bold mt-4">Pour nous contacter : apirp.association@gmail.com</p>
      </div>
      <div className="text-center m-3">
        <h3 className="font-bold text-2xl m-6">
          Nos actualités à la une
        </h3>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="m-3 text-left">
            <img src={Article1} />
            <h3 className="font-bold text-2xl mb-4">
              Semaine de la cuisine italienne dans le monde. 5e édition.
            </h3>
            <p>
              La 5ème édition de la « Semaine de la Cuisine Italienne dans le Monde » se déroulera du lundi 23 novembre au dimanche 29 novembre 2020, et pour la France se poursuivra tout le mois de décembre.
            </p>
            <p>
              Téléchargez ici le programme : <a href="http://iicparigi.esteri.it/iic_parigi/resource/doc/2020/11/cuisinefr.pdf">http://iicparigi.esteri.it/iic_parigi/resource/doc/2020/11/cuisinefr.pdf</a>
            </p>
            <p>
              Deux projections en ligne, sur plateforme numérique, organisées par l’Association Anteprima et le cinéma Le Balzac, introduite par Paolo Modugno et suivie d’un débat, auront lieu :
            </p>
            <p>
              Jeudi 26 novembre 2020, 19h, “La grande bouffe” de Marco Ferreri (1973), VF, avec Ugo Tognazzi, Marcello Mastroianni, Philippe Noiret, Michel Piccoli. (Le film a été tourné en français).
            </p>
            <p>
              Samedi 28 novembre, 11h, « Miseria e nobiltà » de Mario Mattoli (1954), VOSTF, avec Toto’ et Sophia Loren.
            </p>
            <p>
              Pour pouvoir prendre votre place (6 Euros) avec un système de paiement sécurisé, il faut cliquer sur les liens :
            </p>
            <ul>
              <li>La grande bouffe : <a href="https://sallevirtuelle.25eheure.com/seance/3695/">https://sallevirtuelle.25eheure.com/seance/3695/</a></li>
              <li>Misère et noblesse : <a href="https://sallevirtuelle.25eheure.com/seance/3696/">https://sallevirtuelle.25eheure.com/seance/3696/</a></li>
            </ul>
            <p>
              Puis, autoriser l’accès à la localisation (les projections sont accessibles seulement aux personnes habitant dans un rayon de 25km par rapport au cinéma Le Balzac)
            </p>
            <p>
              Puis, créer un compte en mettant votre mail et en insérant un mot de passe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
