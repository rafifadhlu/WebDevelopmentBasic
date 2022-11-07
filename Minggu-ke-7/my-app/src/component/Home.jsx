import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const Navigation = useNavigate();

    let data = [
        {
        id : 1,
        name:'maya',
        age:22,
        },
        {
            id : 2,
            name:'moso',
            age:23,
        },
    ];

    const handleDetail = (id) => {
        Navigation(`/About/${id}`)
    }


    return(
    <>
    <h2>ini home</h2>
    {
        data.map((el) => {
            return (
                <div key={el.id}>
                    <h2>Nama : {el.name}</h2>
                    <button onClick={() => handleDetail(el.id)}>Detail</button>
                </div>
            );
        })
    }
    <Link to={"About/Rincian"}>About</Link>
    </>
    );
}

export default Home;