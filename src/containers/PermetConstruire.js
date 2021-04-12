import styles from '../styles/Form.module.css';
import PermetConstruireForm from '../components/PermetConstruireForm';

const PermetConstruire = () => (
  <div className={styles.container}>
    <h1>Formulaire de permet de construire</h1>
    <PermetConstruireForm />
  </div>
);

export default PermetConstruire;
