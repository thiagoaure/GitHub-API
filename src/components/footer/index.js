import React, { useState } from "react";
import useGithub from "../../hooks/github-hooks";

const Footer = () => {
  const { githubState } = useGithub();

  return (
    <footer>
        <p>Footer</p>
    </footer>
  );
};

export default Footer;
