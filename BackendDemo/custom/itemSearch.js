/**
 * Created by mkale on 10/11/2014.
 */

/**
 * Login view model
 */

var app = app || {};

app.Activities = (function () {
    'use strict'

    var $searchInputText;

    var init = function () {

        if (!app.isKeySet(appSettings.everlive.apiKey)) {
            app.mobileApp.navigate('views/noApiKey.html', 'fade');
        }

        $searchInputText = $('#searchItemName');
        console.log($searchInputText);

    };

    var show = function () {
        $searchInputText.val('');
    };


    // Activities model
    var activitiesModel = (function () {

        var activityModel = {

            id: 'Id',
            fields: {
                Text: {
                    field: 'Text',
                    defaultValue: ''
                },
                CreatedAt: {
                    field: 'CreatedAt',
                    defaultValue: new Date()
                },
                ItemName: {
                    fields: 'ItemName',
                    defaultValue: null
                }
            }
        };


        // Activities data source. The Backend Services dialect of the Kendo UI DataSource component
        // supports filtering, sorting, paging, and CRUD operations.

        var activitiesDataSource = new kendo.data.DataSource({
            type: 'everlive',
            schema: {
                model: activityModel
            },
            transport: {
                // Required by Backend Services
                typeName: 'Items'
            }
        });

        // retrieve the data from Telerik Backend Services

        activitiesDataSource.fetch(function () {

        // Send the changes to Telerik Backend Services
            activitiesDataSource.sync();
        });

        //alert("SomethingNothing goes wrong");

        return {
            activities: activitiesDataSource
        };

        console.log("its ok");

    }());





    return activitiesViewModel;

}());



var el = new Everlive('your-api-key-here');
var dataSource = new kendo.data.DataSource({
    type: 'everlive',
    transport: {
        typeName: 'Items'
    },
    schema: {
        model: { id: Everlive.idField }
    }
});
// retrieve the data from Telerik Backend Services
dataSource.fetch(function () {

// Send the changes to Telerik Backend Services
    dataSource.sync();
});