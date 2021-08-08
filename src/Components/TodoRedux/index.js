import { AiOutlineCheckSquare, AiOutlineMinusSquare, AiOutlinePlus, AiTwotoneEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import React from 'react'
import { Button, Input, } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import TodoWrapper from './TodoWrapper';



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

    const startEditing = (index) => {
        const action = {
            type: "START_EDITING",
            payload: index
        }
        dispatch(action)

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
            <h2>TodoRedux App</h2>

            <form className="d-flex align-items-center  mb-3 w-100" onSubmit={add}>
                <Input
                    type="text"
                    placeholder="New Task"
                    className="me-2"
                    value={value}
                    onChange={typing}
                />

                <Button
                    color="primary"
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

                        return <ListGroupItem tag="a" href="#" className="w-100 d-flex align-items-center justify-content-between" key={index} action>

                            {
                                item.editing ?
                                    <form onSubmit={() => setEdited(index)} className="w-100 d-flex align-items-center justify-content-between">
                                        <Input
                                            type="text"
                                            placeholder="New Task"
                                            className="me-2"
                                            value={editingType}
                                            onChange={editItem}
                                        />
                                        <Button
                                            color="primary"
                                            className="float-right"
                                        >
                                            Save
                                        </Button>
                                    </form>
                                    :

                                    <>
                                        <p style={{ textDecoration: item.complete ? "line-through" : "none" }}>{index + 1}.  {item.title}</p>

                                        <div>
                                            <Button className="me-2" onClick={() => startEditing(index)}><AiTwotoneEdit color="white" fontWeight="600" fontSize="1.5rem" /></Button>

                                            <Button color="success me-2" onClick={() => setComplete(index)}>
                                                {item.complete ? <AiOutlineCheckSquare color="white" fontWeight="600" fontSize="1.5rem" /> : <AiOutlineMinusSquare color="white" fontWeight="600" fontSize="1.5rem" />}

                                            </Button>

                                            <Button onClick={() => deleteTask(index)} color="danger">
                                                <BsTrash color="white" fontWeight="600" fontSize="1.5rem" />
                                            </Button></div>
                                    </>
                            }


                        </ListGroupItem>
                    })
                }


                <ListGroupItem tag="a" href="#" action className="d-flex justify-content-between" >

                    <ListGroupItem tag="a" href="#" action className="text-center" onClick={deleteCompleted} >
                        <p>Delete Completed</p>
                    </ListGroupItem>

                    <ListGroupItem tag="a" href="#" action className="text-center" onClick={deleteAll}>
                        <p>Delete All</p>
                    </ListGroupItem>

                </ListGroupItem>
                <ListGroupItem tag="a" href="#" action className="text-center d-flex justify-content-between" onClick={deleteAll}>
                    <p>Completed: {completed}</p>
                    <p>Uncompleted: {uncompleted}</p>
                    <p>All: {todos?.length}</p>
                </ListGroupItem>

            </ListGroup>


        </TodoWrapper>
    )

}
export default TodoRedux