import { withRouter } from 'react-router-dom';
import React,  { useEffect, useState} from 'react';
import axios from 'axios';


function Inventory (props){
    const [items, setItems] = useState([]);
    const [filtro, setFiltro] = useState({
        objeto:''
    });
    const [footer, setFooter] = useState(true);
    const [dulces, setDulces]= useState([]);
    const [bebidas, setBebidas] = useState([]);
    const [alcohol, setAlcohol] = useState([]);
    const [arrayProducts, setArrayProducts] = useState();

    useEffect(() => {
        axios
          .get("https://pz8cvzu4sl.execute-api.us-east-1.amazonaws.com/dev/product-ms/product/getProductByIdCompany?id=5e8d08fafd3f3d2eb89c5063")
          .then(response => {setItems(response.data);
                            setArrayProducts(response.data);
        });

      }, []);

    const btnDetail = (product) => {
        const pdpProduct = product;
        props.history.push({
            pathname: 'InventoryDescription',
            state: pdpProduct
        });

        console.log(pdpProduct);
    }
    
    const Dulce = (index)=>{
        setDulces ([
            ...dulces, items[index]
        ]);
        items.splice(index, 1);
        Products();
     
    }
    const Bebida = (index)=> {
        setBebidas ([
            ...bebidas, items[index]
        ]);
        items.splice(index, 1);
        Products();
      
    }
    const Alcohol = (index)=> {
        setAlcohol ([
            ...alcohol, items[index]
        ]);
        items.splice(index, 1);
        Products();
    }

    const Products = () => {
        setFooter(true);
        let newArray = []
        newArray = items.map(product =>{
            //console.log(product);
            return product;
        })
        setArrayProducts(newArray);
    }

    const btnShowCategory = (e) =>{
        setFooter(false);
        const {target} = e;
        const {value} = target;
        let Category = [];

        switch(value){
            case "dulces":
              Category = dulces.map(product =>{
              return product;});

                break;
            case "bebidas":
              Category = bebidas.map(product =>{
                return product;});
                
                break;
            case "alcohol":
              Category = alcohol.map(product =>{
                return product;});
                
                break;
             default:
               break;
               
        }
        setArrayProducts(Category);
    }

    
    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setFiltro({
            ...filtro,
            [event.target.name] : event.target.value
        })

    }
    // console.log(filtro.objeto);


      console.log(dulces);
    return(
        
        <div className="container">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Filtrar</span>
                </div>
                <input 
                    type="text" 
                    class="form-control"
                    name="objeto"
                    onChange ={handleInputChange}
                 />

                <button className="btn btn-outline-primary" value ="regresar" onClick ={Products}>Regresar</button>
                <button className="btn btn-outline-primary" value ="dulces" onClick ={btnShowCategory}>Dulces</button>
                <button className="btn btn-outline-primary" value ="bebidas" onClick ={btnShowCategory}>Bebidas</button>
                <button className="btn btn-outline-primary" value ="alcohol"onClick ={btnShowCategory}>Alcohol</button>

            </div>
                <div className="row">
                    {arrayProducts !== undefined ? arrayProducts.filter(product=> product.Name.toLowerCase().substring(0, filtro.objeto.length) === filtro.objeto.toLowerCase()).map((product, index)  => {
                    return (                  
                    <div className="col-4 p-3" key={product._id}>

                        <div className="card" style={{width: '100%'}}>
                            <div style={{height: '500px'}} align = "center" className="row d-flex align-items-center">
                                <div class="col-12">
                                 
                                     <img style={{width: '100%', maxHeight: '400px'}} src={product.Children[0].Imgs[0].Path}  className="card-img-top imgProduct" alt={product.Children[0].Imgs[0].Alt}/>
                                 </div>

                                <div class="col-12">
                                     <h2 className="card-title" >{product.Name}</h2>
                                 </div>

                            </div>
                            <div className="card-body text-center">
                                <p className="font-weight-bold">Price: {product.Children[0].Price} $</p>
                            {footer?
                            <div>
                            
                            <div class="row" >
                                <div class="col-12 p-2">
                                    <button className="btn btn-outline-primary m-1" onClick ={()=>Dulce(index)}>Dulces</button>
                                
                                    <button className="btn btn-outline-primary m-1" onClick ={()=>Bebida(index)}>Bebidas</button>
                                  
                                    <button className="btn btn-outline-primary m-1" onClick ={()=>Alcohol(index)}>Alcohol</button>
                                </div>  
                                <div class="col-12">
                                    <button class="btn btn-outline-success" onClick ={()=>btnDetail(product)}>Ver mas</button>
                                </div>
                            </div>
                            </div>:console.log(footer)}
                            
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

export default withRouter(Inventory);