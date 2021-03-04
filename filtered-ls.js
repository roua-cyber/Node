const fs=require('fs') ;
const path=require('path') ;
var dirPath=process.argv[2]
var ext="."+process.argv[3]
fs.readdir(dirPath,(err,data)=>{
    if(err)
        {console.log(err)}
    else
        {
         data.map(data=>
        {  if (path.extname(data) === ext)
              {console.log(data)}}
         )
        }
})