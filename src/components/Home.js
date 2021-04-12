import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>
      Bienvenue mahmoud
    </h1>
    <h2>Acte d&apos;urbanisme</h2>
    <p>Certaficat de Morcellement</p>
    <p>Certaficat de lotir</p>
    <p>permis de demolir</p>
    <Link to="/permet_de_construire">Permis de construire</Link>
    <p>Certaficat de Conformetè</p>
    <p>Certaficat d&apos;Urbanisme</p>
  </div>
);

export default Home;
