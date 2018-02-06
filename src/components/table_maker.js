import React, { Component } from 'react';
import '../../node_modules/bootstrap3/dist/css/bootstrap.min.css'
import '../css/styling.css'
import '../css/changed.css'
 export const TableRow=(props)=>
{
    return(
        <tr className={props.colorName}>
        <td>{props.roll}</td>
        <td>{props.name}</td>
        <td>{props.maths}</td>
        <td>{props.physics}</td>
        <td>{props.chemistry}</td>
        <td>{props.Biology}</td>
        <td>{props.total}</td>
        <td>{props.percentage}</td>
        <td>{props.division}</td>
        </tr>
    );
}
export const TableHead=(props)=>
{return(
     <thead className="thead-dark">
      <tr>
      <th onClick={props.rollSort}>Roll No.</th>
      <th onClick={props.nameSort}>Name</th>
      <th onClick={props.mathsSort}>Maths</th>
      <th onClick={props.physicsSort}>Physics</th>
      <th onClick={props.chemistrySort}>chemistry</th>
      <th onClick={props.biologySort}>Biology</th>
      <th onClick={props.totalSort}>Total marks</th>
      <th onClick={props.percentageSort}>Percentage</th>
      <th>Division</th>
      </tr>
      </thead>);
};