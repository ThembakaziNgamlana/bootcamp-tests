function mostProfitableDepartment(salesData){
  
let departmentSales = {};
for(var i=0; i< salesData.length;i++) {
 let currentDep = salesData[i].department;
  
 if (departmentSales[currentDep] === undefined){
  departmentSales[currentDep] = 0;
 }
   departmentSales[currentDep] += salesData[i].sales;
  }

let max = "";
let maxDepartment = 0;

for(var dep in  departmentSales){
 if(departmentSales[dep] > maxDepartment) {
   
  	maxDepartment = departmentSales[dep];
 	max = dep;
} 
  }
   return max;

 }
 




 function mostProfitableDay(salesData){
 const daySales = {};
for(var i=0;i < salesData.length;i++){
 var  currentDep = salesData[i].day;
  
  if(daySales[currentDep] === undefined){
    daySales[currentDep] = 0;
  }
daySales[ currentDep] += salesData[i].sales;
}
   
 var maxSales = 0;
 var max = "";
for(var day in daySales){
  if(daySales[day] > maxSales){
  maxSales = daySales[day];
   max = day;
  
  }

}
return max; 
}