import vecImg from './img2/imagenes'
const ItemListContainer = ({name,imgN,price}) => {
  return (
    <>
    <div>
    <p className="cardLeft">{name}</p>
    <img src={vecImg[imgN]} alt="Peluche" width="250" height="250"></img>
    <span className="cardRight">${price}</span>
    </div>
    
    </>
  )
}
export default ItemListContainer