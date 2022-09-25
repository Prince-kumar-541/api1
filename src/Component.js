import React from "react";
import './Component.css';

const Component = (props) =>{

    return(
        <div className="cards">
            {
                props.items.map(
                    person=>(

                        <div className="card m-4" style={{width: "18rem"}}>
                            <img src={person.avatar} className="card-img-top" alt="..."/>
                                <div className="card-body m-2">
                                    <h5 className="card-title">Name: {person.first_name} {person.last_name}</h5>
                                    <p className="card-text">E-mail: {person.email}</p>
                                    <a href="http://animalsafety.000webhostapp.com/" className="btn btn-primary">More Details</a>
                                </div>
                        </div>
                        // <div>
                        // <img src={expense.avatar} style={{width:"15%", height:"200px"}}></img>
                        // <h1>Name: {expense.first_name} {expense.last_name}</h1>
                        // <h1>Email: {expense.email}</h1><br/><br/>
                        // </div>
                    )
                )
            }
        </div>
    );
}

export default Component;