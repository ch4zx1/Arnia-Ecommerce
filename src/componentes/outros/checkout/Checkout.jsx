import { jogos } from "../../../assets/db";
import './Checkout.css';

function Checkout()
{
	const selecionados = sessionStorage.getItem("selecionados") || [];
	const contador_cc = sessionStorage.getItem("contador_new") || [];

	function getJogoscheckout()
	{
		const filtrar = jogos.filter(jogo => selecionados.includes(jogo.id));

		return (
			<div className="box-a">
				{filtrar.map(function(jogo)
				{
					return (
					<div key={jogo.id}>
						<img src={jogo.imagem}></img>
					</div>	
					)
				})
				}
			</div>
		)
		
	}

	return(
		<>
			<div>
				<span>Checkout</span>
				<div className="p-div">
					<span>Produtos Escolhidos:</span>
				</div>
				
				<div className="body-m">
					{getJogoscheckout()}
				</div>
				<div className="end-m">
					<span>Total produtos: {contador_cc}</span>
					<span>Total: R${contador_cc * 10},00</span>
				</div>
				<div className="c-botao">
					<button onClick={() => window.location.href = ("./")}>Confirmar Compra</button>	
				</div>
			</div>
		</>
	)
}

export default Checkout