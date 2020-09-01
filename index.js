const fs=require('fs');
const superagent=require("superagent");

const readfilepro=(file)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(file,(err,data)=>{
         if(err) reject('I could not find file');
         resolve(data);
    })
})}
const writefilepro=(file,data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(file,data,err=>{
            if(err) reject('Could not write fule');
            resolve('success');
        })
    })
};

/*
readfilepro(`${__dirname}/dog.txt`)
 .then(data=>{
    console.log(`Breed:${data}`);

    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)})
    .then(res=>{
        console.log(res.body);
        return writefilepro('dog-image.txt',res.body.message)
        .then(()=>{
            console.log('random dog image saved')
        })
        .catch(err=>console.log(err.message));
       
});
*/

///BY using Async await functions
const getDogPic=async()=>{
    try{
        const data=await readfilepro(`${__dirname}/dog.txt`);
        console.log(data);
        const res=await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);
        await writefilepro('dog-image.txt',res.body.message);
        console.log('random dog image saved');
    }
    catch(err){
        console.log(err.message);
        throw(err);
    }
    return '2. Ready dog'
   

};
// console.log('1. will gey dog pic');
// getDogPic()
// .then(x=>
//     {console.log(x);
//         console("3.done")
    
//     })
// .catch(err=>console.log('ERROR'));
(async()=>{
const x=await getDogPic();
console.log(x);
})()

   
