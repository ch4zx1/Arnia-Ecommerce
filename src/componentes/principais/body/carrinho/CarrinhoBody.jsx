import './CarrinhoBody.css';
import Header from '../../header/Header.jsx';
import Fotter from "../../fotter/Fotter.jsx";
import Carrinho from '../../../outros/carrinho/carrinho.jsx';

function CarrinhoBody()
{
	return (
		<div>
			<Header/>
			<div className="body-c">
				<Carrinho/>
			</div>
			<Fotter/>
		</div>
	)
}

export default CarrinhoBody;