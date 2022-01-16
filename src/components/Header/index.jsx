import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = (props) => {
  const name = props.name || "App";
  const links = props.links || [{ link: "/", label: "Link" }];

  /* Versione "custom", si può ottenere lo stesso risultato anche solamente
  usando il componente NavLink
  https://reactrouter.com/docs/en/v6/api#navlink */
  const CheckActive = (link) => {
    const resolved = useResolvedPath(link);
    const match = useMatch({ path: resolved.pathname, end: true });

    return match ? styles.active : "";
  };

  return (
    <header className={styles.header}>
      <h1 style={{ fontFamily: props.font }}>{name}</h1>
      <nav>
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              <Link className={CheckActive(item.link)} to={item.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
