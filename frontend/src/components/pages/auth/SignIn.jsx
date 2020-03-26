import React from "react";
import "./signIn.scss"

function SignIn() {
  return (

    <form className="connexion">
      <label for="login">
        Identifiant:
      <input type="text" name="login" id="login" />
      </label>
      <label for="pass">
        Mot de passe (8 charact min):
        <input type="password" name="password" id="pass" minlength="8" maxLength="20" required />
      </label>
      <input className="button" type="submit" value="Connexion"></input>

    </form>
  )
}

export default SignIn;