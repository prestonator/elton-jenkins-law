"use client";
import styled from "styled-components";

const ServiceBlurb = styled.div`
	background: transparent;
	display: flex;
	flex-direction: column;
	align-items: ${(props) => props.alignItems || "center"};
	justify-content: center;
	flex-basis: var(--size-40);
	.icon {
		color: ${(props) => props.iconColor || "var(--color-accent)"};
		flex-basis: var(--size-5);
		font: 500 var(--size-2-5) var(--font-family-heading);
		svg {
			width: var(--size-3-5);
			height: var(--size-3-5);
		}
	}
	.heading {
		font: 500 var(--size-1-5) var(--font-family-heading);
		flex-basis: var(--size-2-5);
	}
	.content {
		font: 500 var(--size-1) var(--font-family-content);
		text-align: ${(props) => props.textAlign || "center"};
		line-height: 1.8em;
		color: var(--color-medium-gray);
		flex-basis: ${(props) => props.flexBasis || "var(--size-10)"};
	}
`;

const PracticeBlurb = (props) => {
	return (
		<ServiceBlurb {...props}>
			<div className="icon">{props.icon}</div>
			<span className="heading">{props.heading}</span>
			<p className="content">{props.content}</p>
		</ServiceBlurb>
	);
};

export default PracticeBlurb;
