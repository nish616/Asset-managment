$(document).ready(function () {
    
    const Url = 'http://localhost:3000/asset/master/data';
    
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
            $('#modalEditName').val(dtRow.name);
            $('#modalEditCategory').val(dtRow.category);
            $('#modalEditMake').val(dtRow.make);
            $('#modalEditModel').val(dtRow.model);
            $('#modalEditSerialNumber').val(dtRow.serialNumber);
            $('#modalEditPurchaseValue').val(dtRow.purchaseValue);
            $('#modalEditStatus').val(dtRow.status);

            
            //Getting updated values
            const editData = {
                name : $('#modalAddName').val(),
                category : $('#modalAddCategory').val(),
                make : $('#modalAddMake').val(),
                model : $('#modalAddModel').val(),
                serialNumber : $('#modalAddSerialNumber').val(),
                purchaseValue : $('#modalAddPurchaseValue').val(),
                status : $('#modalAddStatus').val(),
            };

            $.ajax({
                url: Url,
                type: 'PUT',
                data : editData,
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

    $('#btn-add').on('click', function (event){
        console.log(event);
        const addData = {
            name : $('#modalAddName').val(),
            category : $('#modalAddCategory').val(),
            make : $('#modalAddMake').val(),
            model : $('#modalAddModel').val(),
            serialNumber : $('#modalAddSerialNumber').val(),
            purchaseValue : $('#modalAddPurchaseValue').val(),
            status : $('#modalAddStatus').val(),
        };
        $.ajax({
            url: Url,
            type: 'POST',
            data : addData,
            success: function(result) {
                console.log(result);
            }
        });

        location.reload();

    })

    
  });








  