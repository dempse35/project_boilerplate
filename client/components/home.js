import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate(); //This is how you will navigate routes (change path in URL)
  const handleClick = (e, route) => {
    e.preventDefault();
    navigate(`/${route}`);
  };

  return (
    <div>
      <h1>Here is Your Home Page</h1>
      <header>
        <button onClick={e => handleClick(e, "somewhere")}>
          This will Navigate somewhere
        </button>
        <button class="linkButton" onClick={e => handleClick(e, "elsewhere")}>
          This will Navigate elsewhere
        </button>
      </header>
    </div>
  );
}
