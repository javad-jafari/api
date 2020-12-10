// part1

// $("#bt1").click(function(e){
    
//    var text = $('#t1').val();
//     $.ajax({
//         type: "POST",
//         url: 'https://cleanuri.com/api/v1/shorten',
//         data: {'url':text},
        
//         success: function (response) {          
//             console.log(response);            
//             $('#c1').val($('#c1').val() + response["result_url"]);
          
//         }
//     });
    
// });



// part2

  $(document).ready(function(){
    $("#bt1").click(function(e){
        e.preventDefault();
        var text = $('#t1').val();  
        call(text).then( (data)=>{
            
            $('#c1').val($('#c1').val() + data["result_url"]);
            $('#l1').hide();
        }).catch( (err)=>{
            alert(err)
        })    
    });
  });



function call(params) {
    
    var promise = new Promise((resolve,reject) =>{
        $('#l1').append('<div class="loader"></div>');
        $.ajax({
            type: "POST",
            url: 'https://cleanuri.com/api/v1/shorten',
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
   
    