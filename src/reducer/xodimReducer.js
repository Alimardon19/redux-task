

export default function XodimReducer(state = {
    xodimlar: [
        {id: 1, name: "Mark", surname: "Otto", phone: 123456, position: 'Jamoa sardori', level: "Senior"},
        {id: 2, name: "Jacob", surname: "Throton", phone: 123456, position: 'Developer', level: "Middle"},
        {id: 3, name: "Larry", surname: "theBrid", phone: 123456, position: 'Developer', level: "Junior"},
    ]
}, action) {
    switch (action.type) {
        case 'ADD':
            const {xodimlar} = state;
            xodimlar.push({...action.payload, id: xodimlar.length + 1} )
            return {...state};

        case 'EDIT':
            const ar = state.xodimlar.map((item, index)=> {
                if (item.id === action.payload.id) {
                    item = {
                        ...item,
                        id: action.payload.id,
                        name: action.payload.name,
                        surname: action.payload.surname,
                        position: action.payload.position,
                        phone: action.payload.phone,
                        level: action.payload.level
                    }
                }
                return item
            });
            state = { ...state, xodimlar:ar};
            break;

        case 'DELETE_USER':
            let del = [...state.xodimlar]
            del.splice(action.payload, 1)
            state = { ...state, xodimlar: del}
            break;
        default: return state;
    }
    return state
}