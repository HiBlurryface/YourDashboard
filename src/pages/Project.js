import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

import styles from './../assets/styles/Project.module.scss'
import bg from './../assets/images/nowayout_full.png'

import { useParams } from 'react-router';
import classNames from 'classnames';
import Loading from '../components/ordinary/loading/Loading';

const supabaseUrl = 'https://orfaaqgzqovfsxrvodqu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yZmFhcWd6cW92ZnN4cnZvZHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NjYyNDMsImV4cCI6MjA3MjI0MjI0M30.2y3K6pmxQymNHfqeYxYSm3hGq660GI9q5dHqmSW1eKM';
const supabase = createClient(supabaseUrl, supabaseKey)

function Project() {
    const { id } = useParams()
    const [project, setProject] = useState([])

    useEffect(() => {
        getProject()
    }, [])

    async function getProject() {
        let { data, error } = await supabase
            .from(id)
            .select('*')
        if (error) console.error(error)
        else setProject(data[0])
    }

    return project.length === 0
        ? <Loading />
        : <div className={styles.wrapper}>
            <div className={styles.bg}>
                <img loading="lazy" src={project.preview} alt={project.title} className={styles.img} />
            </div>
            <div className={styles.block}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.info}>{project.descr}</p>
                <h3 className={styles.title}>Technologies</h3>
                <ul className={styles.list}>
                    {project.technologies.map((item, index) => {
                        return <li key={index} className={styles.list__item}>{item}</li>
                    })}
                </ul>
                <h3 className={styles.title}>Live-preview</h3>
                <a href={project.link} className={styles.link}>Open this project in browser</a>
            </div>
        </div>
}
export default Project;