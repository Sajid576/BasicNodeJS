1) Meaningful Variable Naming:
```
Bad :
let dayssl =10

Good:
const MAX_ALLOWED_LOGIN=30;

let daysSinceLastLogin =10; 

let isUserLoggedIn=daysSinceLastLogin < MAX_ALLOWED_LOGIN;

```
2) Avoid extra word in variable
```
Bad:
let nameValue
Good:

let name;



```
3) No need to remember the purpose of the variable(self explainatory)
```
Bad:
products =["A", "B", "C", "D", "E", "F"]
products.forEach((p)=>{
        doSomething()
});

Good:
products =["A", "B", "C", "D", "E", "F"]
products.forEach((product)=>{
        doSomething()
});


```
4) No Need to add unnecessary context:
```
Bad:
    products={
            productId:"12",
            productName:"A"
    }

Good:
products={
            id:"12",
            name:"A"
    }

```
5) Give long and descriptive name of the function
```
Bad:
function email(){
    send();
}
Good:
function sendEmailToUser()
{
        send();
}

```
6) Avoid too many arguments in fucntion
```
if you use too many arguments,test case writing will be tough
Bad:
function getProducts(fields,fromDate,toDate){
    // implementations
}
// Good
function getProducts({fields,fromDate,toDate})
{
    // implementations
}


```

7) Use default arguments ,not conditionals:
```
Bad:

function createProduct(type){
        const shapeType = type || "circle";
}
Good:
function createProduct(type="circle"){
//.......
}



```
8) No need to pass flag variable in the parameters:

```
Bad:
function createFile(name,isPublic){
    if(isPublic){
        fs.create('.....');
    }
    else{
        fs.create('/...../')
    }
}

Good:
function createFile(name){
        fs.create('.....');
}
function createFile(name){
        fs.create('/...../')
}

```
- More parameters in the function ==> problem for QA testers
- Refactoring a single function to generate more functions ==> Not a problem

9) Multiple tasks should not be assigned to a single function:
 ```
 Bad: Below code is performing 2 actions,
 one is verifying the user and other one is notifying the verified user.

function notifyUsers(users){
        users.forEach((user)=>{
            const userRecord = database.lookup(user);
            if(userRecord.isVerified()){
                notify(user);
            }
        })
}

Good:
We can refactor the function into 2 functions for removing tightly coupled.
function notifyVerifiedUsers(users){

}
function isUserVerified(user){

}


 ```
10) Always check the type strongly
```
val=123;
if(val === 123){ console.log("dhukbe")}
if(val === "123"){ console.log("dhukbe na")}
if(val == "123"){ console.log("dhukbe")}


```
11) 

