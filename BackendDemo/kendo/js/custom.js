/**
 * Created by mkale on 29/10/2014.
 */

//Kendo UI Grid
$(function(){
    $("#grid").kendoGrid({
        height: 200,
        columns:[
            {
                field: "FirstName",
                title: "First Name"
            },
            {
                field: "LastName",
                title: "Last Name"
            },
            {
                field: "MobNo",
                title: "Mobile Number"
            }
        ],
        dataSource: {
            data: [
                {
                    FirstName: "John",
                    LastName: "Doe",
                    MobNo: "8600383937"
                },
                {
                    FirstName: "Jane",
                    LastName: "Doe",
                    MobNo: "8600383937"
                },
                {
                    FirstName: "Prasanna",
                    LastName: "Kapate",
                    MobNo: "8600383937"
                }
            ]
        }
    });

});