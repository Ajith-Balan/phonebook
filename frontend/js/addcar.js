async function addcar(){

    const name=document.getElementById('name').value;
    const torque=document.getElementById('torque').value;
    const price=document.getElementById('price').value;
    const mileage=document.getElementById('mileage').value;
    const brand=document.getElementById('brand').value;


    
    const res=await fetch('http://localhost:3000/api/add', {
         method: 'POST',
    
    headers: {'Content-Type': 'application/json'},
    
    body: JSON.stringify({name, price,torque,profile,mileage,brand})
    
    })
    
    if (res.status==201){
        const data=await res.json(); 
    
        alert(data.msg);
        
        window.location.href='../index.html'
    }
    
   
    }


    let profile=""

document.getElementById("profile").addEventListener('change',async(e)=>{
    profile=await convertToBase64(document.getElementById('profile').files[0])
document.getElementById('img').src=profile
console.log(profile);
})


function convertToBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror=(error)=>{
            reject(error)
        }
      
    })
}