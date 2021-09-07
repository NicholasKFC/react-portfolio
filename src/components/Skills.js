import React from "react";
import { ProgressBar } from "react-bootstrap";
import "../styles.css";

const Skills = () => {
	return (
		<section class="py-5" id="skills">
			<div class="container">
				<h2 class="text-center pt-4">SKILLS</h2>
				<hr class="mx-auto" />
				<div class="row text-center">
					<div class="col-lg-5 my-auto ">
						<h6>HTML5</h6>
					</div>
					<div class="col-lg-7 my-3">
						<ProgressBar animated now={99} variant="info" label="99%" />
					</div>
				</div>
				<div class="row text-center">
					<div class="col-lg-5 my-auto ">
						<h6>CSS</h6>
					</div>
					<div class="col-lg-7 my-3">
						<ProgressBar animated now={90} variant="info" label="90%" />
					</div>
				</div>
				<div class="row text-center">
					<div class="col-lg-5 my-auto ">
						<h6>JavaScript</h6>
					</div>
					<div class="col-lg-7 my-3">
						<ProgressBar animated now={80} variant="info" label="80%" />
					</div>
				</div>
				<div class="row text-center">
					<div class="col-lg-5 my-auto ">
						<h6>MySQL</h6>
					</div>
					<div class="col-lg-7 my-3">
						<ProgressBar animated now={80} variant="info" label="80%" />
					</div>
				</div>
				<div class="row text-center">
					<div class="col-lg-5 my-auto ">
						<h6>PHP</h6>
					</div>
					<div class="col-lg-7 my-3">
						<ProgressBar animated now={80} variant="info" label="80%" />
					</div>
				</div>
				<div class="row text-center">
					<div class="col-lg-5 my-auto ">
						<h6>React</h6>
					</div>
					<div class="col-lg-7 my-3">
						<ProgressBar animated now={70} variant="info" label="70%" />
					</div>
				</div>
				<div class="row text-center">
					<div class="col-lg-5 my-auto ">
						<h6>Angular</h6>
					</div>
					<div class="col-lg-7 my-3">
						<ProgressBar animated now={50} variant="info" label="50%" />
					</div>
				</div>
				<div class="row text-center">
					<div class="col-lg-5 my-auto ">
						<h6>Android Studio</h6>
					</div>
					<div class="col-lg-7 my-3">
						<ProgressBar animated now={10} variant="info" label="10%" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
