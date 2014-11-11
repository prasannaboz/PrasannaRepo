/**
 * Created by mkale on 10/11/2014.
 */
var el = new Everlive('IMregDJC77R1b1yM');
var data = el.data('Items');
data.getById('I')
    .then(function(data){
        alert(JSON.stringify(data));
    },
    function(error){
        alert(JSON.stringify(error));
    });