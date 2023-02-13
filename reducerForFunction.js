import * as actions from './actionType';

const initState = {
    employees: [{
        id: 1,
        name: "Carl",
        age: 21,
        designation: "Developer",
        department: "IT"
    },{
        id: 2,
        name: "Max",
        age: 22,
        designation: "DevOps",
        department: "IT"
    },{
        id: 3,
        name: "Josh",
        age: 28,
        designation: "Developer",
        department: "IT"
    }]
};

const updateEmp = (state, payload) => {
    const arrState = { employees: [...state.employees] };
    arrState.employees[0].age = payload.age;
    arrState.employees[0].designation = payload.designation;

    return arrState;
};

const reducerForFunction = (state = initState, action) => {
    switch (action.type) {
        case actions.UPDATE:
            return updateEmp(state,action.payload)
        default:
            return state;
    }
};

export default reducerForFunction;