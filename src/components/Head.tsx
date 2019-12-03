import React from 'react';

interface Props {
	title: string;
	description?: string;
}

export default function Head({ title, description = 'hi' }: Props) {
	return (
		<div>
			<div>{title}</div>
			<div>{description}</div>
		</div>
	);
}
