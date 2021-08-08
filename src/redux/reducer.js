const initialState = {
    value: "",
    editingType: "",
    tasks: [
        {
            complete: false,
            editing: false,
            title: "ac facilisis in"
        },
        {
            complete: true,
            editing: false,
            title: "Morbi leo risus"
        },
        {
            complete: false,
            editing: false,
            title: "Porta ac consectetur ac"
        },
        {
            complete: true,
            editing: false,
            title: "Lorem ipsum dolor sit amet consectetur,"
        },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TYPING": return { ...state, value: action.payload }

        case "ADD_TASK": return {
            ...state,
            tasks: [...state.tasks, { title: action.payload }],
            value: ""
        }

        case "DELETE_TASK":
            let tasks = [...state.tasks];
            tasks.splice(action.payload, 1)

            return { ...state, tasks }

        case "COMPLETE":
            let tasksComplete = [...state.tasks];
            tasksComplete[action.payload].complete = !tasksComplete[action.payload].complete
            return { ...state, tasksComplete }

        case "EDIT": return { ...state, editingType: action.payload }

        case "SET_NEW_VALUE":
            let newValues = [...state.tasks];
            newValues[action.payload].title = state.editingType
            newValues[action.payload].editing = false

            return { ...state, newValues, editingType: "" }

        case "START_EDITING":
            let values = [...state.tasks];
            values[action.payload].editing = true

            let editingType = values[action.payload].title
            console.log(editingType);

            return { ...state, values, editingType: editingType }

        case "DELETE_ALL":
            let deletedState = []
            return { ...state.tasks, tasks: deletedState }

        case "DELETE_COMPLETED":
            let finishedTasks = [...state.tasks].filter(item => !item.complete)
            return { tasks: finishedTasks }

        default:
            return state
    }
}
export default reducer;