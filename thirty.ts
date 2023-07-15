let username = ['Karamat','Admin','Imran','khan'];
for(let i=0; i<username.length;i++)
{
    if(username[i]==='Admin')
    {
        console.log("Hello "+ username[i] +", would you like to see a status report?")
    }
    else{
        console.log("Hello "+ username[i]+ ", thank you for logging in again.")
    }
}