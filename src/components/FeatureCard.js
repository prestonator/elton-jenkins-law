"use client";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const Card = styled.div`
	background: var(--color-white);
	box-shadow: var(--blog-image-box-shadow);
	padding: var(--sizing-xl) var(--sizing-large);
    width: var(--sizing-xxxxl);
    height: var(--sizing-xxxxl);
    display: flex;
    justify-content: center;
    align-items: center;
	.cardContent {
		display: flex;
		flex-direction: column;
		align-items: center;

        text-align: center;
	}
    .cardIcon svg {
        width: var(--sizing-large);
        height: var(--sizing-large);
        margin-bottom: var(--sizing-small);
    }
    span {
        font: var(--font-size-normal) var(--font-family-heading);
    }
    p {
        font: var(--font-size-body) var(--font-family-content);
    }
	.cardButton {
		margin-top: var(--sizing-medium);
	}
`;

const FeatureCard = (props) => {
	return (
		<Link href={props.href}>
			<Card color={props.color} backgroundColor={props.bgColor}>
				<div className="cardContent">
					<div className="cardIcon">{props.icon}</div>
					<span>{props.heading}</span>
					<p>{props.content}</p>
					<div className="cardButton">{props.hasButton}</div>
				</div>
			</Card>
		</Link>
	);
};

export default FeatureCard;
