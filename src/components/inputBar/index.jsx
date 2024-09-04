import React from 'react'
import Button from "../button";
import Input from "../input";

const InputBar = ()=>{
    return (
        <>
            <div className="AddBar">
                <Input tipo={'text'}></Input>
                <Button button={'Add'} clase={'add'}></Button>
            </div>
        </>)
}

export default InputBar;