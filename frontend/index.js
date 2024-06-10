async function getData() {
    const res = await fetch(`http://localhost:3000/api/get`);
    const data = await res.json();
    let str = ``;
    data.map((dt) => {
      str += `
      <div class="my-3 col-6">
        <div class="card" style="width: 500px;" >
            <div class="card-body" style="width: 500px; height: 550px;">
                    <img src="${dt.profile} " alt="" class="w-100" style="height: 65%;">
<br><br>

<div class="d-flex justify-content-between">          <h5 class="card-title">${dt.name}  -  ${dt.brand} </h5>
              <b>              <h6 class="card-subtitle mb-2 text-success">${dt.price}/-  rs</h6>
</b></div>

    <br>

              <h6 class="card-subtitle mb-2 text-body-secondary">${dt.torque}</h6>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${dt.mileage}</h6>

<br>

              <a href="./update.html?id=${dt._id}"class="card-link btn btn-outline-primary">Edit</a>
              <button  onclick="deletecar('${dt._id}') "class="btn btn-outline-danger ">Delete</button>
            </div>
          </div>
    </div> `
    });
    document.getElementById("row").innerHTML=str
  }
  getData()




  async function deletecar(id) {
    try {
        const res = await fetch(`http://localhost:3000/api/delete/${id}`, {
            method: 'DELETE',
        });
        console.log(res);
        if(res.status==200){
          const data = await res.json();
          alert(data.msg);
          getData()
        
        }







        
    } catch (error) {
        console.error(error);
        
    }
}
