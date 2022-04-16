
function DarajaReducer(state = {
    daraja: [
        {id: 1, nomi: 'Junior', bonus: 10},
        {id: 2, nomi: 'Middle', bonus: 15},
        {id: 3, nomi: 'Senior', bonus: 30},
    ]
}, action) {
    switch (action.type) {
        case 'DELETE_LEVEL':
            let delete_level = [...state.daraja];
            delete_level.splice(action.payload,1);
            return state = {...state, daraja: delete_level}

        case 'ADD_LEVEL':
            let saveLevel = [...state.daraja];
            saveLevel.push({...action.payload, id: state.daraja.length + 1});
            return state = {...state, daraja: saveLevel}

        case 'EDIT_LEVEL':
            let edit_level = state.daraja.map((item)=> {
                if (item.id === action.payload.id) {
                    item = {
                        ...state,
                        id: action.payload.id,
                        nomi: action.payload.nomi,
                        bonus: action.payload.bonus
                    }
                }
                return item
            })
            return state = {...state, daraja: edit_level}
    }

    return state;
}

export default DarajaReducer;