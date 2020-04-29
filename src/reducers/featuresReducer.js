import {REMOVE_FEATURE, ADD_FEATURE} from "../actions";

const initialState = {
    additionalPrice:0,
    car: {
        price: 5379,
        name: "1986 Yugo GV",
        image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/yugo-gv-placement-1528210669.jpg",
        features:[]
    },
    store:[
        { id: 1, name: 'V-.5 engine', price: 1233 },
        { id: 2, name: ' soviet radio', price: 500 },
        { id: 3, name: 'Premium  airconditioner', price: 800 },
        { id: 4, name: 'coffin', price: 250 }
    ]
};

export const featuresReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_FEATURE:
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    features: state.car.features.filter(
                        item => item.id !== action.payload.id
                    )
                },
                store: [...state.store, action.payload]
            };
case ADD_FEATURE:
    return{
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
            ...state.car,
            features: [...state.car.features, action.payload]
        },
        store: state.store.filter(item => item.id !== action.payload.id)

        
    };

  


default:
    return state;
    }
};