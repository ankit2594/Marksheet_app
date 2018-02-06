

export var nameChangeHandler=(arg)=>
{
    let list=this.state.student;
    list.sort(function(a,b){
            return a[arg]-b[arg];
        });
    this.setState({student: list});
}
export var next_click_handler=()=>
{
  if(this.state.b<this.state.student.length)
  {
  this.setState({a:this.state.a+4});
  this.setState({b:this.state.b+4});
  }  
}
export var previous_click_handler=()=>
{
  if(this.state.a>=3)
  {
  this.setState({a:this.state.a-4});
  this.setState({b:this.state.b-4});
  }
}
export var done_btn_click=()=>
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