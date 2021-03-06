import React from 'react';
import ProductList from './ProductList';
import Sidebar from './Sidebar';

const App = (
	() => (
		<section className="container">
			<div className="page-header text-center">
				<h1>Maquina de Doce</h1>
			</div>
			<div className="col-xs-7 col-sm-9">
				<ProductList />
			</div>
			<div className="col-xs-5 col-sm-3">
				<Sidebar />
			</div>
		</section>
	)
);

export default App;
