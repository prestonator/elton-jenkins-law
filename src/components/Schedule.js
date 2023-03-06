"use client";
import styled from "styled-components";

const ScheduleForm = styled.div`
	width: 100%;
	height: 100%;
	background-color: var(--color-white);
	padding-top: var(--size-1-5);
	.title h2 {
		font: var(--size-2-5) var(--font-family-fancy);
		text-align: center;
	}
`;

const Scheduler = () => {
	return (
			<ScheduleForm>
					<div className="title">
						<h2>Free Consultation</h2>
					</div>
					<div className="scheduleWrapper">
						<iframe
							src="https://app.simplymeet.me/eltonjenkins?is_widget=1&view=compact"
							style={{ width: "100%", height: "650px" }}
							scrolling="yes"
						></iframe>
					</div>
			</ScheduleForm>
	);
};

export default Scheduler;
