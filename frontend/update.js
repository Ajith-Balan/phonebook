const url=window.location.href
const search = new URLSearchParams(url.split('?')[1])
const id=search.get('id');


async function getdataforedit() {
    const res =await fetch(`http://localhost:3000/api/getforedit/${id}`)
    const data  = await res.json()
    
    document.getElementById('name').value=data.name
    document.getElementById('price').value=data.price
    document.getElementById('torque').value=data.torque
    document.getElementById('mileage').value=data.mileage
    document.getElementById('brand').value=data.brand





    
}
getdataforedit()


async function updatecar() {
    const name=document.getElementById('name').value;
  const torque=  document.getElementById('torque').value;
  const mileage =   document.getElementById('mileage').value;
  const brand =   document.getElementById('brand').value;

    const price=parseInt(document.getElementById('price').value);

const res=await fetch(`http://localhost:3000/api/update/${id}`,{
method:"PATCH",
headers:{"content-Type":"application/json"},
body:JSON.stringify({name,price,profile,mileage,torque})

})
if( res.status==201){
    const data=await res.json()
    alert(data.msg)
    window.location.href='./index.html'
}

}