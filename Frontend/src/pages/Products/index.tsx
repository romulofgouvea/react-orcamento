import React from "react";
import { Link } from "react-router-dom";
import { ProductsList } from "../../components";
import { Config } from "../../configs";

const Products: React.FC = () => {
	return (
		<>
			<ul className="uk-breadcrumb">
				<li>
					<Link to={`${Config.BASE_URL}/`}>Home</Link>
				</li>
				<li>
					<span>Produtos</span>
				</li>
			</ul>

			<nav className="uk-navbar">
				<div className="uk-navbar-right">
					<ul className="uk-navbar-nav">
						<li>
							<Link to={`${Config.BASE_URL}/products/create`}>
								<span uk-icon="icon: plus; ratio: 1.2"></span>{" "}
								Adicionar novo produto
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			<ProductsList />
		</>
	);
};

export default Products;
