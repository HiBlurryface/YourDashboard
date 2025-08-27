import React, { useState } from "react";

import edit from './../assets/images/edit.svg';
import blogs from './../store/ToDoStore.js';

import styles from './../assets/styles/ToDo.module.scss';

function ToDo() {
    return <div className={styles.wrapper}>
        {blogs.map((item) => {
            return <div className={styles.blog}>
                <button className={styles.blog__edit}>
                    <img src={edit} alt="" className={styles.blog__icon} />
                </button>
                <h4 className={styles.blog__title}>
                    {item.title}
                </h4>
                <p className={styles.blog__descr}>
                    {item.descr}
                </p>
                <div className={styles.blog__footer}>
                    <p className={styles.blog__date}>
                        {item.date}
                    </p>
                    <div className={styles.blog__mark}>
                        <input type="checkbox" id={item.name} checked={item.isDone} className={styles.blog__checkbox} />
                        <label htmlFor={item.name} className={styles.blog__label}>Mark as done</label>
                    </div>
                </div>
            </div>
        })}
    </div>
}

export default ToDo