(this["webpackJsonpvehicle-tracker"]=this["webpackJsonpvehicle-tracker"]||[]).push([[0],{162:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(34),o=a.n(r),s=(a(81),a(82),a(22)),c=a(24),m=a(17),u=a(18),i=a(20),d=a(19),h=a(21),g=function(e){function t(){return Object(m.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-dark bg-primary navbar-expand-xl"},l.a.createElement(s.b,{to:"/",className:"navbar-brand"},"Vehicle Database"),l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"navbar-item"},l.a.createElement(s.b,{to:"/",className:"nav-link"},"All Vehicles")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(s.b,{to:"/create",className:"nav-link"},"Add Vehicle"))),l.a.createElement("span",{class:"navbar-text"},"0.1.0")))}}]),t}(l.a.Component),E=a(23),f=a.n(E),p=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.vehicle.make),l.a.createElement("td",null,e.vehicle.model),l.a.createElement("td",null,e.vehicle.year),l.a.createElement("td",null,e.vehicle.numberPlate),l.a.createElement("td",null,e.vehicle.staff),l.a.createElement("td",null,e.vehicle.ownedOrLeased),l.a.createElement("td",null,"Leased"===e.vehicle.ownedOrLeased?e.vehicle.leaseExp.substring(0,10).split("-").reverse().join("/"):"NA"),l.a.createElement("td",null,"$",e.vehicle.cost),l.a.createElement("td",{className:e.checkRegoDate(e.vehicle.regoDue)},e.vehicle.regoDue.substring(0,10).split("-").reverse().join("/")),l.a.createElement("td",{className:e.checkWarrantDate(e.vehicle.warrantDue)},e.vehicle.warrantDue.substring(0,10).split("-").reverse().join("/")),l.a.createElement("td",null,e.vehicle.odometer),l.a.createElement("td",null,e.vehicle.odometerDate.substring(0,10).split("-").reverse().join("/")),l.a.createElement("td",null,l.a.createElement(s.b,{to:"/edit/"+e.vehicle._id},"edit")," | ",l.a.createElement("a",{href:"#",className:"text-danger",onClick:function(){e.deleteVehicle(e.vehicle._id)}},"delete")))},v=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={vehicles:[]},a.vehicleList=function(){return a.state.vehicles.map((function(e){return l.a.createElement(p,{vehicle:e,deleteVehicle:a.deleteVehicle,key:e._id,checkRegoDate:a.checkRegoDate,checkWarrantDate:a.checkWarrantDate})}))},a.checkRegoDate=function(e){var t,a=new Date(e),n=new Date,l=Math.floor((a.getTime()-n.getTime())/864e5);return l<=29&&l>14?t="text-warning":l<=14?t="text-danger":l>29&&(t="text-dark"),t},a.checkWarrantDate=function(e){var t,a=new Date(e),n=new Date,l=Math.floor((a.getTime()-n.getTime())/864e5);return l<=29&&l>14?t="text-warning":l<=14?t="text-danger":l>29&&(t="text-dark"),t},a.deleteVehicle=function(e){window.confirm("Are you sure?")&&(f.a.delete("http://localhost:5000/vehicles/"+e).then((function(e){return console.log(e.data)})),a.setState({vehicles:a.state.vehicles.filter((function(t){return t._id!==e}))}))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/vehicles/").then((function(t){e.setState({vehicles:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"table-responsive"},l.a.createElement("h3",{style:{textAlign:"center"}},"All Vehicles"),l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",null,"Make"),l.a.createElement("th",null,"Model"),l.a.createElement("th",null,"Year"),l.a.createElement("th",null,"Plate"),l.a.createElement("th",null,"Staff"),l.a.createElement("th",null,"Ownership"),l.a.createElement("th",null,"Lease Exp"),l.a.createElement("th",null,"Cost"),l.a.createElement("th",null,"Rego Due"),l.a.createElement("th",null,"WOF Due"),l.a.createElement("th",null,"Odo Read"),l.a.createElement("th",null,"Odo Date"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,this.vehicleList())))}}]),t}(l.a.Component),b=a(14),D=a.n(b),C=(a(68),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={make:"",model:"",year:"",numberPlate:"",staff:"",ownedOrLeased:"",cost:"",leaseExp:new Date,regoDue:new Date,warrantDue:new Date,odometer:"",odometerDate:new Date},a.onChangeMake=function(e){a.setState({make:e.target.value})},a.onChangeModel=function(e){a.setState({model:e.target.value})},a.onChangeYear=function(e){a.setState({year:e.target.value})},a.onChangeNumberPlate=function(e){a.setState({numberPlate:e.target.value})},a.onChangeStaff=function(e){a.setState({staff:e.target.value})},a.onChangeOwnedOrLeased=function(e){a.setState({ownedOrLeased:e.target.value})},a.onChangeCost=function(e){a.setState({cost:e.target.value})},a.onChangeLeaseExp=function(e){a.setState({leaseExp:e})},a.onChangeRegoDue=function(e){a.setState({regoDue:e})},a.onChangeWarrantDue=function(e){a.setState({warrantDue:e})},a.onChangeOdometer=function(e){a.setState({odometer:e.target.value})},a.onChangeOdometerDate=function(e){a.setState({odometerDate:e})},a.onSubmit=function(e){e.preventDefault();var t={make:a.state.make,model:a.state.model,year:a.state.year,numberPlate:a.state.numberPlate,staff:a.state.staff,ownedOrLeased:a.state.ownedOrLeased,cost:a.state.cost,leaseExp:a.state.leaseExp,regoDue:a.state.regoDue,warrantDue:a.state.warrantDue,odometer:a.state.odometer,odometerDate:a.state.odometerDate};f.a.post("http://localhost:5000/vehicles/update/"+a.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="https://alpha-arietis.github.io/vehicle-database/"},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/vehicles/"+this.props.match.params.id).then((function(t){e.setState({make:t.data.make,model:t.data.model,year:t.data.year,numberPlate:t.data.numberPlate,staff:t.data.staff,ownedOrLeased:t.data.ownedOrLeased,cost:t.data.cost,leaseExp:new Date(t.data.leaseExp),regoDue:new Date(t.data.regoDue),warrantDue:new Date(t.data.warrantDue),odometer:t.data.odometer,odometerDate:new Date(t.data.odometerDate)}),console.log(t.data.ownedOrLeased)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{style:{width:"40%",margin:"0 auto 0 auto"}},l.a.createElement("h3",null,"Edit Vehicle Entry"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Make: "),l.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.make,onChange:this.onChangeMake})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Model: "),l.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.model,onChange:this.onChangeModel})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Year: "),l.a.createElement("input",{type:"number",required:!0,className:"form-control",value:this.state.year,onChange:this.onChangeYear})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Number Plate: "),l.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.numberPlate,onChange:this.onChangeNumberPlate})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Staff: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.staff,onChange:this.onChangeStaff})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Ownership: "),l.a.createElement("select",{ref:"userInput",className:"form-control",onChange:this.onChangeOwnedOrLeased},l.a.createElement("option",{selected:!0,key:this.state.ownedOrLeased,value:this.state.ownedOrLeased},this.state.ownedOrLeased),l.a.createElement("option",{key:"Owned"===this.state.ownedOrLeased?"Leased":"Owned",value:"Owned"===this.state.ownedOrLeased?"Leased":"Owned"},"Owned"===this.state.ownedOrLeased?"Leased":"Owned"))),l.a.createElement("div",{className:"form-group",style:{display:"Leased"===this.state.ownedOrLeased?"block":"none"}},l.a.createElement("label",null,"Lease Expires: "),l.a.createElement("div",null,l.a.createElement(D.a,{selected:this.state.leaseExp,onChange:this.onChangeLeaseExp}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Cost: "),l.a.createElement("input",{type:"number",className:"form-control",value:this.state.cost,onChange:this.onChangeCost})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Rego Due: "),l.a.createElement("div",null,l.a.createElement(D.a,{selected:this.state.regoDue,onChange:this.onChangeRegoDue}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"WOF Due: "),l.a.createElement("div",null,l.a.createElement(D.a,{selected:this.state.warrantDue,onChange:this.onChangeWarrantDue}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Odometer Reading: "),l.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.odometer,onChange:this.onChangeOdometer})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Odometer Date: "),l.a.createElement("div",null,l.a.createElement(D.a,{selected:this.state.odometerDate,onChange:this.onChangeOdometerDate}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("a",{href:"/"},l.a.createElement("button",{type:"button",style:{float:"left",marginRight:"15px"},className:"btn btn-danger"},"Cancel"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Update",className:"btn btn-success"}))))}}]),t}(l.a.Component)),w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={make:"",model:"",year:"",numberPlate:"",staff:"",ownedOrLeased:"Owned",cost:"",leaseExp:new Date,regoDue:new Date,warrantDue:new Date,odometer:"",odometerDate:new Date},a.onChangeMake=function(e){a.setState({make:e.target.value})},a.onChangeModel=function(e){a.setState({model:e.target.value})},a.onChangeYear=function(e){a.setState({year:e.target.value})},a.onChangeNumberPlate=function(e){a.setState({numberPlate:e.target.value})},a.onChangeStaff=function(e){a.setState({staff:e.target.value})},a.onChangeOwnedOrLeased=function(e){a.setState({ownedOrLeased:e.target.value})},a.onChangeCost=function(e){a.setState({cost:e.target.value})},a.onChangeLeaseExp=function(e){a.setState({leaseExp:e})},a.onChangeRegoDue=function(e){a.setState({regoDue:e})},a.onChangeWarrantDue=function(e){a.setState({warrantDue:e})},a.onChangeOdometer=function(e){a.setState({odometer:e.target.value})},a.onChangeOdometerDate=function(e){a.setState({odometerDate:e})},a.onSubmit=function(e){e.preventDefault();var t={make:a.state.make,model:a.state.model,year:a.state.year,numberPlate:a.state.numberPlate,staff:a.state.staff,ownedOrLeased:a.state.ownedOrLeased,cost:a.state.cost,leaseExp:a.state.leaseExp,regoDue:a.state.regoDue,warrantDue:a.state.warrantDue,odometer:a.state.odometer,odometerDate:a.state.odometerDate};f.a.post("http://localhost:5000/vehicles/add",t).then((function(e){return console.log(e.data)})),window.location="/"},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{width:"40%",margin:"0 auto 0 auto"}},l.a.createElement("h3",null,"Add Vehicle Entry"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Make: "),l.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.make,onChange:this.onChangeMake})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Model: "),l.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.model,onChange:this.onChangeModel})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Year: "),l.a.createElement("input",{type:"number",required:!0,className:"form-control",value:this.state.year,onChange:this.onChangeYear})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Plate: "),l.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.numberPlate,onChange:this.onChangeNumberPlate})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Staff: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.staff,onChange:this.onChangeStaff})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Ownership: "),l.a.createElement("select",{ref:"userInput",className:"form-control",onChange:this.onChangeOwnedOrLeased},l.a.createElement("option",{key:"Owned",value:"Owned"},"Owned"),l.a.createElement("option",{key:"Leased",value:"Leased"},"Leased"))),l.a.createElement("div",{className:"form-group",style:{display:"Leased"===this.state.ownedOrLeased?"block":"none"}},l.a.createElement("label",null,"Lease Expires: "),l.a.createElement("div",null,l.a.createElement(D.a,{selected:this.state.leaseExp,onChange:this.onChangeLeaseExp}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Cost: "),l.a.createElement("input",{type:"number",className:"form-control",value:this.state.cost,onChange:this.onChangeCost})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Rego Due: "),l.a.createElement("div",null,l.a.createElement(D.a,{selected:this.state.regoDue,onChange:this.onChangeRegoDue}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"WOF Due: "),l.a.createElement("div",null,l.a.createElement(D.a,{selected:this.state.warrantDue,onChange:this.onChangeWarrantDue}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Odometer Reading: "),l.a.createElement("input",{type:"number",required:!0,className:"form-control",value:this.state.odometer,onChange:this.onChangeOdometer})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Odometer Date: "),l.a.createElement("div",null,l.a.createElement(D.a,{selected:this.state.odometerDate,onChange:this.onChangeOdometerDate}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("a",{href:"/"},l.a.createElement("button",{type:"button",style:{float:"left",marginRight:"15px"},className:"btn btn-danger"},"Cancel"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Add Vehicle",className:"btn btn-success"}))))}}]),t}(l.a.Component);var O=function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement(g,null),l.a.createElement("br",null),l.a.createElement(c.a,{path:"/",exact:!0,component:v}),l.a.createElement(c.a,{path:"/edit/:id",component:C}),l.a.createElement(c.a,{path:"/create",component:w})))};o.a.render(l.a.createElement(O,null),document.getElementById("root"))},76:function(e,t,a){e.exports=a(162)},81:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.4822cee0.chunk.js.map