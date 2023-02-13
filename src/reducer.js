import * as actions from './actionType';

const initState = {
    employees: [{
        id: 1,
        name: "Karlo",
        age: 23,
        designation: "Developer",
        department: "IT"
    },{
        id: 2,
        name: "John",
        age: 25,
        designation: "DevOps",
        department: "IT"
    },{
        id: 3,
        name: "Mark",
        age: 30,
        designation: "Developer",
        department: "IT"
    }]
};

const updateEmp = (state, payload) => {
    const arrState = state.employees
    arrState[0].age = payload.age;
    arrState[0].designation = payload.designation;

    return {employees: [...arrState]};
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.UPDATE:
            return updateEmp(state,action.payload)
        default:
            return state;
    }
};

export default reducer;