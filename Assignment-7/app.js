fetch('http://api.weatherapi.com/v1/current.json?key=5fd918100d0944458ff82048210708&q=London').then(res=>res.json()).then((res)=>{
    document.getElementById('location').innerText=res.location.name+","+res.location.region+","+res.location.country;
    const d=new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Firday","Saturday"];
    document.getElementById('date').innerText=d.getDate()+" "+monthNames[d.getMonth()]+" ("+dayNames[d.getDay()]+"), "+d.getFullYear();
    document.getElementById('temp').innerText=res.current.temp_c+"C";
    document.getElementById('status').innerText=res.current.condition.text; 
});
var count=1;
document.getElementById('button').addEventListener('click',(event)=>{
    event.preventDefault();
    const loc=document.getElementById('input').value;
    fetch('http://api.weatherapi.com/v1/current.json?key=5fd918100d0944458ff82048210708&q='+loc).then(res=>res.json()).then((res)=>{
        if(res.error)
        {
            document.getElementById('location').innerText="";
            document.getElementById('date').innerText="Please Enter a Valid Location";
            document.getElementById('temp').innerText="";
            document.getElementById('status').innerText=""; 
        }
        else
        {
    document.getElementById('location').innerText=res.location.name+","+res.location.region+","+res.location.country;
    const d=new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Firday","Saturday"];
    document.getElementById('date').innerText=d.getDate()+" "+monthNames[d.getMonth()]+" ("+dayNames[d.getDay()]+"), "+d.getFullYear();
    document.getElementById('temp').innerText=res.current.temp_c+"C";
    document.getElementById('status').innerText=res.current.condition.text;
    count++;
    if(count>5)
    {
        count=count-5;
    }
    const url="url('./background"+count+".jpg')";
    document.getElementById('parent').style.backgroundImage=url;
}
});
});