1) Meaningful Variable Naming:
```
Bad practice:
let dayssl =10

Good practice:
const MAX_ALLOWED_LOGIN=30;

let daysSinceLastLogin =10; 

let isUserLoggedIn=daysSinceLastLogin < MAX_ALLOWED_LOGIN;

```
2) Avoid extra word in varaible
```
bad:
let nameValue
good:

let name;



```
3) No need to remember the purpose of the variable(self explainatory)
```
bad:
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
bad:
    products={
            productId:"12",
            "productName:"A"
    }

good:
products={
            id:"12",
            "name:"A"
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
bad:
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
- More functions ==> Not a problem

9) 



