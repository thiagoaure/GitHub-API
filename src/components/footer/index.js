import React from "react";
import useGithub from "../../hooks/github-hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper} from '../footer/styled';

const Footer = () => {
  const { githubState } = useGithub();
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <footer>
        <Wrapper>
            {(!!githubState.user.name) ? (
                <>
                    <FontAwesomeIcon icon="fa-brands fa-github-square" />
                    <p>&copy;{githubState.user.name}</p>
                    <p>{`${day}/${month+1}/${year}`}</p>
                </>
            ) : (
                <>
                    <FontAwesomeIcon icon="fa-brands fa-github-square" />
                    <p>&copy; Sem Usuário Buscado</p>
                    <p>{`${day}/${month+1}/${year}`}</p>
                </>
            )}
        </Wrapper>
    </footer>
  );
};

export default Footer;
