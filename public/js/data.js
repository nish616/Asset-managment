$(document).ready(function () {
    
    const Url = 'http://localhost:3000/asset/data';
    var table = $("#asset-table").DataTable({
        ajax : {
            url : Url,
            type : "GET",
            dataType : 'json',
            dataSrc : 'data'
        },
        columns : [
            { data : 'id'},
            { data : 'name'},
            { data : 'category'},
            { data : 'make'},
            { data : 'model'},
            { data : 'serialNumber'},
            { data : 'purchaseValue'},
            { data : 'status'},
            { data : 'adminId'},
            { data: 'name', "render": function (item) {
                 return '<div class="btn-group"> <button type="button" name="edit" value="edit" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">🖊</button><button type="button" name="delete" value="delete" class="btn btn-danger">⛔</button></div>'
                 } 
            }
        ]
     } );

     $('#asset-table').on('click', 'tr', function (event) {
        const {name} = event.target;
        
        dtRow = table.row( this ).data();
        console.log(dtRow);

        if(name === 'edit'){
            //Auto filling form details
            $('#modalName').val(dtRow.name);
            $('#modalCategory').val(dtRow.category);
            $('#modalMake').val(dtRow.make);
            $('#modalModel').val(dtRow.model);
            $('#modalSerialNumber').val(dtRow.serialNumber);
            $('#modalPurchaseValue').val(dtRow.purchaseValue);
            $('#status').val(dtRow.status);

            

            $.ajax({
                url: Url,
                type: 'PUT',
                data : dtRow,
                success: function(result) {
                    console.log(result);
                }
            });

        } else if(name === 'delete'){
            
            // dtRow = table.row( this ).data();
            // console.log(dtRow);

            $.ajax({
                url: Url,
                type: 'DELETE',
                data : dtRow,
                success: function(result) {
                    console.log(result);
                }
            });

        }

    } );
    
  });








  