import React, {Component} from 'react';
import jsonpath from '../Data/Prueba.json';
// import './products.css';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            itemsAdded: JSON.parse(localStorage.getItem('itemsPlus')) != null ? JSON.parse(localStorage.getItem('itemsPlus')) : [],
            total: localStorage.getItem('totalPlus') != null ? parseFloat(localStorage.getItem('totalPlus')) : 0.00,
            isLoaded: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickAdded = this.handleClickAdded.bind(this);
        this.handleClickSend = this.handleClickSend.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this);
        this.handleClickDelete= this.handleClickDelete.bind(this);

    }
    
    componentDidMount(){
        fetch(jsonpath)
        .then(response => response.json())
        .then((findresponse) =>{
            console.log(findresponse);
            this.setState({
                isLoaded: true,
                items: findresponse, 
            })
        });
    }
        
    handleClick(e){ 
        let id = e.target.id;
         let name = e.target.attributes.getNamedItem('data-name').value; //retorna valor
         let price = e.target.attributes.getNamedItem('data-price').value;
         
         let image = e.target.attributes.getNamedItem('data-image').value;
         let type = e.target.attributes.getNamedItem('data-type').value;
         
         let importe = parseFloat(price.substring(1))
         let sum = parseFloat(this.state.total + importe);

        let menuAdded = this.state.itemsAdded;
        let totalAddedNew = parseFloat(this.state.total);

         this.setState({
            itemsAdded: [...menuAdded, {
                id:id,
                price: importe,
                image:image,
                name: name,
                type:type,
            }],
            total: sum
        })
        document.getElementById('importe-total').innerHTML = '$'+ (totalAddedNew + importe)
        localStorage.setItem('itemsPlus', JSON.stringify([...menuAdded, {
            id: id,
            price: importe,
            image: image,
            name: name,
            type: type}])
        );
        localStorage.setItem('totalPlus',sum);
        //console.log(this.state.itemsAdded)
      };
    handleClickSend(){
        console.log(this.state.itemsAdded)
        console.log(this.state.total)
    }
    handleClickCancel(){
        //Limpiamos state added items y local storage
        localStorage.clear();
        window.location.reload();
    }
    handleClickAdded(){
        // console.log('ok')
        
       
    }
    handleClickDelete(item){
        const data = this.state.itemsAdded.filter(i => i.id !== item.id)
        console.log(data)
        // this.setState({data})
        // alert('ok2')
      }

    render()
    {
        var { isLoaded, items,total,itemsAdded} = this.state;
        if(!isLoaded){
            return(
                <LoaderProducts />
                )
        } 
        else if(window.location.href.includes('breakfast')){
            return(
                <React.Fragment>
                <div className="order-menu">
                <ProductList key={1 + Math.random() * (100 - 1)} items={items} category={'breakfast'} handleClick={this.handleClick}/>
                </div>
                    {/* bloque total  */}
                <div className='total'>
                    <TotalDesc/>
                    {/* lista de productos agregados */}
                    <div className="menuAdded">
                        <div className="list-menu" >
                            <ProductAdded itemsAdded={itemsAdded} handleClickAdded={this.handleClickAdded}/> 
                        </div>
                            <TotalAdded total={total}/>
                    
                    </div>
                    {/* botones de accion  */}
                    <ButtonsOrder handleClickCancel={this.handleClickCancel} handleClickSend={this.handleClickSend}/>
                </div>
            </React.Fragment>
            );
        }else if(window.location.href.includes('hamburger')){
            return(
                <React.Fragment>
                <div className="order-menu">
                <ProductList key={1 + Math.random() * (100 - 1)} items={items} category={'hamburguer'} handleClick={this.handleClick}/>
                </div>
                    {/* bloque total  */}
                <div className='total'>
                    <TotalDesc/>
                    {/* lista de productos agregados */}
                    <div className="menuAdded">
                        <div className="list-menu">
                            <ProductAdded itemsAdded={itemsAdded} handleClickAdded={this.handleClickAdded}/> 
                        </div>
                            <TotalAdded total={total}/>
                        
                    </div>
                    {/* botones de accion  */}
                    <ButtonsOrder handleClickCancel={this.handleClickCancel} handleClickSend={this.handleClickSend}/>
                </div>
            </React.Fragment>
            );
        }else if(window.location.href.includes('drinks')){
            return(
                <React.Fragment>
                <div className="order-menu">
                <ProductList key={1 + Math.random() * (100 - 1)} items={items} category={'drinks'} handleClick={this.handleClick}/>
                </div>
                    {/* bloque total  */}
                <div className='total'>
                    <TotalDesc/>
                    {/* lista de productos agregados */}
                    <div className="menuAdded">
                        <div className="list-menu">
                            <ProductAdded itemsAdded={itemsAdded} handleClickAdded={this.handleClickAdded}/> 
                        </div>
                            <TotalAdded total={total}/>
                        
                    </div>
                    {/* botones de accion  */}
                    <ButtonsOrder handleClickCancel={this.handleClickCancel} handleClickSend={this.handleClickSend}/>
                </div>
            </React.Fragment>
            );
        }  
    }
}

class ProductList extends Component{
    render(){
        return(
        this.props.items.filter(item => item.type === this.props.category).map((item,i) => 
            <React.Fragment>
                <div className=" ">
                    <button 
                        key={i} 
                        id={ item.id} 
                        data-image={item.image}
                        data-name={item.name}
                        data-type={item.type}
                        data-price={item.price}
                        onClick={this.props.handleClick}
                        > click
                    </button>
                    <div className=" ">
                        <div className="border-img">
                        <img src={item.image}></img>
                        </div>
                    </div>
                    <div className=" ">
                        <p className=" ">{item.name}</p>
                        <p className=" ">{item.price}</p>
                    </div>
                </div> 
            </React.Fragment>
        )
        )
    }
}
class TotalDesc extends Component{
    render (){
        return(
            <ul className="total-description">
                <li className="nav-menu_total"><span className="total-title">Cantidad</span></li>
                <li className="nav-menu_total"><span className="total-title">Producto</span></li>
                <li className="nav-menu_total"> <span className="total-title">Precio</span></li>
            </ul>
        )
    }
 }
 class ProductAdded extends Component{
     render(){
         return(
            this.props.itemsAdded.map((item,i) => 
            <div>
                <div className="card-main" key={i} id={item.id} onClick={this.props.handleClickAdded(this, item.id)}>
                    <div className="card-content">
                        <p className="number">1</p>
                        <p className="item_product">{item.name}</p>
                        <p className="item_price">{item.price}</p>
                        {/* <button className="cancel-product" id={item.id} onClick={this.props.handleClickDelete}><img src={cancel} alt="delete" className="img-cancel" /></button> */}
                    </div>
                </div>
            </div>     
            )  
         )
     }
 }
 
  class TotalAdded extends Component{
      render(){
          return(
            <div className="total-products">
            <span>Total</span>
            <p id="price__total">${this.props.total}</p>
            </div>
          )
      }
 
  }
  class ButtonsOrder extends Component{
      render(){
          return(
            <div className="buttons-order">
                <button className="btn-cancel" onClick={this.props.handleClickCancel}>Cancelar orden</button>
                <button className="btn-send" onClick={this.props.handleClickSend}>Confirmar orden</button>
            </div> 
          )
      }
  }

  class LoaderProducts extends Component{
      render (){
          return(
            <div className="wpLoader">
            <div id="loading"></div>
            <span>Cargando...</span>
            </div>
          )
      }
  }
  export default Menu;















