import React, { Component } from 'react';
import {TableRow} from './components/table_maker'
import {TableHead} from './components/table_maker'
import {LastRow} from './components/extra_row'
import {ToppersCard} from './components/toppers_card';

import '../node_modules/bootstrap3/dist/css/bootstrap.min.css'
import './css/styling.css'
class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state={
    student:[{
        "roll":1,
        "name":"Ankit Gupta",
        "maths":88,
        "physics":32,
        "chemistry":87,
        "Biology":67,
        "total":88+32+87+67,
        "percentage":(88+32+87+67)*0.25,
        "division":'1',
        "colorClass":'green'
    },
    {
        "roll":2,
        "name": "Kavi gaur",
        "maths":55,
        "physics":50,
        "chemistry":60,
        "Biology":45,
        "total":55+50+60+45,
        "percentage":(55+50+60+45)*0.25,
        "division":'2',
         "colorClass":'yellow'
    },
    {
        "roll":3,
        "name": "Hemant shivhare",
        "maths":33,
        "physics":32,
        "chemistry":40,
        "Biology":37,
        "total":33+32+40+37,
        "percentage":(33+32+40+37)*0.25,
        "division":'3',
         "colorClass":'orange'
    },
    {
        "roll":4,
        "name": "Farhan khan",
        "maths":25,
        "physics":30,
        "chemistry":15,
        "Biology":22,
        "total":25+30+15+22,
        "percentage":(25+30+15+22)*0.25,
        "division":'fail',
        "colorClass":'red'
    },
    {
        "roll":5,
        "name":"Animesh Agarwal",
        "maths":88,
        "physics":32,
        "chemistry":87,
        "Biology":67,
        "total":88+32+87+67,
        "percentage":(88+32+87+67)*0.25,
        "division":'1',
        "colorClass":'green'
    },
    {
        "roll":6,
        "name": "Abhay Shivhare",
        "maths":55,
        "physics":50,
        "chemistry":60,
        "Biology":45,
        "total":55+50+60+45,
        "percentage":(55+50+60+45)*0.25,
        "division":'2',
         "colorClass":'yellow'
    },
    {
        "roll":7,
        "name": "Mohit Chaudhary",
        "maths":33,
        "physics":32,
        "chemistry":40,
        "Biology":37,
        "total":33+32+40+37,
        "percentage":(33+32+40+37)*0.25,
        "division":'3',
         "colorClass":'orange'
    },
    {
        "roll":8,
        "name": "Aditya Mishra",
        "maths":25,
        "physics":30,
        "chemistry":15,
        "Biology":22,
        "total":25+30+15+22,
        "percentage":(25+30+15+22)*0.25,
        "division":'fail',
        "colorClass":'red'
    },
    {
        "roll":9,
        "name": "Kadir Dubey",
        "maths":25,
        "physics":30,
        "chemistry":15,
        "Biology":22,
        "total":25+30+15+22,
        "percentage":(25+30+15+22)*0.25,
        "division":'fail',
        "colorClass":'red'
    }
    ],
     show_last_row:false,
     a:0,
     b:4,
    }
  }
  

add_click_handler=()=>
{
 this.setState({show_last_row:true});  
}
cancel_click_handler=()=>
{
   this.setState({show_last_row:false});  
}
cal=(another)=>{
     if(another>=60)
     {
       return'1';
     }
     else if(another>=45 && another<60)
     {
       return '2';
     }
     else if(another>=33 && another<45)
     {
       return '3';
     }
     else
     {
       return 'fail';
     }
   }
   setColor=(arg)=>
   {
     if(arg=='1')
     {
       return 'green';
     }
     else if(arg=='2')
     {
       return 'yellow';
     }
     else if(arg=='3')
     {
       return 'orange';
     }
     else
     {
       return 'red';
     }
   }
done_btn_clicked=()=>
{
  let another={
       roll:parseInt(document.getElementsByTagName('input')[0].value),
       name:document.getElementsByTagName('input')[1].value,
       maths:parseInt(document.getElementsByTagName('input')[2].value),
       physics:parseInt(document.getElementsByTagName('input')[3].value),
       chemistry:parseInt(document.getElementsByTagName('input')[4].value),
       Biology:parseInt(document.getElementsByTagName('input')[5].value),           
   }
   another.total=another.maths+another.physics+another.Biology+another.chemistry;
   another.percentage=(another.maths+another.physics+another.Biology+another.chemistry)*0.25;
   another.division=this.cal(another.percentage);
   another.colorClass=this.setColor(another.division);

   let list=this.state.student;
   list.push(another);
   this.setState({student: list});
   this.setState({show_last_row:false});
}

nameChangeHandler=(arg)=>
{
    let list=this.state.student;
    list.sort(function(a,b){
            return a[arg]-b[arg];
        });
    this.setState({student: list});
}
next_click_handler=()=>
{
  if(this.state.b<this.state.student.length)
  {
  this.setState({a:this.state.a+4});
  this.setState({b:this.state.b+4});
  }  
}
previous_click_handler=()=>
{
  if(this.state.a>=3)
  {
  this.setState({a:this.state.a-4});
  this.setState({b:this.state.b-4});
  }
}

  render() {
    console.log(this.state.student);
    let table_row=(
      this.state.student.filter((person,index)=>(index>=this.state.a && index<this.state.b)).map((person,index)=>{
      return <TableRow roll={person.roll} 
      name={person.name} maths={person.maths} physics={person.physics}
      chemistry={person.chemistry} Biology={person.Biology} 
      total={person.maths+person.physics+person.chemistry+person.Biology} 
      percentage={person.percentage}
      division={person.division}
      colorName={person.colorClass}/>

    }));
      let list=(this.state.student);
      list.sort(function(a,b){return b.total-a.total});
    
    return (
      <div>
      <table className="table table-bordered">
      <TableHead rollSort={this.nameChangeHandler.bind(this,"roll")} nameSort={this.nameChangeHandler.bind(this,"name")}
      mathsSort={this.nameChangeHandler.bind(this,"maths")} physicsSort={this.nameChangeHandler.bind(this,"physics")}
      chemistrySort={this.nameChangeHandler.bind(this,"chemistry")} biologySort={this.nameChangeHandler.bind(this,"Biology")}
      totalSort={this.nameChangeHandler.bind(this,"total")} percentageSort={this.nameChangeHandler.bind(this,"percentage")}/>
      <tbody>
      {table_row}
      {this.state.show_last_row?<LastRow click={this.done_btn_clicked}/>:null}
      </tbody>
      </table>
      <button onClick={this.add_click_handler} className="btn-primary">ADD</button>
      <button onClick={this.cancel_click_handler} className="btn-danger">Cancel</button>
      <button onClick={this.previous_click_handler} className="btn-primary">Previous</button>
      <button onClick={this.next_click_handler} className="btn-danger">Next</button>
      <ToppersCard list={this.state.student} />
      {console.log(this.state.student)}
      </div>
    );
  }
}

export default App;
