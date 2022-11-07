import { useParams } from "react-router-dom";
import { Outlet,Link } from "react-router-dom";


const About = () => {
    const {id} = useParams();
    console.log(id);

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

    return(
    <>
    <Link to={"Rincian"}>Rincian</Link>
    <Outlet/>
    {
        data.filter((el) => el.id == id ).map((el) => {
            return(
                <div key={el}>
                    <h2>
                        name : {el.name}
                    </h2>
                    <h2>
                        name : {el.age}
                    </h2>
                </div>
            )
        })
    }
    </>
    );
}

export default About;