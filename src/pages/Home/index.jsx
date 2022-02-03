
import { Link } from "react-router-dom";

const Home = (props) => {
  const links = props.links || [{ link: "/", label: "Link" }];

  return (
    <div>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
