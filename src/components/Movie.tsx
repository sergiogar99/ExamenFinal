import React, {FC, useEffect, useState} from "react";
import axios from 'axios';
import '../styles/Style.css';

const Movie: FC<{ id: string }> = ({ id }) => {

    const [data,setData] = useState<any>();
    const [url,setUrl] = useState<string>("https://the-one-api.dev/v2/movie/" + id);

    useEffect(() => {

        axios.get(url, { headers: { Authorization: `Bearer IYxetFT9RZVl8737ccR9` }})
        .then((response) => {
            setData(response.data.docs);
        })
    
    }, [url]);

    return (

        <div>

            {data &&
                data.map((r: { name: string }, index:number) => (
                    <div className="Datacountry">
                        <div key = {index}>{"Film: " + r.name}</div>
                    </div>
                ))
            }

        </div>

    );
}

export default Movie;
