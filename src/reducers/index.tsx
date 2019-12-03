import useCounter from './useCounter';
import { useCombineReducer } from './useCombineReducer';

const reducers = useCombineReducer({
	counter: useCounter,
});

export default reducers;
