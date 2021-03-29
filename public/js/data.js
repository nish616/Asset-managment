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
            { data : 'branch'},
            { data : 'employeeId'},
            {data : 'notes'},
            { data: '', "render": function () {
                 return '<div class="btn-group"> <button type="button" name="edit" value="edit" class="btn btn-warning" data-toggle="modal" data-target="#editModal">🖊</button><button type="button" name="delete" value="delete" class="btn btn-danger">⛔</button></div>'
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
            $('#modalEditId').val(dtRow.id);
            $('#modalEditName').val(dtRow.name);
            $('#modalEditCategory').val(dtRow.category);
            $('#modalEditMake').val(dtRow.make);
            $('#modalEditModel').val(dtRow.model);
            $('#modalEditSerialNumber').val(dtRow.serialNumber);
            $('#modalEditPurchaseValue').val(dtRow.purchaseValue);
            $('#modalEditStatus').val(dtRow.status);
            $('#modalEditBranch').val(dtRow.branch);
            $('#modalEditNotes').val(dtRow.notes);


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

            location.reload();

        }

    } );

    //Modal add asset
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
            branch : $('#modalAddBranch').val(),
            notes : $('#modalAddNotes').val()
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

    });
    

    //Modal edit asset
    $('#btn-edit').on('click', function(event){
        //Getting updated values
        const editData = {
            id : $('#modalEditId').val(),
            name : $('#modalEditName').val(),
            category : $('#modalEditCategory').val(),
            make : $('#modalEditMake').val(),
            model : $('#modalEditModel').val(),
            serialNumber : $('#modalEditSerialNumber').val(),
            purchaseValue : $('#modalEditPurchaseValue').val(),
            status : $('#modalEditStatus').val(),
            branch : $('#modalEditBranch').val(),
            notes : $('#modalEditNotes').val()
        };

        console.log(editData);

        $.ajax({
            url: Url,
            type: 'PUT',
            data : editData,
            success: function(result) {
                console.log(result);
            }
        });

        location.reload();
    })

    
  });








  