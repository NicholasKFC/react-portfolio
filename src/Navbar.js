import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const TopNav = () => {
	return (
		<Navbar variant="dark" expand="lg">
			<Navbar.Toggle aria-controls="navbarScroll" />
			<Navbar.Collapse id="navbarScroll">
				<Nav className="my-1 mx-auto" navbarScroll>
					<Link to="/" className="nav-link">
						HOME
					</Link>
					<Link to="/skills" className="nav-link">
						SKILLS
					</Link>
					<Link to="/academicstudy" className="nav-link">
						ACADEMIC STUDY
					</Link>
					<Link to="/awards" className="nav-link">
						AWARDS
					</Link>
					<Link to="/worksample" className="nav-link">
						WORK SAMPLE
					</Link>
					<Link to="/contactme" className="nav-link">
						CONTACT ME
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
export default TopNav;
