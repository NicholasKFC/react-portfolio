import React from "react";
import "../styles.css";
import ESports from "../images/Screenshot (28).png";
import EZDate from "../images/Screenshot (4).png";
import tictactoe from "../images/Screenshot (6).png";
import Linksnet from "../images/Screenshot (25).png";

const WorkSample = () => {
	return (
		<section class="py-5" id="worksample">
			<div class="container">
				<h2 class="text-center pt-4">WORK SAMPLE</h2>
				<hr class="mx-auto" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500" />
				<div class="row">
					<div class="col-lg-6">
						<div class="box">
							<a href="https://goofy-goldberg-c517dd.netlify.app/" target="_blank">
								<img src={ESports} class="img-fluid" />
								<div class="hover-text2">
									<div>
										<h4 class="text-white">Esports</h4>
										<p class="text-white">HTML & CSS</p>
									</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="box">
							<a href="https://ezdate.herokuapp.com" target="_blank">
								<img src={EZDate} class="img-fluid" />
								<div class="hover-text2">
									<div>
										<h4 class="text-white">EZDate</h4>
										<p class="text-white">PHP & MYSQL</p>
									</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="box">
							<a href="https://nifty-beaver-e0f47f.netlify.app" target="_blank">
								<img src={tictactoe} class="img-fluid" />
								<div class="hover-text2">
									<div>
										<h4 class="text-white">Tic Tac Toe</h4>
										<p class="text-white">JavaScript</p>
									</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="box">
							<a href="https://stupefied-montalcini-15c0f4.netlify.app" target="_blank">
								<img src={Linksnet} class="img-fluid" />
								<div class="hover-text2">
									<div>
										<h4 class="text-white">Linksnet</h4>
										<p class="text-white">HTML & CSS</p>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkSample;
