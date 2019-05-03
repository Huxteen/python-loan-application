$(document).ready(function () {

    // To Initialise Date picker
    $("#datepicker-view-start").datepicker({
        autoClose: true,
        viewStart: 2
    });

    // To query the database for the search fields

    let $myForm = $('#ajax-medical-record-filter');
    let $myFormOccupation = $('#ajax-medical-record-filter-occupation');

    // filter function on form submission based on occupation
    $myFormOccupation.submit(function (event) {
        event.preventDefault();
        let $filterFormAPI = document.getElementById("occupation")
        let $filterBy = $filterFormAPI.value;
        let $filterField = $filterFormAPI.getAttribute("data-field");
        if ($filterBy == 'all') {
            let $queryURL = "/api/medical-record-filter";
            $.ajax({
                method: 'GET',
                url: $queryURL,
                success: handleSuccess,
                error: handleError,
                processData: false,
                contentType: false,
                cache: false,
            });
        } else {
            let $queryURL = "/api/medical-record-filter?" + $filterField + "=" + $filterBy;
            $.ajax({
                method: 'GET',
                url: $queryURL,
                success: handleSuccess,
                error: handleError,
                processData: false,
                contentType: false,
                cache: false,
            });
        }

    });


    // filter based on a specific medical condition
    $myForm.submit(function (event) {
        event.preventDefault();
        let $filterFormAPI = document.getElementById("medical-conditions")
        let $filterBy = $filterFormAPI.value;
        let $filterField = $filterFormAPI.getAttribute("data-field");
        if ($filterBy == 'all'){
            let $queryURL = "/api/medical-record-filter";
            $.ajax({
                method: 'GET',
                url: $queryURL,
                success: handleSuccess,
                error: handleError,
                processData: false,
                contentType: false,
                cache: false,
            });
        }else{
            let $queryURL = "/api/medical-record-filter?" + $filterField + "=" + $filterBy;
            $.ajax({
                method: 'GET',
                url: $queryURL,
                success: handleSuccess,
                error: handleError,
                processData: false,
                contentType: false,
                cache: false,
            });
        }
        
    });



    function handleSuccess(data) {
        // console.log(data[0].nationality);
        // console.log(data);
        $("#js-medical-report tr").remove()
        // console.log(data.length);
        $len = data.length;
        for (i = 0; i < data.length; i++) {
            toggleTable = i % 2;
            if (toggleTable == 0) {
                $template = "<tr class='table-active'>";
            } else {
                $template = "<tr>";
            }
            $template += "<th>" + $len-- + "</th>";
            $template += "<td>" + (data[i].first_name).capitalize() + " " + (data[i].last_name).capitalize() + "</td>";
            $template += "<td>" + (data[i].nationality).capitalize() + "</td>";

            if (data[i].gender == 'm') {
                $template += "<td> Male </td>";
            } else if (data[i].gender == 'f') {
                $template += "<td> Female </td>";
            } else {
                $template += "<td> Others </td>";
            }

            // format the time
            let date_added = moment(data[i].date_added).format("MMM DD, YYYY");
            $template += "<td>" + data[i].telephone + "</td>";
            $template += "<td>" + (data[i].occupation).capitalize() + "</td>";
            $template += "<td>" + (data[i].medical_condition).capitalize() + "</td>";
            $template += "<td>" + data[i].weight + "</td>";
            $template += "<td>" + date_added + "</td>";
            $template += "<td><a class='btn btn-sm btn-info' title='Save Report' style='color: #fff;'><i class='fas fa-save'></i></a>&nbsp;&nbsp;";
            $template += "<a class='btn btn-sm btn-warning' title='Remove Report' style='color: #fff;'><i class='fas fa-eraser'></i></a></td>";
            $template += "<tr>";
            $("#js-medical-report").prepend($template);

        }


    }

    // To handle error generated
    function handleError(ThrowError) {
        console.log(ThrowError)
    }

    // To capitalize the first letter of any string
    function capitalize(s) { return s.toUpperCase(); }
    String.prototype.capitalize = function () {
        return this.toString().replace(/\b[a-z]/g, capitalize);
    };







});



