'use client';

import { useState } from 'react';

export default function TestBtn() {
	const [count, setCount] = useState(0);
	const addCount = () => {
		setCount(count + 1);
	};

	return <button onClick={addCount}>{count}</button>;
}
