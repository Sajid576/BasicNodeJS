
myObj={
    name: "Paddy",
    address: {
         town: "Lerum", 
         country: "Sweden"
        }
    };

function makeClone(obj){
    cloneObj={};
    cloneObj=JSON.parse(JSON.stringify(obj));

    
    console.log("Cloned Object: ");
    console.log(cloneObj);
    console.log("Main Object: ");
    console.log(obj);
}

makeClone(myObj);
