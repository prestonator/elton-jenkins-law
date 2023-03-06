"use client";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const Card = styled.div`
	background: var(--color-white);
	box-shadow: var(--blog-image-box-shadow);
	padding: var(--size-7-5) var(--size-5);
	width: var(--size-40);
	height: var(--size-40);
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
		width: var(--size-5);
		height: var(--size-5);
		margin-bottom: var(--size-1-5);
	}
	span {
		font: var(--size-1-25) var(--font-family-heading);
	}
	p {
		font: var(--size-1) var(--font-family-content);
	}
	.cardButton {
		margin-top: var(--size-2-5);
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
