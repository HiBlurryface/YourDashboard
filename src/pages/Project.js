import React from 'react';
import { useParams } from 'react-router';

function Project() {
    const { id } = useParams()

    return <h1>test</h1>;
}

export default Project;