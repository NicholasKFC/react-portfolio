import React from "react";
import "../styles.css";

const Awards = () => {
	return (
		<section class="py-5" id="awards">
			<div class="container">
				<h2 class="text-center pt-4">AWARDS</h2>
				<hr class="mx-auto" />
				<div class="d-flex justify-content-center">
					<div class="text-center">
						<div class="edutext">
							<h5>Forward School 2021 Hackathon</h5>
							<p class="lead">1st Place</p>
						</div>
						<div class="edutext">
							<h5>Malaysia Open Karate Championship 2019</h5>
							<p class="lead">Gold</p>
						</div>
						<div class="edutext">
							<h5>Penang Junior Open Karate Championship 2019</h5>
							<p class="lead">Silver</p>
						</div>
						<div class="edutext">
							<h5>National Cadet Karate Championship 2018</h5>
							<p class="lead">Bronze</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Awards;
