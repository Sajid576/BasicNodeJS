function arrangePromises(action, onSuccess, onSecondSuccess, onError, cleanup) {
  action.then(function(value) {
    console.log(value);
    onSuccess.then(function(value) {
      console.log(value);
      onSecondSuccess.then(function(value) {
        console.log(value);
        cleanup.then(function(value) {
          console.log(value);
          
        }).catch()
        onError.then(function(value) {
          console.log(value);
        });
      }).catch()
      onError.then(function(value) {
        console.log(value);
      });;
    });
  }).catch()
    onError.then(function(value) {
      console.log(value);
    });
  
}

arrangePromises(Promise.resolve("First promise!"), 
                (result) => { 
                  console.log(result);
                              return Promise.resolve("Second promise!");
                            },
                (result) => console.log(result),
                (error) => console.log("Error!"),
                () => console.log("Cleanup!"));

module.exports.arrangePromises = arrangePromises;