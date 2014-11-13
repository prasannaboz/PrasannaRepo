/**
 * Created by mkale on 13/11/2014.
 */
(function(){

    var serviceRoot = "http://api.everlive.com/v1/IMregDJC77R1b1yM";

    var employees = new kendo.data.HierarchicalDataSource({
        transport: {
            read: {
                url: serviceRoot + "/Items",
                dataType: "jsonp"
            }
        },

        schema: {
            model: {
                id: "Item",
                hasChildren: "HasEmployees"
            }
        }
    });

    function rebindListView(e) {
        var parentID = e.view.params.parent,
            element = e.view.element,
            backButton = element.find('#employee-back'),
            listView = element.find("#hierarchical-listview").data('kendoMobileListView'),
            navBar = element.find('#employee-navbar').data('kendoMobileNavBar');

        if (parentID) {
            employees.fetch(function() {
                var item = employees.get(parentID);
                if (item) {
                    backButton.show();
                    navBar.title(item.FullName);
                    listView.setDataSource(item.children);
                } else {
                    // redirect to root
                    setTimeout(function() {
                        kendo.mobile.application.navigate('#hierarchical-view');
                    }, 0);
                }
            });
        } else {
            backButton.hide();
            navBar.title('Employees');
            listView.setDataSource(employees);
        }

        e.view.scroller.scrollTo(0, 0);
    }
}());