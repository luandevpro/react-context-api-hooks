import React, { useContext } from 'react';
import Context from '../contexts/Context';

export default function Use() {
	const context = useContext(Context);
	console.log(context);
	return <div>use</div>;
}
