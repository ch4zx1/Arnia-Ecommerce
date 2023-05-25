import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProdutoBody from "./componentes/principais/body/produtos/ProdutoBody.jsx";
import CarrinhoBody from "./componentes/principais/body/carrinho/CarrinhoBody.jsx";
import CheckoutBody from "./componentes/principais/body/checkout/CheckoutBody.jsx";

import './App.css';

function App() 
{
  return (
	<div>
		<BrowserRouter>
            <Routes>
                <Route path="/" element={<ProdutoBody/>}/>
				<Route path="/carrinho" element={<CarrinhoBody/>}/>
				<Route path="/checkout" element={<CheckoutBody/>}/>
            </Routes>
        </BrowserRouter>
	</div>  )
}

export default App