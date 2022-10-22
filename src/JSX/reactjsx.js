import React from 'react';
import useScript from '../hooks/linkscript';

const asisten = {
    name : 'Liem Christopher',
    jurusan : 'Teknik Komputer 2019'
};

function greetings(asisten){
    return asisten.name + ' dari ' + asisten.jurusan;
}


//menggunakan JSX
const ReactJSX = () => {
    return (
        useScript('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js'),
        <div>
            <h1>Belajar JSX</h1>
            <h2>Belajar JSX hehe {greetings(asisten)}</h2>
            <p style={{color:'#00ff00'}}>ini adalah contoh menggunakan JSX</p>
        </div>
    );
}

 
export default ReactJSX;
