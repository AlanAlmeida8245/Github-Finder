import { UserProps } from "../types/User"
import {MdLocationPin} from "react-icons/md"
import { Link } from "react-router-dom"
import Classes from "./User.module.css"

function User({login, avatar_url, followers, following, location}: UserProps){
    return(
        <div className={Classes.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (
                   <p className={Classes.location}>
                   <MdLocationPin />
                   <span>{location}</span>
               </p>
            )}
            <div className={Classes.status}>
                <div >
                    <p>Seguidores: </p>
                    <p className={Classes.number}>{followers}</p>
                </div>
                <div>
                    <p>Seguindo: </p>
                    <p className={Classes.number}>{following}</p>
                </div>
            </div>
            <Link to={`/repos/${login}`}>Ver Melhores Projetos</Link>
        </div>
    )
}

export default User