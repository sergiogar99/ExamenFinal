import React, {FC, useEffect, useState} from "react";
import axios from 'axios';
import Movie from './Movie';
import '../styles/Style.css';


const Charquote: FC<{ id: string, control:number}> = ({ id,control}) => {

    const [data,setData] = useState<any>();
    const [url,setUrl] = useState<string>("https://the-one-api.dev/v2/character/" + id +"/quote");
    //https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfea0/quote

    useEffect(() => {

        axios.get(url, { headers: { Authorization: `Bearer IYxetFT9RZVl8737ccR9` }})
        .then((response) => {
            setData(response.data.docs);
        })
    
    }, [url,control]);

    let index = null;

    if(data){

        index = Math.floor(Math.random() * (data.length + 1));
    }
    
    return (

        <div>

            {data && 

                <div>

                    {index ? data[index].dialog : null}
                    {index ? <Movie id = {data[index].movie}></Movie> : null}

                </div>
            
            }

        </div>

    );
}

export default Charquote;
