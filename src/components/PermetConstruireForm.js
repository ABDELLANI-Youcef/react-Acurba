import styles from '../styles/Form.module.css';

const PermetConstruireForm = () => (
  <div>
    <form>
      <div className={styles.div_label}>
        <label htmlFor="image_input" className={styles.input_line}>
          Formulaire (à remplir par l&apos;architecte):
          {' '}
          <input id="image_input" type="file" />
        </label>
      </div>
    </form>
  </div>
);

export default PermetConstruireForm;
