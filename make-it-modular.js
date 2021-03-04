const Module=require('./mymodule') 
var pathDir=process.argv[2] ;
var ext=process.argv[3] ;

Module(pathDir,ext,(err,list)=>{
    if(err) {
        console.error(err);
    }
    list.forEach(el=>console.log(el)) ;
}) ;