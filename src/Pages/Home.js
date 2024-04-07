import Article1 from '../assets/Article1.jpg';
import ContactForm from '../Components/ContactForm';

function Home() {
  return (
    <div className="mt-2 mb-2 flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl mb-6">
          Bienvenue sur le site de l'Association des Professeurs d'Italien de la Région Parisienne
        </h1>
        <div className="text-center font-semibold text-left mb-6">
          <p>APIRP est une association qui a pour but de promouvoir la langue et la culture italiennes en France.</p>
          <p>Vous trouverez sur ce site des informations sur nos activités, nos projets, nos partenariats.</p>
        </div>
        <div className="text-left">
          <p className="font-semibold mb-4">Notre association a pour vocation :</p>
          <ul className="list-disc ml-6">
            <li>d’établir et développer des liens de solidarité et d’amitié entre les italianistes de la région parisienne ;</li>
            <li>de renseigner les professeurs d’italien à tous niveaux sur la diffusion de l’enseignement de l’italien en région parisienne ;</li>
            <li>de promouvoir l’enseignement de l’italien.</li>
          </ul>
          <p className="font-bold mt-3
          ">Pour nous contacter : apirp.association@gmail.com</p>
        </div>
        <div className="text-center m-3">
          <h3 className="font-bold text-2xl m-6">
            Nos actualités à la une
          </h3>
          <section>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl text-4xl font-bold tracking-tight leading-8">Concours Dante Dì</h1>
                  <p className="text-left max-w-2xl text-s leading-8 lg:mb-8 mt-2 mr-3">
                    Le Consulat Général d’Italie à Paris, en collaboration avec l’Institut Culturel Italien de Paris, lance le concours DANTE DÌ à l’occasion du Septième Centenaire de la mort de Dante, organisé par la Société Dante Alighieri - Comites.

                    Le concours est ouvert aux élèves italianistes des écoles, collèges et lycées des académies de Paris, Versailles, Créteil, Amiens, Lille, Orléans-Tours, Normandie. Les participants devront élaborer une production en italien sur le thème « Etoiles et planètes chez Dante » : une vidéo, un audio ou encore un récit ou essai illustré.

                    Les établissements scolaires sont invités à participer nombreux. Ils devront déposer leur dossier d’inscription par mail avant le 21 mars 2021.

                    Les élèves et l’enseignant vainqueurs du premier prix gagneront un voyage à Ravenna, avec accès gratuit au musée Dante et participation comme lecteurs à l’initiative "L’ora che volge il disio", lecture perpétuelle de la Divina Commedia devant le Tombeau de Dante.

                    Vous trouverez ci joint le règlement du concours, toutes les précisions utiles pour le retour des propositions ainsi que le bulletin d’inscription. 
                  </p>
                </div>
                <div className="mt-0 col-span-5 flex rounded-lg">
                    <img src={Article1} alt="Concours Dante Di" className="rounded-lg" />
                </div>
            </div>
          </section>
        </div>
        <ContactForm />
    </div>
  );
}

export default Home;
