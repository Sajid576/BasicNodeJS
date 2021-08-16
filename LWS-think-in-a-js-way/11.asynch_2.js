// console.log('11.asynch_2.js');

// JS -> single thread language

const takeOrder = (customer,callback) => {
    console.log(`1. \t processing order for ${customer}`);
    callback(customer);
} 
 

const processOrder = (customer,callback) => {
    console.log(`2. \t processing order for ${customer}`);

    setTimeout(()=>{
        console.log(`3. \t cooking completed`); 
        console.log(`4. \t order processed for ${customer}`);
        callback(customer);

    }, 3000);


};


const completeOrder = (customer) => {
    console.log(`5. \t completed order for ${customer}`);
} 

takeOrder('customer 1',(customer)=>{
    processOrder(customer,()=>{
        completeOrder(customer);
    })
})

console.log('hello its asynchronous now !!');


