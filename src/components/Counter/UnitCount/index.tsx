import React from 'react'
import  Style  from './UnitCount.module.css';

const UnitCount = (props:{count:number,type:string}) => {
    return(
        <div className={Style.UnitCount}>
            <h1>{props.count}</h1>
            <h3>{props.type}</h3>
        </div>
    )
};

export default UnitCount;