import './Fotter.css';

function Fotter()
{
	return(
		<div className='Fotter'>
			<span>Meios de pagamento:</span>
			<div className='imagens'>
				<img className='visa' src='.\src\assets\visa.png'/>
				<img className='master' src='.\src\assets\master_card.png'/>
				<img className='boleto' src='.\src\assets\boleto.png'/>
				<img className='hipercard' src='.\src\assets\hipercard.png'/>
			</div>
		</div>
	)
}

export default Fotter