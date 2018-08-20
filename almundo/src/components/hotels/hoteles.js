import React from 'react';
import { Button } from 'mdbreact';
import './style.css';

const Hoteles = props =>{
    let result = [];

        console.log('entro')
        for(let i =0; i < (props.start) ; i++){
            result.push((<img key={i} style={{width: 15, height: 15, margin: 3}} src={require('../../assets/icons/filters/star.svg')}></img>))
    
}
    return (
        <div>
            <div className="nav-hoteles">
                <div className="bgfiltro p-2 mt-1 align-items-center">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 text-center">
                        
                            <img src={require('../../assets/images/hotels/'+props.image) }  className="img-fliud w-100" />
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <span style={{color:'indigo'}}><b>{props.name}</b></span><br/>
                            {result}
                            <br/>

                            {props.amenities.map((item,i) =>{ 
               
                                return(
                                <img key={i} style={{width: 20, height: 20, margin: 3}} className="px-1" src={require('../../assets/icons/amenities/' + item + '.svg')} alt={item} />
                            )}
                        )}
                        </div>
                            <div className="vl"></div>
                        <div className="col-lg-3 col-sm-10 text-center p-4">
                            <hr className="d-lg-none" />
                            <p className="d-none d-md-block">Precio por noche por <br/>habitación</p>
                            <p className="d-md-none">Precio por noche por habitación</p>
                            <p className="h3 text-uppercase" style={{color:'orange'}}>ars <sront className="h1">{props.price}</sront></p>
                            <Button color="indigo" size="md" style={{fontSize: 9,}}className="px-5 w-100">Ver hotel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  
}

export default Hoteles;