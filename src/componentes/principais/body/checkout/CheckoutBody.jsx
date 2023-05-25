import './CheckoutBody.css';
import Header from '../../header/Header.jsx';
import Fotter from "../../fotter/Fotter.jsx";
import Checkout from '../../../outros/checkout/checkout.jsx';

function CheckoutBody()
{
	return (
		<div>
			<Header/>
			<div className="body-q">
				<Checkout/>
			</div>
			<Fotter/>
		</div>
	)
}

export default CheckoutBody;