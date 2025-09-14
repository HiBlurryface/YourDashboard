import React, { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';

import edit from './../assets/images/edit.svg';

import styles from './../assets/styles/ToDo.module.scss';
import Modal from "../components/ordinary/modal/Modal";
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";
import ButtonDelete from "../components/UI/ButtonDelete/ButtonDelete";
import classNames from "classnames";
import Loading from "../components/ordinary/loading/Loading";

const supabaseUrl = 'https://orfaaqgzqovfsxrvodqu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yZmFhcWd6cW92ZnN4cnZvZHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NjYyNDMsImV4cCI6MjA3MjI0MjI0M30.2y3K6pmxQymNHfqeYxYSm3hGq660GI9q5dHqmSW1eKM';
const supabase = createClient(supabaseUrl, supabaseKey)

function ToDo() {
    const { v4: uuidv4 } = require('uuid');
    const [todo, setTodo] = useState([])

    const [modal, setModal] = useState({
        add: false,
        edit: false,
    })
    const [task, setTask] = useState({
        id: '',
        title: '',
        descr: '',
    })
    const [error, setError] = useState({
        title: false,
        descr: false,
    })

    const [date, setDate] = useState(() => {
        const date = new Date();

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}+00:00`;
    })

    // get ToDos from server

    useEffect(() => {
        getTodo()
    }, [])

    async function getTodo() {
        let { data, error } = await supabase
            .from('todo')
            .select('*')
            .order('created_at', { ascending: false })
        if (error) console.error(error)
        else setTodo(data)
    }

    // send to server results 

    async function toggleDone(id, value) {
        await supabase.from('todo').update({ isDone: value }).eq('id', id)
        getTodo()
    }

    async function deleteTask(item) {
        const { data, error } = await supabase
            .from('todo')
            .delete()
            .eq('id', item.id);

        if (error) {
            console.error('Error:', error);
        } else {
            getTodo();
            closeModal('edit');
        }
    }

    async function editTask(item) {
        if (!validateForm()) {
            const { data, error } = await supabase
                .from('todo')
                .update({
                    title: task.title,
                    descr: task.descr,
                })
                .eq('id', item.id)

            if (error) {
                console.error('Error', error)
            } else {
                getTodo();
                closeModal('edit');
            }
        }
    }

    async function addTask() {
        if (!validateForm()) {
            const { data, error } = await supabase
                .from('todo')
                .insert([
                    {
                        id: task.id,
                        created_at: date,
                        title: task.title,
                        descr: task.descr,
                        isDone: false
                    }
                ])

            if (error) {
                console.error('Error:', error.message)
            } else {
                getTodo();
                closeModal('add');
            }
        }
    }

    // scripts with input

    const onChange = (event) => {
        const name = event.target.name;
        const val = event.target.value;

        setTask(prevState => ({
            ...prevState,
            [name]: val,
        }));

        validate(name, val)
    }

    const validate = (name, val) => {
        if (!val || val.length === 0) {
            setError(prev => ({ ...prev, [name]: true }))
        } else {
            setError(prev => ({ ...prev, [name]: false }))
        }
    }

    const validateForm = () => {
        let hasError = false;

        Object.entries(task).forEach(([name, val]) => {
            if (!val || val.length === 0) {
                setError(prev => ({ ...prev, [name]: true }));
                hasError = true;
            } else {
                setError(prev => ({ ...prev, [name]: false }));
            }
        });

        return hasError;
    }

    // scripts with modal windows 

    const createTask = () => {
        setModal(prevState => ({
            ...prevState, add: true,
        }));
        setTask({
            id: uuidv4(),
            title: '',
            descr: '',
        })
    }

    const changeTask = (task) => {
        setModal(prevState => ({ ...prevState, edit: true }))
        setTask({
            id: task.id,
            title: task.title,
            descr: task.descr,
        })
    }

    const closeModal = (name) => {
        setModal(prev => ({ ...prev, [name]: false }));
    }


    return todo.length === 0
        ? <Loading />
        : <div className={styles.wrapper}>
            {todo.map((item) => {
                return <div className={styles.todo} key={item.id}>
                    <button className={styles.todo__edit} onClick={() => changeTask(item)}>
                        <img src={edit} alt="" className={styles.todo__icon} />
                    </button>
                    <h3 className={styles.todo__title}>
                        {item.title}
                    </h3>
                    <p className={styles.todo__descr}>
                        {item.descr}
                    </p>
                    <div className={styles.todo__footer}>
                        <p className={styles.todo__date}>
                            {item.created_at.slice(0, 10)}
                        </p>
                        <div className={styles.todo__mark}>
                            <input
                                onChange={(e) => toggleDone(item.id, e.target.checked)}
                                id={item.id}
                                checked={item.isDone}
                                className={styles.todo__checkbox}
                                type="checkbox" />
                            <label
                                htmlFor={item.id}
                                className={styles.todo__label}>Mark as done</label>
                        </div>
                    </div>
                </div>
            })}

            <button type="button" className={styles.add} onClick={() => createTask()}>

            </button>

            <Modal modal={modal.add} setModal={() => closeModal('add')}>
                <Input
                    name="title"
                    value={task.title}
                    placeholder="Task title"
                    onChange={onChange}
                    type="text"
                    val={error.title}
                    className="marginCenter marginBottom"
                />
                <Input
                    name="descr"
                    value={task.descr}
                    placeholder="Your task"
                    onChange={onChange}
                    type="text"
                    val={error.descr}
                    className="marginCenter marginBottom" />
                <div className="modal__footer">
                    <Button type="button" text="Confirm" onClick={() => addTask()} />
                </div>
            </Modal>

            <Modal modal={modal.edit} setModal={() => closeModal('edit')}>
                <Input
                    name="title"
                    value={task.title}
                    placeholder="Task title"
                    onChange={onChange}
                    type="text"
                    val={error.title}
                    className="marginCenter marginBottom"
                />
                <Input
                    name="descr"
                    value={task.descr}
                    placeholder="Your task"
                    onChange={onChange}
                    type="text"
                    val={error.descr}
                    className="marginCenter marginBottom" />
                <div className="modal__footer">
                    <Button type="button" text="Confirm" onClick={() => editTask(task)} />
                    <ButtonDelete type="button" text="Delete task" onClick={() => deleteTask(task)} />
                </div>
            </Modal>
        </div>
};

export default ToDo