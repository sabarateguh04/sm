
let div = [];
var no = 1;
var id_wo = $('#id_wo').val();

$(document).ready(function () {
    showtable();
});

function showtable() {
	//console.log('list');
    $('#tabel').DataTable({
        // Processing indicator
        "bAutoWidth": false,
        "destroy": true,
        "searching": true,
        "processing": true,
        // DataTables server-side processing mode
        "serverSide": true,
        "scrollX": true,
        // Initial no order.
        "order": [],
        // Load data from an Ajax source
        "ajax": {
          "url": 'dt_artikel',
          "type": "POST",
          "data": {
              'date' : $('#dt').val()
          }
        },
        //Set column definition initialisation properties
        "columnDefs": [{
          "targets": [0],
          "orderable": false
        }]
      });
}

$('#form_filter').submit(function (e) { 
    e.preventDefault();
    showtable();
});

function de_artikel(id) { 
  var r = confirm("Are you sure to delete this data ? ");
  if (r == true) {
      txt = "You pressed OK!";
      $.ajax({
          type: "post",
          url: "de_artikel",
          data: {
              id : id
          },
          dataType: "json",
          success: function (x) {
              if (x.status == true ) {
                  Swal.fire(
                      'Sukses',
                      x.msg,
                      'success'
                  );
                  showtable();
              }else{
                  Swal.fire(
                      'Gagal',
                      x.msg,
                      'error'
                  );
              }
          }
      });
  } else {
      txt = "You pressed Cancel!";
  }
}