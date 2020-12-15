import React,  { useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';

function InventoryDescription (props){

const [pimage, setPImage] = useState("");
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState("");
const [brand, setBrand] = useState("");

 
    useEffect(() => {
        if (props.location.state) {
            const estado = props.location.state;
            setPImage(estado.Children[0].Imgs[0].Path);
            setTitle(estado.Name);
            setDescription(estado.Description);
            setPrice(estado.Children[0].Price + " $");
            setBrand(estado.Brand);
            console.log(estado);
        }else{
            alert('error');
        }
        
    }, [props.location.state]);

    return(
        <div  align = "center" class ="container">
            
            <div class="card text-white bg-dark" style={{width: '40%'}}>
            <div class="card-body">
                    <h1 class="card-title">{title.toUpperCase()}</h1>
                <img class="card-img-top" src={pimage} style={{width: '90%'}}/>
                <div class="card-body">
                    <p class="card-text" style={{fontSize: '35px'}}>{description}</p>
                </div>
                <div class="row" style={{fontSize: '30px'}}>

                    <div class="col-12">

                        <label class="">{brand}</label>
                        
                    </div>

                    <div class="col-12">
                        
                        <label class="">{price}</label>
                        
                    </div>

                </div>
                
                <div class="card-body">
                    <a href="#" class="btn btn-outline-light">Agregrar al Carrito</a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(InventoryDescription);