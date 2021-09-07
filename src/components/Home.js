import React from "react";
import "../styles.css";
import myPic from "../images/WhatsApp Image 2020-08-07 at 10.56.44 AM.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
	return (
		<div>
			<header class="d-flex justify-content-center align-items-center">
				<div class="text-center">
					<h1 class="pb-3">
						<div class="first-half">Hello, I'm</div>
						<div class="second-half">Nicholas Koay</div>
					</h1>
					<ul class="list-inline icon-list">
						<li class="list-inline-item">
							<a href="https://www.facebook.com/nicholaskfc" target="_blank" class="facebook-icon">
								<FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
							</a>
						</li>
						<li class="list-inline-item">
							<a
								href="https://www.linkedin.com/in/nicholas-koay-2b7437208/"
								target="_blank"
								class="linkedin-icon"
							>
								<FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
							</a>
						</li>
						<li class="list-inline-item">
							<a href="https://github.com/NicholasKFC" target="_blank" class="github-icon">
								<FontAwesomeIcon icon={["fab", "github"]} size="2x" />
							</a>
						</li>
						<li class="list-inline-item">
							<a href="mailto:nickoay26@gmail.com" target="_blank" class="google-icon">
								<FontAwesomeIcon icon={["fab", "google"]} size="2x" />
							</a>
						</li>
					</ul>
				</div>
			</header>
			<main>
				<section class="py-5" id="about-me">
					<div class="container">
						<h2 class="text-center pt-4">ABOUT ME</h2>
						<hr class="mx-auto" />
						<div class="text-center d-flex justify-content-center">
							<div>
								<img src={myPic} class="mb-4" />
								<p class="mx-auto">
									I'm 17 and currently living in Penang, and taking up a Software Engineering course
									by Forward School.
								</p>
								<form
									action="https://docs.google.com/document/d/11bqTF7bTpnp8Wvs1LYPM1n29lQSIsGirUK_h2jSB-D0/edit?usp=sharing"
									target="_blank"
								>
									<div class="col-7 mx-auto text-center">
										<button>VIEW MY RESUME</button>
									</div>
								</form>
								<form
									action="https://docs.google.com/document/d/1XKKPks0WD2jeMBRWSXpgkpZz2W2oBp4L3GhrOKx0nRc/edit?usp=sharing"
									target="_blank"
								>
									<div class="col-7 mx-auto text-center">
										<button>VIEW MY CV</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
				<section class="py-5" id="career-summary">
					<div class="container my-auto">
						<h2 class="text-center pt-4 ">CAREER SUMMARY</h2>
						<hr class="mx-auto" />
						<div class="text-center d-flex justify-content-center">
							<div>
								<p class="mx-auto">
									I am a Junior Full-Stack Web Developer, and hope to be a successful one in the
									future.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section class="py-5" id="philosophy-statement">
					<div class="container my-auto">
						<h2 class="text-center pt-4 ">PHILOSOPHY STATEMENT</h2>
						<hr class="mx-auto" />
						<div class="text-center d-flex justify-content-center">
							<div>
								<p class="mx-auto lead">
									“A person who never made a mistake never tried anything new.”
								</p>
								<p class="mx-auto">~ Albert Einstein</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
