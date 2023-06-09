import Search from "../components/Search";
import { useState } from "react";
import { UserProps } from "../types/User";
import  User from "../components/User"

import Erro from "../components/Erro";

function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<boolean>(false)

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null)
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if(res.status === 404){
        setError(true)
        return;
    }

    const {avatar_url, login, location, followers, following} = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Erro />}
    </div>
  );
}

export default Home;
