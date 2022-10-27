import { useEffect,useState } from "react";
import axios from 'axios';


function ListDigimon (){
    const [isLoading, setLoading] = useState(true);
    const [digimon , setDigimon] = useState([])

    console.log("list Digimon");

    useEffect(() => {
        console.log("List Digimon mount");
        axios("https://digimon-api.vercel.app/api/digimon")
        .then(res =>{setDigimon(res.data)})
        setLoading(false)
        
    },[]);


return (
  <div>
    {/* <button onClick={() => setLoading(!isLoading)}>Ubah Loading</button>
    <span>{isLoading + ""}</span> */}

    {isLoading ? <span>loading</span> : digimon.map((item,index) => (
        <div key={index}>
            <img src={item.img} width={50}/>
            <h2>{item.name}</h2>
        </div>
    ))}
  </div>
)
}

export default ListDigimon;