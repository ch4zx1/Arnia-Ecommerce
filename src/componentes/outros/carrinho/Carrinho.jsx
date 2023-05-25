import './Carrinho.css';
import { jogos } from "../../../assets/db";
import { useState } from 'react';

function Carrinho()
{
	const contador = sessionStorage.getItem("contador");
	if(contador == 0){window.location.href = ("./");}

	const selecionados = sessionStorage.getItem("selecionados") || [];

	const contador_int = parseInt(contador, 10);
	const [contador_new, setContador_new] = useState(contador_int)
	const [quantidades, setQuantidades] = useState(() => 
	{
		const initialQuantidades = {};
	
		jogos.forEach((jogo) => 
		{
			if (selecionados.includes(jogo.id)) 
			{
				initialQuantidades[jogo.id] = 1;
			}
		});
	
		return initialQuantidades;
	});

	function add(jogo)
	{
		setQuantidades((prevQuantidades) => ({...prevQuantidades,[jogo.id]: (prevQuantidades[jogo.id] || 0) + 1}));
		setContador_new((prevContador) => prevContador + 1);
	}

	function rev(jogo)
	{
		if (quantidades[jogo.id] > 0) 
		{
			setQuantidades((prevQuantidades) => ({...prevQuantidades,[jogo.id]: prevQuantidades[jogo.id] - 1}));
			setContador_new((prevContador) => prevContador - 1);
		}
	}

	const salvarNoSessionStorage = () =>
	{
		sessionStorage.clear();
		sessionStorage.setItem('selecionados', JSON.stringify(selecionados));
		sessionStorage.setItem('contador_new', JSON.stringify(contador_new));
		window.location.href = ("./checkout");
	};

	function getJogos()
	{
		const filtrar = jogos.filter(jogo => selecionados.includes(jogo.id));

		return (
			<div>
				{filtrar.map(function(jogo)
				{
					return (
					<div key={jogo.id}>
						<div className='box-itens'>
							<img src={jogo.imagem}></img>
							<div className='info-carrinho'>
								<h3>{jogo.nome}</h3>
								<h4>Valor: R${jogo.valor}</h4>
								<h4>Quantidade: {quantidades[jogo.id]}</h4>
								<div className='quantidade'>
									<button onClick={() => add(jogo)}>+</button>
									<button onClick={() => rev(jogo)}>-</button>
								</div>
							</div>
						</div>
					</div>	
					)
				})
				}
			</div>
		)
		
	}

	return(
		<>
			<div className='start'>
				<span>Carrinho</span>
				<div className='contador'>
					<span>{contador_new}</span>
				</div>
			</div>
			<div className='box-carrinho'>
				{getJogos()}		
			</div>
			<div className='end-carrinho'>
					<span>Valor: R${contador_new * 10},00</span>
					<button onClick={salvarNoSessionStorage}>Finalizar Compra</button>
				</div>
		</>
	)
}

export default Carrinho