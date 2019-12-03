interface State {}

interface Action {
	type: string;
	payload: any;
}

const useCounters = (state: State, action: Action) => {
	switch (action.type) {
		case 'incre':
			return state + action.payload;
		default:
			return state;
	}
};

export default useCounters;
