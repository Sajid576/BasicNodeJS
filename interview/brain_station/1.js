async function retryRequest(promiseFunc, nrOfRetries) {
            for(var i=0;i<nrOfRetries;i++)
            {
                return await promiseFunc();
            }
  }

let hasFailed = true;
function getUserInfo() {
  return new Promise((resolve, reject) => {
    if(!hasFailed) {
      hasFailed = true;
      reject("Exception!");
    } else {
      resolve("Fetched user!");
    }
  });
}
let promise = retryRequest(getUserInfo, 3);
if(promise) {
  promise.then((result) => console.log(result))
  .catch((error) => console.log("Error!"));
}
module.exports.retryRequest = retryRequest;