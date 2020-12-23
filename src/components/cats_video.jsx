import React from 'react';
import Cats from './cats';


const CatsVideo = (props) => (
            <ul>
                {props.cats.map(cat => ( 
                <Cats key={cat.id} cat={cat} />
                ))}
            </ul>
    );

export default CatsVideo;