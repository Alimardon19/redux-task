
function LavozimReducer(state = {
    lavozimlar: [
        {id: 1, nomi: 'Teamleader', maosh: 1000},
        {id: 2, nomi: 'Manager', maosh: 1500},
        {id: 3, nomi: 'Developer', maosh: 2000},
    ]
}, action) {
    switch (action.type) {

        case 'ADD_POSITION':
            let save = [...state.lavozimlar];
            save.push({...action.payload, id: state.lavozimlar.length + 1});
            return {...state, lavozimlar: [...save]}

        case 'DELETE_POSITION':
            let delete_position = [...state.lavozimlar];
            delete_position.splice(action.payload, 1);
            return {...state, lavozimlar: delete_position}

        case 'EDIT_POSITION':
            console.log(action.payload)
            const arr = state.lavozimlar.map((item) => {
                if (item.id === action.payload.id) {
                    item = {
                        ...state,
                        id: action.payload.id,
                        nomi: action.payload.nomi,
                        maosh: action.payload.nomi
                    }
                }
                return item
            })
            console.log(arr);
            return state = {...state, lavozimlar: arr}
    }
    return state
}


export default LavozimReducer;