import React, { Component } from 'react';
import '../../node_modules/bootstrap3/dist/css/bootstrap.min.css'
import '../css/styling.css'
import '../css/changed.css'

class ToppersList extends Component
{   
    render(){
    console.log(this.props.array);     
    let list=this.props.array;
        var mySort = (a, b) => {
            return b.total - a.total;
        }
        list.sort(mySort);
        return(
            <div className="toppers_card">
            <h2>Toppers</h2><hr/>
            <p><b>Name: </b>{list[0].name}</p>
            <p><b>Roll No.: </b>{list[0].roll}</p><hr/>
            <p><b>Name: </b>{list[1].name}</p>
            <p><b>Roll No.: </b>{list[1].roll}</p><hr/>
            <p><b>Name: </b>{list[2].name}</p>
            <p><b>Roll No.: </b>{list[2].roll}</p>
            </div>
        )
        }
}
export default ToppersList;