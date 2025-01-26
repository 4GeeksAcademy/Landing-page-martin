import React from "react";
const Card = () => {
    let style= {width: "18rem"};
    return (
            <>
            <div className="card mt-3 mx-auto" style={style}>
                    <img src="https://picsum.photos/seed/picsum/200/200" className="card-img-top" alt="random image"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    <div className="card-footer text-body-secondary p-3 w-100">
                                <a href="#" className="btn btn-primary">Find out more!</a>
                        </div>
                       
                    </div>
                
            </>
    )
}
export default Card