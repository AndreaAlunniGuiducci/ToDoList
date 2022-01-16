import styles from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <hr />
      <p>Copyright Tripode {year}</p>
    </footer>
  );
};

export default Footer;
