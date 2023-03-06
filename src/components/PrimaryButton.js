"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import styled from "styled-components";

const Button = styled.button`
	cursor: pointer;
	color: ${(props) => props.color || "var(--color-black)"};
	border: 1px solid ${(props) => props.color || "rgba(0, 0, 0, 0.35)"};
	background: transparent;
	transition: var(--default-hover-transition);
	font: 600 var(--size-1-5) var(--font-family-btn);
	letter-sizing: 1px;
	text-transform: uppercase;
	padding: var(--size-0-75) var(--size-2-5);
	position: relative;
	width: fit-content;
	svg {
		position: absolute;
		opacity: 0;
		right: 60%;
		top: 50%;
		transform: translateY(-50%);
		transition: var(--default-hover-transition);
	}
	&:hover {
		background: ${(props) =>
			props.hoverBackground || "var(--color-low-opacity-black)"};
		color: ${(props) => props.hoverColor || "var(--color-accent)"};
		padding-right: var(--size-5);
		svg {
			opacity: 1;
			right: 10%;
		}
	}
`;

const ButtonPrimary = (props) => {
	const handleClick = e => {
		e.preventDefault();
		window.location.href = props.href;
	};

	return (
			<Button
				type="button"
				onClick={handleClick}
				color={props.color}
				hoverColor={props.hoverColor}
				hoverBackground={props.hoverBackground}
			>
				{props.children}
				<BsArrowRight />
			</Button>
	);
};

export default ButtonPrimary;
