
export default function(state = 42, action) {
    switch(action.type) {
        case 'SELECTION':
            return action.payload;
    }
    return state;
}