import React, { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';

import edit from './../assets/images/edit.svg';

import styles from './../assets/styles/ToDo.module.scss';
import Modal from "../components/ordinary/modal/Modal";

const supabaseUrl = 'https://orfaaqgzqovfsxrvodqu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yZmFhcWd6cW92ZnN4cnZvZHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NjYyNDMsImV4cCI6MjA3MjI0MjI0M30.2y3K6pmxQymNHfqeYxYSm3hGq660GI9q5dHqmSW1eKM';
const supabase = createClient(supabaseUrl, supabaseKey)

function ToDo() {
    const [todo, setTodo] = useState([])
    const [modal, setModal] = useState(false)

    useEffect(() => {
        getTodo()
    }, [])

    async function getTodo() {
        let { data, error } = await supabase
            .from('todo')
            .select('*')
            .order('created_at', { ascending: true })
        if (error) console.error(error)
        else setTodo(data)
    }

    async function toggleDone(id, value) {
        await supabase.from('todo').update({ isDone: value }).eq('id', id)
        getTodo()
    }

    return <div className={styles.wrapper}>
        {todo.map((item) => {
            return <div className={styles.todo} key={item.id}>
                <button className={styles.todo__edit}>
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
                        {item.created_at}
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

        <button type="button" className={styles.add} onClick={() => setModal(true)}>

        </button>

        <Modal supabase={supabase} getTodo={getTodo} modal={modal} setModal={setModal} />
    </div>
}

export default ToDo