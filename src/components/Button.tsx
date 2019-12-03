import React, { useContext } from 'react';
import Context from '../contexts/Context';

type Props = {
	onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Button: React.FC<Props> = ({ onClick }) => {
	const [context, dispatch] = useContext(Context);
	return (
		<div onClick={onClick}>
			<h1>{context.counter}</h1>
		</div>
	);
};

export default Button;
