window.addEventListener('load',()=>{

    let long;
    let lat;
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position=>{    
            lat=position.coords.latitude;
            long=position.coords.longitude;

            const  api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=50631c47c9377451350b49aeb0c3c788&units=metric`;

            fetch(api)
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                console.log(data);
                const tempe=document.querySelector(".temp");
                const des=document.querySelector(".des");
             tempe.textContent=`${data.main.temp} C`;
           
           des.textContent=data.weather[0].description;
            });


        });
    }



});
