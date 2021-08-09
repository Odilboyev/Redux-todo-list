import { AiFillSave, AiOutlineCheckSquare, AiOutlineMinusSquare, AiOutlinePlus, AiTwotoneEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import React from 'react'
import { Button, Input, } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import TodoWrapper, { blue } from './TodoWrapper';



const TodoRedux = (props) => {

    const data = useSelector(state => state)
    const todos = data.tasks;
    const value = data.value
    const editingType = data.editingType

    const dispatch = useDispatch()

    const typing = (e) => {
        const action = {
            type: "TYPING",
            payload: e.target.value
        }
        dispatch(action)
    }


    const add = (e) => {
        e.preventDefault()
        if (value === "") {
            alert('Please write a task')
        } else {

            const action = {
                type: "ADD_TASK",
                payload: value
            }
            dispatch(action)
        }

    }
    const deleteTask = (index) => {
        const action = {
            type: "DELETE_TASK",
            payload: index
        }
        dispatch(action)
    }

    const setComplete = (index) => {
        const action = {
            type: "COMPLETE",
            payload: index
        }
        dispatch(action)
    }


    // editing
    const startEditing = (index) => {
        if (editingType) {
            return
        } else {
            const action = {
                type: "START_EDITING",
                payload: index
            }
            dispatch(action)
        }


    }
    const editItem = (e) => {
        const action = {
            type: "EDIT",
            payload: e.target.value
        }
        dispatch(action)
    }

    const setEdited = (index) => {
        const action = {
            type: "SET_NEW_VALUE",
            payload: index
        }
        dispatch(action)
        return
    }


    // editing

    const deleteAll = () => {
        const action = {
            type: "DELETE_ALL"
        }
        dispatch(action)
    }

    const deleteCompleted = () => {
        const action = {
            type: "DELETE_COMPLETED"
        }
        dispatch(action)
    }

    let completed = 0
    let uncompleted = 0

    return (
        <TodoWrapper>
            <h2 className="title" >TodoRedux App</h2>

            <form className="d-flex align-items-center  mb-3 w-100" onSubmit={add}>
                <Input
                    type="text"
                    placeholder="New Task"
                    className="me-2"
                    value={value}
                    onChange={typing}
                />

                <Button
                    style={{ background: blue }}
                    className="float-right"
                >
                    <AiOutlinePlus color="white" fontWeight="600" fontSize="1.5rem" />
                </Button>
            </form>

            <ListGroup>
                {
                    todos?.map((item, index) => {

                        if (item.complete) {
                            completed++
                        } else uncompleted++

                        return <ListGroupItem className="my-1 w-100 d-flex flex-wrap text-center align-items-center justify-content-between" key={index}>

                            {
                                item.editing ?
                                    <form onSubmit={() => setEdited(index)} className="w-100 d-flex align-items-center justify-content-between">
                                        <Input
                                            type="text"
                                            value={editingType}
                                            onChange={editItem}
                                        />
                                        <Button
                                            color="primary"
                                            className="float-right"
                                        >
                                            <AiFillSave />
                                        </Button>
                                    </form>
                                    :

                                    <>
                                        <p style={{
                                            textDecoration: item.complete ? "line-through" : "none",
                                            color: item.complete ? blue : "#202020",

                                        }} className="todo-title" >{index + 1}.  {item.title}</p>

                                        <div className="wrapperHoverBtn d-flex justify-content-between align-items-center" >

                                            <div className=" hoverbtn" onClick={() => startEditing(index)}>
                                                <AiTwotoneEdit />
                                            </div>

                                            <div className={`hoverbtn ${item.complete ? 'fill' : 'none'}`} onClick={() => setComplete(index)}> </div>

                                            <div className="hoverbtn" onClick={() => deleteTask(index)} color="danger">
                                                <BsTrash />
                                            </div>

                                        </div>
                                    </>
                            }


                        </ListGroupItem>
                    })
                }

                <ListGroupItem className="text-center flex-wrap d-flex justify-content-between" >
                    <p>Completed: {completed}</p>
                    <p>Uncompleted: {uncompleted}</p>
                    <p>All: {todos?.length}</p>
                </ListGroupItem>

                <ListGroupItem className=" justify-content-between" >
                    <div className="row">
                        <div className="col-md-6 col-sm-12 d-flex justify-content-center gr-btn blue" onClick={deleteCompleted} >
                        <p>Delete Completed</p>
                    </div>

                        <div className="col-md-6 col-sm-12 d-flex justify-content-center gr-btn red" onClick={deleteAll}>
                        <p>Delete All</p>
                    </div>
                    </div>


                </ListGroupItem>


            </ListGroup>


        </TodoWrapper>
    )

}
export default TodoRedux