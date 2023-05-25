import './Produto.css';
import { jogos } from "../../../assets/db";
import { useState } from 'react';

function Produto()
{
	const [contador, setContador] = useState(0);
	const [checkboxesSelecionados, setCheckboxesSelecionados] = useState([]);

	const handleCheckboxChange = (event) => 
	{
		const checkboxValue = event.target.value;
		if(event.target.checked)
		{
			setCheckboxesSelecionados([...checkboxesSelecionados, checkboxValue]);
			setContador(contador + 1);
		}
		else
		{
			setContador(contador - 1);
			const novosCheckboxesSelecionados = checkboxesSelecionados.filter((value) => value !== checkboxValue);
			setCheckboxesSelecionados(novosCheckboxesSelecionados);
		}
	}
 
	const salvarNoSessionStorage = () =>
	{
		sessionStorage.setItem('selecionados', JSON.stringify(checkboxesSelecionados));
		sessionStorage.setItem('contador', JSON.stringify(contador));
		window.location.href = ("./carrinho");
	};
	
	function renderJogos()
	{
		return jogos.map(function(jogos, i)
		{
			return(
				<li key={i}>
					<div className='produto'>
					<img src={jogos.imagem}/>
						<div className='desc'>
							<input type="checkbox" onChange={handleCheckboxChange} value={jogos.id} id={i}/>
							<span>Valor: R${jogos.valor}</span>
						</div>
					</div>
				</li>
			)
		})
	}
	return (
		<>
			<div className='start'>
				<span>Produtos</span>
				<div className='contador'>
					<span>{contador}</span>
				</div>
			</div>
			<div className='box-produtos'>
				{renderJogos()}
				<button onClick={salvarNoSessionStorage}>Ir para o carrinho</button>
			</div>
		</>
	)
}

export default Produto;