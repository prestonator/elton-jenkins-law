"use client";
import styled from "styled-components";

const ServiceBlurb = styled.div`
	background: transparent;
	display: flex;
	flex-direction: column;
	align-items: ${(props) => props.alignItems || "center"};
	justify-content: center;
	flex-basis: var(--sizing-xxxxl);
	.icon {
		color: ${(props) => props.iconColor || "var(--color-accent)"};
		flex-basis: var(--sizing-large);
        font: 500 var(--font-size-title) var(--font-family-heading);
		svg {
			width: var(--font-size-large);
			height: var(--font-size-large);
		}
	}
	.heading {
		font: 500 var(--font-size-medium) var(--font-family-heading);
		flex-basis: var(--sizing-medium);
	}
	.content {
		font: 500 var(--font-size-body) var(--font-family-content);
		text-align: ${(props) => props.textAlign || "center"};
		line-height: 1.8em;
		color: var(--color-medium-gray);
        flex-basis: ${(props) => props.flexBasis || "var(--sizing-xxl)"};
	}
`;

const PracticeBlurb = (props) => {
	return (
		<ServiceBlurb
			iconColor={props.iconColor}
			alignItems={props.alignItems}
			textAlign={props.textAlign}
            flexBasis={props.flexBasis}
		>
			<div className="icon">{props.icon}</div>
			<span className="heading">{props.heading}</span>
			<p className="content">{props.content}</p>
		</ServiceBlurb>
	);
};

export default PracticeBlurb;
