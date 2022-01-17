import React from 'react'

export default ({titulo,aluno,nota})=>{
    const status = nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{titulo}</h2>
            <p>Nome: {aluno}</p>
            <p>Nota: {nota}</p>
            <p>Status: {status}</p>
        </div>
    )
}