import React, { Component } from 'react';
import '../../node_modules/bootstrap3/dist/css/bootstrap.min.css'
import '../css/styling.css'
import '../css/changed.css'

 export const LastRow=(props)=>
{
    return(
        <tr>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><button onClick={props.click} className="btn-success">Done</button></td>
        <td></td>
        <td></td>
        </tr>
    );
}