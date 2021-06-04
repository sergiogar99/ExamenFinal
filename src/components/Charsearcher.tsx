import React, {FC, useEffect, useState} from "react";
import axios from 'axios';
import Charquote from './Charquote';
import '../styles/Style.css';

const Charsearcher:FC = () => {

    const [data,setData] = useState<any>();
    const [name,setName] = useState<string>("");
    const [url,setUrl] = useState<string>("");
    const [click,setClick] = useState<boolean>(false);
    const [control, setControl] = useState<number>(0);

    useEffect(() => {

        axios.get(url, { headers: { Authorization: `Bearer IYxetFT9RZVl8737ccR9` }})
        .then((response) => {
            setData(response.data.docs);
        })
    
    }, [url]);

    function clicked() {

        setUrl("https://the-one-api.dev/v2/character?name="+name )

        setControl(control+1)
    }

    return (

        <div>

            <div className="Searcher">
                <div className="Input">
                    <input type="text" onChange={(e) => (setName(e.target.value))} />
                </div>
                <div className="Search">
                    <button onClick={() => {clicked()}}>Search Name</button>
                </div>
            </div>

            <div className="CharacterSearch">

                {data &&
                    data.map((r: { _id: string}, index:number) => (
                        <div className="Character">

                            <div key={index}> <Charquote control={control} id = {r._id}></Charquote></div>                        
                            
                        </div>
                    ))
                }

            </div>

        </div>

    );
}

export default Charsearcher;
