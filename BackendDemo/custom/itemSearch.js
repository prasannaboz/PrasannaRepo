/**
 * Created by mkale on 10/11/2014.
 */
(function(){

    // initialize Everlive application with application API key

    var itemModel = new kendo.data.Model.define({
        id: "id"
    })

    var dataSource = new kendo.data.DataSource({
        type: "everlive",
        transport: {
            // binding to the Items type in Everlive
            typeName: "Items"
        },
        schema: {
            model: itemModel
        },

        serverPaging: true,
        pageSize: 20,

        serverSorting: true,
        sort: { field: 'ModifiedAt', dir: 'asc' }
    });//End Of Data

    var selectedItem;

    $("#item-list").kendoGrid({
        dataSource: dataSource,
        selectable: true,
        change: function () {
            var id = this.select().data("id");

            selectedItem = this.datasource.get("id");

            $("#change-name").val(selectedItem.get("ItemName"));
            $("#change-desc").val(selectedItem.get("ItemDescription"));
        }
    });

    //Creating new item
    $("#create-item").click(function () {
        dataSource.add({ItemName: $("#item-name").val(), ItemDescription: $("#item-desc").val()})

        dataSource.sync();//sync the changes to the database

        //To empty the input fields after it
        $("#item-name").val("");
        $("#item-desc").val("");

        dataSource.read();//refreshes the data in the grid
    });


    //Deleting an Item
    $("#delete-item").click(function(){

    });



}());