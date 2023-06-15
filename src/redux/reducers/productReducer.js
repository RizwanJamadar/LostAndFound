import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    allProducts: [],
    idcards: [],
    calculators: [],
    waterbottles: [],
    electronics: [],
    stationary: [],
    others: [],


    searchproducts: [],


    buttons: {
        allproductsbutton: false,
        idcardsbutton: false,
        calculatorsbutton: false,
        waterbottlesbutton: false,
        electronicsbutton: false,
        stationarybutton: false,
        otherbutton: false,


        searchButton: false,
    }
}


export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            console.log("Set products called")
            return {
                ...state,
                allProducts: payload,
                idcards: state.allProducts.filter((item) => item.category === "idcards"),
                calculators: state.allProducts.filter((item) => item.category === "calculators"),
                waterbottles: state.allProducts.filter((item) => item.category === "waterbottles"),
                electronics: state.allProducts.filter((item) => item.category === "electronics"),
                stationary: state.allProducts.filter((item) => item.category === "stationary"),
                others: state.allProducts.filter((item) => item.category === "others")
            };


        case ActionTypes.SEARCH_ALL_PRODUCTS:
            console.log("The payload: ", payload)
            return {
                ...state,
                searchproducts: state.allProducts.filter((item) => item.name.toLowerCase().includes(payload.toLowerCase()) || item.description.toLowerCase().includes(payload.toLowerCase())),
                buttons: { ...state.buttons, searchButton: true },
            };


        case ActionTypes.SET_ALL_PRODUCTS_BUTTON:
            console.log("All products button called")
            return {
                ...state,
                buttons: {
                    ...state.buttons,
                    allproductsbutton: true,
                    idcardsbutton: false,
                    calculatorsbutton: false,
                    waterbottlesbutton: false,
                    electronicsbutton: false,
                    stationarybutton: false,
                    otherbutton: false
                }
            };

        case ActionTypes.SET_ID_BUTTON:
            console.log("All products button called")
            return {
                ...state,
                buttons: {
                    ...state.buttons,
                    allproductsbutton: false,
                    idcardsbutton: true,
                    calculatorsbutton: false,
                    waterbottlesbutton: false,
                    electronicsbutton: false,
                    stationarybutton: false,
                    otherbutton: false
                }
            };

        case ActionTypes.SET_CALCULATORS_BUTTON:
            console.log("All products button called")
            return {
                ...state,
                buttons: {
                    ...state.buttons,
                    allproductsbutton: false,
                    idcardsbutton: false,
                    calculatorsbutton: true,
                    waterbottlesbutton: false,
                    electronicsbutton: false,
                    stationarybutton: false,
                    otherbutton: false
                }
            };

            case ActionTypes.SET_WATERBOTTLES_BUTTON:
            console.log("All products button called")
            return{
                ...state,
                buttons: {
                    ...state.buttons, 
                    allproductsbutton:false, 
                    idcardsbutton: false, 
                    calculatorsbutton:false, 
                    waterbottlesbutton: true,
                    electronicsbutton: false,
                    stationarybutton: false,
                    otherbutton: false 
                }
            };

            case ActionTypes.SET_ELECTRONICS_BUTTON:
            console.log("All products button called")
            return{
                ...state,
                buttons: {
                    ...state.buttons, 
                    allproductsbutton:false, 
                    idcardsbutton: false, 
                    calculatorsbutton:false, 
                    waterbottlesbutton: false,
                    electronicsbutton: true,
                    stationarybutton: false,
                    otherbutton: false 
                }
            };

            case ActionTypes.SET_STATIONARY_BUTTON:
            console.log("All products button called")
            return{
                ...state,
                buttons: {
                    ...state.buttons, 
                    allproductsbutton:false, 
                    idcardsbutton: false, 
                    calculatorsbutton:false, 
                    waterbottlesbutton: false,
                    electronicsbutton: false,
                    stationarybutton: true,
                    otherbutton: false 
                }
            };

            case ActionTypes.SET_OTHER_BUTTON:
            console.log("All products button called")
            return{
                ...state,
                buttons: {
                    ...state.buttons, 
                    allproductsbutton:false, 
                    idcardsbutton: false, 
                    calculatorsbutton:false, 
                    waterbottlesbutton: false,
                    electronicsbutton: false,
                    stationarybutton: false,
                    otherbutton: true 
                }
            };



        
        case ActionTypes.REMOVE_FILTER:
            console.log("Called from products reducer")
            return { ...state, buttons: { ...state.buttons, filterButton: false } };
        default:
            return state;
    }
}