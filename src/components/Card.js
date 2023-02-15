"use client";
import styled from "styled-components";
import Image from "next/image";

const TeamCard = styled.div`
	background-color: var(--color-off-white);
	.teamCardWrapper {
		position: relative;
	}
	.teamCardImageWrapper {
		position: relative;
		width: 100%;
		height: var(--sizing-xxxxl);
	}
	.teamCardImage {
		object-fit: cover;
	}
    .teamCardPanel {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        min-height: 0;
        padding: 36px 0;
    }
`;

const TeamCardComponent = (props) => {
	return (
		<TeamCard>
			<div className="teamCardWrapper">
				<div className="teamCardImageWrapper">
					<Image
						className="teamCardImage"
						src={props.headshot}
						alt={props.alt}
						fill
					/>
				</div>
				<div className="teamCardPanel">
					<span className="teamCardName">{props.name}</span>
					<p className="teamCardTitle">{props.position}</p>
					<div className="teamCardBioWrap middle">
						<p className="teamCardBio">{props.shortBio}</p>
						<span className="teamCardInto">Who {props.name} is</span>
						<p className="teamCardDetail">{props.bio}</p>
					</div>
				</div>
			</div>
		</TeamCard>
	);
};

export default TeamCardComponent;
