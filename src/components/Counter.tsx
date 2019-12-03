import React, { useContext } from 'react';
import Context from '../contexts/Context';
import * as actions from '../actions';

export default function Counter() {
	const [context, dispatch] = useContext(Context);
	return (
		<div>
			<h1>{context.counter}</h1>
			<button onClick={() => dispatch(actions.incre(1))}>decre</button>
		</div>
	);
}
