f
// Changing actionWhenFound to print "at Index [x]"

unction findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(input) {
  console.log("Found him at index", input);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// Replacing for loop with forEach


function findWaldo(arr, found) {
arr.forEach(function(input){
  if (input === "Waldo"){
    found()
  }
})
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
