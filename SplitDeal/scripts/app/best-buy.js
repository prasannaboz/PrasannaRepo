/**
 * Created by mkale on 14/11/2014.
 */

function savePost() {

    var savePostDS = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            // Required by Backend Services
            create: {
                url: "http://api.everlive.com/v1/IMregDJC77R1b1yM/Posts",
                type: "POST",
                dataType: "json"
            }

        },

        schema: {
            model: {
                id: "ID",

                fields: {
                    Title:{
                        type:"string"
                    },
                    PostCategory:{
                        type:"string"
                    }
                }
            }//end of model
        }//end of schema
    });//end of data source

    var itemtoinser = {
        Title:$('#postTitle').val(),
        PostCategory:$('#postCategory').val()

    };

    savePostDS.add(itemtoinser);
    savePostDS.sync();
    console.log("Datasourse sync successfully");

}//end of function