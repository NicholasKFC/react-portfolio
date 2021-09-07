import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<footer class="py-4 d-flex align-items-center">
			<div class="container">
				<div class="row">
					<ul class="list-inline icon-list">
						<li class="list-inline-item">
							<a href="https://www.facebook.com/nicholaskfc" target="_blank" class="facebook-icon">
								<FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
							</a>
						</li>
						<li class="list-inline-item">
							<a href="https://www.instagram.com/nicholaskfc/" target="_blank" class="instagram-icon">
								<FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
							</a>
						</li>
						<li class="list-inline-item">
							<a href="https://github.com/NicholasKFC" target="_blank" class="github-icon">
								<FontAwesomeIcon icon={["fab", "github"]} size="2x" />
							</a>
						</li>
					</ul>
				</div>

				<p class="text-white text-center small">Created by Nicholas</p>
			</div>
		</footer>
	);
};
export default Footer;
