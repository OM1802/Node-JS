const fs= require('fs');

fs.writeFile("test.txt", "TESTING FS IN NODE JS", (err) =>{
  if(err){
    console.log("ERROR DETECTED!");
  }
  else{
    console.log("WRITE OPERATION SUCCESSFULL!");
  }
});