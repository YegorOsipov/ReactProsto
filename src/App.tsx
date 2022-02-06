import React, {useState} from 'react';
import './App.css';
import {Rating, ValueType} from "./components/Raiting/Rating";
import {Accordion} from "./components/Accordion/Accardion";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {PageTitle} from "./components/AppTitle/AppTitle";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion2";
import {UncontrolledRating} from "./components/Raiting/UncontrolledRaiting";
import {OnOff} from "./components/OnOff/OnOff";
import {v1} from "uuid";
import {Input} from "./components/Inpit/Input";
import {UncontrolledInput} from "./components/Inpit/UncontrolledInput";
import {Select} from "./components/Select/Select";
import {Example} from "./components/ExampleMemo/Example";

export type InputValue = {
    id: string
    title: string
    isDone: boolean
}


function App() {
    console.log('app rendered');
    const [ratingValue, setRatingValue] = useState<ValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const [on, setOn] = useState<boolean>(false);
    const [inputValues, setInputValues] = useState<Array<InputValue>>([
        {id: v1(), title: 'Buy in?', isDone : false}
    ]);
    const addValue = (value: string) => {
        const newValue = {id: v1(), title: value, isDone: true};
        setInputValues([...inputValues, newValue]);
    }
    const changeStatus = (id: string, isDone: boolean) => {
        setInputValues(inputValues.map(el => el.id === id ? {...el, isDone: isDone} : el));
    }

    const selectNames = [
        {id: v1(), title: 'Moscow'},
        {id: v1(), title: 'Minsk'},
        {id: v1(), title: 'Kiev'}
    ]



    return (
        <div className='App'>
            <PageTitle title={'This is APP component'}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <UncontrolledAccordion titleValue={'Menu'} />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <UncontrolledOnOff/>
            <OnOff onClick={setOn} on={on}/>
            <UncontrolledInput/>
            <Input inputValues={inputValues} addItem={addValue} changeStatus={changeStatus}/>
            <Select selectNames={selectNames}/>
            <Example/>
        </div>
    );
}

export default App;
