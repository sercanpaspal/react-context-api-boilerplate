import counter from './reducers/counter';
import theme from './reducers/theme';

export default {
    //reducer: [reducer, intialState]
    counter: [counter, 0],
    theme: [theme, true]
}