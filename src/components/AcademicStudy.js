import React from "react";
import "../styles.css";

const AcademicStudy = () => {
	return (
		<section class="py-5" id="academicstudy">
			<div class="container">
				<h2 class="text-center pt-4">ACADEMIC STUDY</h2>
				<hr class="mx-auto" />
				<div class="d-flex justify-content-center">
					<div class="text-center">
						<div class="edutext">
							<h4>
								<a href="https://www.forwardschool.co" target="_blank">
									Forward School
								</a>
							</h4>

							<p class="lead">Oct 2020 - Oct 2022</p>
							<p>Applied Software Engineering</p>
						</div>
						<div class="edutext">
							<h4>
								<a href="https://clphs.edu.my" target="_blank">
									Chung Ling Private High School
								</a>
							</h4>

							<p class="lead">Jan 2016 - Feb 2020</p>
							<p>IGCSE - 6A's 2B's</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AcademicStudy;
