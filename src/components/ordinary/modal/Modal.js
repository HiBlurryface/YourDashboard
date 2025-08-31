import React from 'react';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

import Input from '../../UI/Input/Input.js';
import Button from './../../UI/Button/Button.js';

import styles from './Modal.module.scss';

function Modal({ supabase, getTodo, modal, setModal }) {
    const { v4: uuidv4 } = require('uuid');
    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');
    const [date, setDate] = useState(() => {
        const date = new Date();
        const month = (date.getMonth() + 1).toString();
        const day = date.getDate().toString();
        return `${date.getFullYear()}-${month.length === 2 ? month : `0${month}`}-${day.length === 2 ? day : `0${day}`}`
    })


    async function addTask() {
        const { data, error } = await supabase
            .from('todo')
            .insert([
                { id: uuidv4(), created_at: date, title: title, descr: descr, isDone: false }
            ])

        if (error) {
            console.error('Ошибка:', error.message)
        } else {
            getTodo();
            setTitle('');
            setDescr('');
            setModal(false);
        }
    }

    return <div className={modal ? styles.modal + ' ' + styles.modal__active : styles.modal}>
        <div className={styles.block}>
            <h3 className={styles.title}>Add task</h3>
            <div className={styles.group}>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="marginCenter marginBottom" />
                <Input value={descr} onChange={(e) => setDescr(e.target.value)} type="text" className="marginCenter marginBottom" />
            </div>
            <button type="button" className={styles.close} onClick={() => setModal(false)}>X</button>
            <Button type="button" text="Confirm" onClick={() => addTask()} className="marginCenter" />
        </div>
    </div>
}

export default Modal