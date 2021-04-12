import React from "react";

const Header = () =>{
	return(
		<header>
			<div className="container">
				<div className="row align-items-stretch justify-content-between">
					<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
						<a href="/" className="navbar-brand">Epayco</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>							
						</button>
						<div className="collapse navbar-collapse" id="navbarCollapse">
							<ul className="navbar-nav mr-auto">
							   <li className="nav-item dropdown">
								   <img src="data:image/png;base64,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"  className="nav-link dropdown-toggle img-fluid" height="70px"
                                    width="70px" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false" />
							   </li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
