import {useState} from "react";

const form = () =>{
    const [name, setName] = useState("");

    return (
        <>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </form>
        </>
    );
};

export default form;