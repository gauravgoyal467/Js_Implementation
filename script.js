/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let answer=arr.map(function(item){
		if(item.profession=="developer"){
			return item;
		}
	});
    answer=answer.filter(element=> element!==undefined);
	console.log(answer)
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(element){

		if(element.profession=='developer'){

		console.log(element);
		
		}
	
	});
    }
  
  function addData() {
    //Write your code here, just console.log
    const data={id:4,name:"susan",age:"20",profession:"intern"}
	arr.push(data);
	console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
   for(let i=0;i<arr.length;i++){
    if(arr[i].profession=="admin"){
        arr.splice(i,1);
    }
   }
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [
        { id: 5, name: "gaurav", age: "23", profession: "full-stack-developer" },
        { id: 6, name: "pranjal", age: "22", profession: "backend-developer" },
        { id: 7, name: "amit", age: "24", profession: "marketing-manager" },
      ];

      arr1.forEach(function(element){
        arr.push(element);
	});
    console.log(arr);
  }