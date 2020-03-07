import React from 'react';
// import MyClassComponent from './classComponent/classComponent';
// import Miha from "./profileMiha/Miha";
import Counter from './counter/ClassCounter'

const App = () => (
    <>
        <Counter step={5} initialValue={5} />
        <Counter step={10} initialValue={10} />
        <Counter step={1} initialValue={15} />

        {/* <Miha src="https://scontent.fiev19-1.fna.fbcdn.net/v/t1.0-9/p720x720/80636107_2512747562276821_4250452588496945152_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=wF_kPqEo2-cAX_sUsVL&_nc_ht=scontent.fiev19-1.fna&_nc_tp=6&oh=78a3e46b71d2ac3e7ea85ef0b5366638&oe=5E90F19C" name={'Melnychuk Mykhail'} age={32} profession={'haker'} phone={"093-959-10-70"} marige={'very nice wife'} /> */}
        {/* <MyClassComponent /> */}
    </>
)


export default App;
