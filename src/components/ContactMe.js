import React from "react";
import "../styles.css";
import BingMapsReact from "bingmaps-react";

const ContactMe = () => {
	return (
		<section class="py-5 d-flex align-items-center" id="contact">
			<div class="container">
				<h2 class="text-center pt-4">CONTACT ME</h2>
				<hr class="mx-auto" />
				<div class="container">
					<div class="row">
						<form action="mailto:nickoay26@gmail.com" target="_blank">
							<div class="text-center col-md-7 col-xs-10 mx-auto">
								<input type="email" placeholder="Name" />
							</div>
							<div class="text-center col-md-7 col-xs-10 mx-auto">
								<input type="text" placeholder="Email" />
							</div>
							<div class="text-center col-md-7 col-xs-10 mx-auto">
								<input type="text" placeholder="Phone Number" />
							</div>
							<div class="text-center col-md-7 col-xs-10 mx-auto">
								<textarea name="" type="text" placeholder="Your message"></textarea>
							</div>
							<div class="col-7 mx-auto text-center">
								<button>SUBMIT</button>
							</div>
						</form>
					</div>
					<h4 class="text-center pt-5 pb-3">Feel free to meet me here.</h4>
					<div class="row map-div">
						<BingMapsReact
							bingMapsKey="Apu3_MEs2LHkziqAemoY9PnFxbGd1fMdEya1bjek6PxWqi3gRQeNNvDEL43vpGdx"
							height="100%"
							width="100%"
							viewOptions={{
								center: { latitude: 5.429410845770621, longitude: 100.3078519759114 },
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactMe;
