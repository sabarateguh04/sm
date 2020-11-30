function form_to(id,url) { 
    $(id).submit(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: url,
            secureuri: false,
            contentType: false,
            cache: false,
            processData:false,
            data: new FormData(this),
            dataType: "json",
            beforeSend: function() {
               $('#btn-save').hide();
               $('#btn-save-loading').show();
            },
            success: function (r) {
                if (r.status) {
                    Swal.fire(
                        'Sukses',
                        r.msg,
                        'success'
                    );
                    
                    setTimeout(() => {
                        location.assign(r.callback);
                    }, 600);

                    $('#btn-save').show();
                    $('#btn-save-loading').hide();
      
                }else{
                    Swal.fire(
                        'Gagal',
                        r.msg,
                        'error'
                      );
      
                    $('#btn-save').show();
                    $('#btn-save-loading').hide();
                } 
            },
            error: function () { 
                  Swal.fire(
                    'Gagal',
                    'Terjadi gangguan sistem, harap hubungi developer',
                    'error'
                  );
  
                  $('#btn-save').show();
                  $('#btn-save-loading').hide();
             }
        });
      });
}

function get_select(id='',name='',url='') { 
  $(name).html('');
  $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: function (r) {
          r.forEach(e => {
              if (e.id == id) {
                  $(name).append(`<option selected value="${e.id}">${e.tag}</option>`);
              }else{
                  $(name).append(`<option value="${e.id}">${e.tag}</option>`);
              }
          });
      }
  });
}

    ClassicEditor.create( document.querySelector('#isi'), {
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    }).create( document.querySelector('#isi') )
        .catch( error => {
        console.error( error );
    });
  