

setInterval( ()=>{

    call().then( (data) => {
        
        var text = JSON.parse(data) 
        var lastmodify = text['LastModified']
        var resultc = text['Currency']
        var resultg = text['Gold']
        var resulti = text['Item']
        
        
        console.log(data)
        
        $("#times").append(`<hr class='bg-dark'><p>${lastmodify}</p><hr>`);
        for(let i=0 ; i<resultc.length ;i++){

            $('#tblc').append(`<tr><td>${resultc[i]["Code"]}</td>
            <td>${resultc[i]["Currency"]}</td>
            <td>${resultc[i]["Sell"]}</td>
            <td>${resultc[i]["Buy"]}</td></tr>`);
        }

        for(let i=0 ; i<resultg.length ;i++){
            $('#tblg').append(`<tr><td>${resultg[i]["Coin"]}</td>
            <td>${resultg[i]["Sell"]}</td>
            <td>${resultg[i]["Buy"]}</td></tr>`);
        }

        for(let i=0 ; i<resulti.length ;i++){
            $('#tbli').append(`<tr><td>${resulti[i]["Name"]}</td><td>${resulti[i]["Rate"]}</td></tr>`);
        }

    


    }).catch((er)=>{
        alert(er)
    })

}

,5000);




function call(params) {
    
    var promise = new Promise((resolve,reject) =>{
        
        $.ajax({
            type: "GET",
            url: 'https://currency.jafari.li/json',
            data: {'url':params},
            
            success: function (response) {          
                resolve(response)              
            },
            error: function (error) {
               reject('HAS ERROR')
            },
        });
    });
    return promise
}
   
    