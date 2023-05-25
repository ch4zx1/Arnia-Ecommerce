import './ProdutoBody.css';
import Produto from '../../../outros/produto/produto.jsx';
import Header from '../../header/Header.jsx';
import Fotter from "../../fotter/Fotter.jsx";

function ProdutoBody()
{
	return (
		<div>
			<Header/>
			<div className="body-p">
				<Produto/>
			</div>
			<Fotter/>
		</div>
	)
}

export default ProdutoBody