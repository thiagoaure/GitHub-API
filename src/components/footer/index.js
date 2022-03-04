import React from "react";
import useGithub from "../../hooks/github-hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const { githubState } = useGithub();

  return (
    <footer>
    {(!!githubState.user.name) ? (
        <>
            <FontAwesomeIcon icon="fa-brands fa-github-square" />
            <p>&copy;{githubState.user.name}</p>
        </>
    ) : (
        <>
            <FontAwesomeIcon icon="fa-brands fa-github-square" />
            <p>&copy; Sem Usuário Buscado</p>
        </>
    )}
    </footer>
  );
};

export default Footer;
