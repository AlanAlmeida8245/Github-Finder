
import Classes from "./Repos.module.css"

 type ReposProps = {
    name: string,
    html_url: string,
    full_name: string,
    created_at: string,
    description: string,
    watchers: number,
    forks: number
}


function Repos({name, html_url, full_name, created_at, description, watchers, forks}: ReposProps) {
    //Formtar Data
    const data = new Date(created_at);
const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
const ano = String(data.getFullYear());
const dataFormatada = `${dia}/${mes}/${ano}`;
///////////////////////////////////

    return (
     
            <div className={Classes.card}>
                        <div className={Classes.top_card}>
            
                                <h1>{name}</h1>
                                <p>{full_name}</p>
            
                            <p className={Classes.data}>Criado em {dataFormatada}</p>
                            <div className={Classes.status}>
                            <div >
                                    <p>Visitas: </p>
                                    <p className={Classes.number}>{watchers}</p>
                            </div>
                            <div>
                                    <p>Forks: </p>
                                    <p className={Classes.number}>{forks}</p>
                             </div>
                            </div>
                        </div>
                        {description && (
                             <div className={Classes.body_card}>
                                <p>Descrição: </p>
                              <h2>{description}</h2>
                          </div>
                        )}
                        <div className={Classes.bottom_card}>
                            <a href={html_url} target="_blank"><button className={Classes.btn}>Acessar Repositorio</button></a>
                        </div>
            
            </div>
   
    )
}

export default Repos