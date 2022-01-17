import React from "react";

import Card from './components/layout/Card'
import Primeiro from './components/basic/First'
import ComParametro from './components/basic/withParameters'
import Fragment from './components/basic/Fragment'
import RadomNumber from "./components/basic/RadomNumber";
import './app.css'
export default () =>
    <div className="app">
        <h1>Fundamentos de React</h1>
        <div className="cards">
            <Card titulo="#04 - Desafio RandomNumber">
                <RadomNumber min={30} max={187}/>
            </Card>
            <Card titulo="#03 - Fragmento">
                <Fragment />
            </Card>
            <Card titulo="#02 - Com Parametro">
                <ComParametro titulo="Situação do Aluno" aluno="Paulo Henrique" nota={10} />
            </Card>
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>