var  arg=process.argv.slice(2)
sum=arg.reduce((acc,val)=>acc+Number(val),0)
console.log(sum)