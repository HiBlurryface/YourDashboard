import React from 'react';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

import Input from '../../UI/Input/Input.js';
import Button from './../../UI/Button/Button.js';

import styles from './Modal.module.scss';

function Modal({ supabase, getTodo, modal, setModal }) {
    const { v4: uuidv4 } = require('uuid');

    const [task, setTask] = useState({
        title: '',
        descr: '',
    })
    const [error, setError] = useState({
        title: false,
        descr: false,
    })

    const [date, setDate] = useState(() => {
        const date = new Date();
        const month = (date.getMonth() + 1).toString();
        const day = date.getDate().toString();
        return `${date.getFullYear()}-${month.length === 2 ? month : `0${month}`}-${day.length === 2 ? day : `0${day}`}`
    })


    async function addTask() {
        if (validate()) {
            const { data, error } = await supabase
                .from('todo')
                .insert([
                    {
                        id: uuidv4(),
                        created_at: date,
                        title: task.title,
                        descr: task.descr,
                        isDone: false
                    }
                ])

            if (error) {
                console.error('Ошибка:', error.message)
            } else {
                getTodo();
                setTask({
                    title: '',
                    descr: '',
                })
                setModal(false);
            }
        }
    }

    const validate = () => {
        let hasError = false;

        Object.entries(task).forEach(([name, val]) => {
            if (!val || val.length === 0) {
                setError(prev => ({ ...prev, [name]: true }));
                hasError = true;
            } else {
                setError(prev => ({ ...prev, [name]: false }));
            }
        });

        return !hasError;
    };

    const onChange = (event) => {
        const name = event.target.name;
        const val = event.target.value;

        setTask(prevState => ({
            ...prevState,
            [name]: val,
        }));

        validate(name, val)
    }

    return <div className={modal ? styles.modal + ' ' + styles.modal__active : styles.modal}>
        <div className={styles.block}>
            <h3 className={styles.title}>Add task</h3>
            <div className={styles.group}>
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
            </div>
            <button type="button" className={styles.close} onClick={() => setModal(false)}>X</button>
            <Button type="button" text="Confirm" onClick={() => addTask()} className="marginCenter" />
        </div>
    </div>
}

export default Modal