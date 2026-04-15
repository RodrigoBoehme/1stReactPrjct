// Children representa o conteudo colocado dentro do card
import "./Card.css"
function Card({children}){
    return<div className="card">{children}</div>
}
export default Card