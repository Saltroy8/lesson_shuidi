var arr = [1];
arr[10000] = 1;


function a() {
  console.time();
  for (var i = 0; i < arr.length; i++) {
    console.log(1)
  }
  console.timeEnd();
}


a();