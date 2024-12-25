let form=document.querySelector("form")
let data=document.querySelector(".data")
let checkStatus=0;
let clear=document.querySelector(".clear")
form.addEventListener("submit",(event)=>{
    let name=event.target.uname.value
    let email=event.target.email.value
    let phone=event.target.phone.value

let UserData=JSON.parse(localStorage.getItem("userdetails")) ??[];        //check the nullidity
for(let v of UserData){
    if(v.email==email || v.phone==phone){
        checkStatus=1;
        break;

    }
}
if(checkStatus==1){
    alert("email/phone already exists!")
}else{
    UserData.push({
        'name': name,
        'email': email,
        'phone':phone
    })
    localStorage.setItem("userdetails",JSON.stringify(UserData));
    event.target.reset();   // clear the input field when click on submit
}
    displayData();    //to call when click on submit
    // console.log(UserData);
    
event.preventDefault();

})

  

let displayData=()=>{
    let UserData=JSON.parse(localStorage.getItem("userdetails"))??[] ; //get data from local storage
let finaldata='';
UserData.forEach((element,i) => {
    finaldata+=`  <div class="items">
                <span onclick=removeData(${i})>&times;</span>
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
displayData();  // call when user open the browser


let removeData=(index)=>{
    let UserData=JSON.parse(localStorage.getItem("userdetails"))??[] 
    UserData.splice(index,1)

    localStorage.setItem("userdetails",JSON.stringify(UserData));
    displayData();

}
clear.addEventListener("click",()=>{
    localStorage.clear("userdetails");
    displayData();
})
displayData();

