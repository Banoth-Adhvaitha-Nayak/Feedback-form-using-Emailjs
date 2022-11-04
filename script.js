function sendMail() {//creating a function
  var params = {
    //creating objects calling params
    name: document.getElementById("name").value,
    //we are getting name or email or message withid ryt so use the same id's you used in html
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_zs8k13b";//connecting emailjs service id
  const templateID = "template_t8uga7e";//connecting emailjs template 

    emailjs
      .send(serviceID, templateID, params)
      .then((res)=>{
      //res=response
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);//log the responsee
        alert("Your message sent successfully!!");//final message alret displaying after message is sent via mail

    })
    .catch((err)=>console.log(err));//resetting everything to empty again

}
