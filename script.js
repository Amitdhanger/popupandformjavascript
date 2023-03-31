function validateForm(){

    let $firstname = document.querySelector('#firstname').value
    let first_name_size = $firstname.length

  
    let $lastname = document.querySelector('#lastname').value
    let last_name_size = $lastname.length

    let phone = document.querySelector('#phone').value
    let phone_size = phone.length

    let email_name=document.querySelector('#email').value
    let emailformat=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    let statename=document.querySelector('#state').value
   let statename_size =statename.length

   
   let $countryname = document.querySelector('#country').value
   let country_name_size = $countryname.length
    


    if(first_name_size < 3){
        document.querySelector('.success').innerText = ''
        document.querySelector('.error').innerText = ' first Name is required minium 3 characters!!'

   }else   if(last_name_size < 3){
    document.querySelector('.success').innerText = ''
    document.querySelector('.error').innerText = ' Last Name is required minium 3 characters!!'

    
    
    }else if(phone_size !== 10){
        document.querySelector('.success').innerText = ''
        document.querySelector('.error').innerText = 'Phone number should be 10 digit'

    }else if(!email_name.match(emailformat)){
        document.querySelector('.success').innerText = ''
        document.querySelector('.error').innerText = 'Your email is invalid'

    }else if(statename_size<3){
        document.querySelector('.success').innerText = ''
        document.querySelector('.error').innerText = 'Your state should not be less than 2 character'
    }else if(country_name_size < 3){
        document.querySelector('.success').innerText = ''
        document.querySelector('.error').innerText = ' Country Name is required minium 3 characters!!'
    }else{

        document.querySelector('.error').innerText = ''
        document.querySelector('.success').innerText = 'Coungratulation you have applied succesfully'

    }

    
    

}

let clickbutton=document.querySelector('.button')

clickbutton.addEventListener('click',function(){
    document.querySelector('.popup').style.display='block'

    document.querySelector('.button').style.display='none'
})

