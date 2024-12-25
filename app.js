let form=document.querySelector("form")
let data=document.querySelector(".data")
form.addEventListener("submit",(event)=>{
    let name=event.target.uname.value
    let email=event.target.email.value
    let phone=event.target.phone.value

let UserData=JSON.parse(localStorage.getItem("userdetails"))??[] ;        //check the nullidity

    UserData.push({
        'name': name,
        'email': email,
        'phone':phone
    })
    localStorage.setItem("userdetails",JSON.stringify(UserData));
    // console.log(UserData);
    
event.preventDefault();

})

let displayData=()=>{
    let UserData=JSON.parse(localStorage.getItem("userdetails"))??[] ; 
let finaldata='';
UserData.forEach((element,i) => {
    finaldata+=`  <div class="items">
                <span>&times;</span>
              <h5>UserName</h5>
              <p>${element.name}</p>
              <h5>Email</h5>
              <p>${element.email}</p>
              <h5>Phone</h5>
              <p>${element.phone}</p>
            </div>`

            console.log(UserData);
            
});

data.innerHTML=finaldata
}
displayData();