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
        <div class ="container">
            
            <div class="card" style={{width: '100%'}}>
                <img class="card-img-top" src={pimage}/>
                <div class="card-body">
                    <h5 class="card-title">{title.toUpperCase()}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{brand}</li>
                    <li class="list-group-item">{price}</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Agregrar al Carrito</a>
                </div>
            </div>
        </div>
    )
}

export default withRouter(InventoryDescription);