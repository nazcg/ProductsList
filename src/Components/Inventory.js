
import React,  { useEffect, useState} from 'react';
import axios from 'axios';



export default function Inventory (){
    const [items, setItems] = useState([]);
    const [filtro, setFiltro] = useState({
        objeto:''
    });
    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setFiltro({
            ...filtro,
            [event.target.name] : event.target.value
        })

    }
    console.log(filtro.objeto);
    useEffect(() => {
        axios
          .get("https://pz8cvzu4sl.execute-api.us-east-1.amazonaws.com/dev/product-ms/product/getProductByIdCompany?id=5e8d08fafd3f3d2eb89c5063")
          .then(response => setItems(response.data));
      }, []);

    return(
<div className="container">
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Filtrar</span>
  </div>
  <input 
    type="text" 
    class="form-control"
    name="objeto"
     onChange ={handleInputChange}
  />
</div>
        <div className="row">
            {items !== undefined ? items.filter(product=> product.Name.substring(0, filtro.objeto.length) === filtro.objeto).map((product) => {
                return (                  
                    <div className="col-3 p-2" key={product._id}>
                        <div className="card" style={{width: '100%'}}>
                            <div className="card-img-top">
                                 
                                 <img src={product.Children[0].Imgs[0].Path}  className="  card-img-top imgProduct" alt={product.Children[0].Imgs[0].Alt}/>

                            </div>
                            <div className="card-body text-center">
                            <h2 className="card-title" >{product.Name}</h2>
                            <p className="font-weight-bold">Price: {product.Children[0].Price} $</p>
                            <button className="btn btn-primary">Ordenar</button>
                            </div>
                        </div>
                    </div>
                )
            }) : <p>Please go back to home page and write correct address...</p>
            }
        </div>
    </div>
    )

}
