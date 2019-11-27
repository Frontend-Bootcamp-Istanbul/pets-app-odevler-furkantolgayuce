import React from 'react';
import {Sidebar, PetList, Pet} from "../components";
import {getPetsDetay} from "../constants";



class Detay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            _pet: [],
            yukleniyor: true
        }
    }

    componentDidMount(){

        getPetsDetay(this.props.match.params.id).then((data) => {
            this.setState({
                _pet: data,
                yukleniyor: false
            })
        })
    }

    render(){
        const {name, image, age, description, breed, published_at} = this.state._pet;
        return (

            <div className="row my-5">
            <div className="col"></div>
            <div className="col-8">
                <div className="row">

                    <div className="col-md-4">
                        <img className="img-fluid" src={image} alt="" style={{height: "292px", width: "auto"}}/>
                    </div>

                    <div className="col-md-8">
                        <h3 className="my-3">{name}</h3>
                        <p>{description}</p>
                        <div>
                            <span className="badge badge-primary" style={{fontSize: "12px"}}>{breed}</span>
                            <span className="badge badge-warning mx-2" style={{fontSize: "12px"}}>{age}</span>
                        </div>
                    </div>

                </div>

            </div>
                <div className="col"></div>
            </div>

        );
    }
}

export default Detay;
