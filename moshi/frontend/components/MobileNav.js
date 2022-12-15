import { Link, useResolvedPath, useMatch } from "react-router-dom";
import React from "react";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "./MobileNav.css";
const MobileNav = ({ CustomLink, signIn, signOut, handleCloseMobileNav }) => {
	return (
		<div className="w3-modal" style={{ display: "block" }}>
			<div className="w3-modal-content mobilenav w3-white w3-round" style={{height: "90%"}}>
				<div className="w3-right"><button className="w3-button w3-margin" onClick={handleCloseMobileNav}>&times;</button></div>
				<br />
				<br />
				<br />
				<a className="w3-block"><CustomLink style={{padding: "0px"}} className="w3-text-green" to="/">Home
					</CustomLink>
				</a>
				<a className="w3-dropdown-hover w3-bar-block w3-block w3-text-green">Invest
					<div
						className="w3-dropdown-content w3-bar-block w3-border"
						style={{ zIndex: 4 }}
					>
						<Link to="/hire-land" className="w3-button" onClick={handleCloseMobileNav}>Hire Farm
						</Link>
						<Link to="/partner" className="w3-bar-item w3-button" onClick={handleCloseMobileNav}>Be a Partner
						</Link>
						<Link to="/resources" className="w3-bar-item w3-button" onClick={handleCloseMobileNav}>
						Provide Farm  Tools and Equipment
						</Link>
					</div>
				</a>
				<a className="w3-block">
					<CustomLink to="/my-investments" style={{padding: "10px 0px"}} className="w3-text-green">
						My Investments
					</CustomLink>
				</a>
				<a className="w3-text-green w3-block w3-dropdown-hover">
					Farmers
					<div
						className="w3-dropdown-content w3-bar-block w3-border"
						style={{ zIndex: 4 }}
					>
						<Link to="/post-farm" className="w3-bar-item w3-button" onClick={handleCloseMobileNav}>
						Post Farm For Hire/Partnership
						</Link>
						<Link
							to="/farm-resource"
							className="w3-bar-item w3-button"
							onClick={handleCloseMobileNav}
						>
							Request Farm Resource
						</Link>
						<Link
							to="/my-investors"
							className="w3-bar-item w3-button"
							onClick={handleCloseMobileNav}
						>
							My Investors
						</Link>
					</div>
				</a>
				<a className="w3-text-green w3-block w3-dropdown-hover">
					Marketplace
					<div
						className="w3-dropdown-content w3-bar-block w3-border"
						style={{ zIndex: 4 }}
					>
						<Link
							to="/farm-produce"
							className="w3-bar-item w3-button"
							onClick={handleCloseMobileNav}
						>
							Farm Products
						</Link>
						<Link
							to="/farm-inputs"
							className="w3-bar-item w3-button"
							onClick={handleCloseMobileNav}
						>
							Farm Inputs
						</Link>
						<Link to="/sales" className="w3-bar-item w3-button" onClick={handleCloseMobileNav}>Completed Sales</Link>
					</div>
				</a>
				{window.walletisSignedIn ? (
					<a className="w3-dropdown-hover w3-block w3-text-green">
						Profile
						<div
							className="w3-dropdown-content w3-bar-block w3-border"
							style={{ zIndex: 4 }}
						>
							<Link
								to="/account"
								className="w3-bar-item w3-button"
								onClick={handleCloseMobileNav}
							>
								Account
							</Link>
						</div>
					</a>
				) : (
					<Link></Link>
				)}

				{/* <button onClick={showNavbar} className="close">
            <FaTimes />
          </button>*/}

				{window.walletisSignedIn ? (
					<button
						onClick={signOut}
						className="w3-bar-item w3-margin w3-block w3-green"
						style={{ padding: "9px", margin: "0px" }}
					>
						Log out
					</button>
				) : (
					<button onClick={signIn} className="log">
						Log in
					</button>
				)}
			</div>
		</div>
	);
};

export default MobileNav;
