import CartWidget from './CartWidget'; <CartWidget/>

const NavBar = () => {
  return (
    <header>
    <div className="navbar bg-base-100 navBarC">
        <div className="flex-1">
        <a className="navbar" href="index.html">
                <img src="../img/TRlogo.png" className="logo" alt="logito"/>
        </a>
            
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li><a href="../../public/pages/productos.html">Productos</a></li> 
                <li><a href="../../public/pages/contacto.html">Contacto</a></li>
                <li><a href="../../public/pages/carrito.html">Carrito <CartWidget/></a></li>
                
        </ul>
        </div>
    </div>
    </header>
  )
}
export default NavBar