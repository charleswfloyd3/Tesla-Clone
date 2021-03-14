const inititalState = {
    modelSbtnCounter: 0,
    model3btnCounter: 0,
    modelXbtnCounter: 0,
    modelYbtnCounter: 0,
    solarRoofBtnCounter: 0,
    solarPanelsBtnCounter: 0
};

const rootReducer = (state = inititalState, action) =>{

    switch(action.type){
        case "S_BTN":
            return state.modelSbtnCounter + 1
        case "3_BTN":
            return state.model3btnCounter + 1
        case "X_BTN":
            return state.modelXbtnCounter + 1
        case "Y_BTN":
            return state.modelYbtnCounter + 1
        default:
            return state
    }

};


export default rootReducer;

