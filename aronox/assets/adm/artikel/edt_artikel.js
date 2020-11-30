
let id_artikel = $('#id_artikel').val();

$(document).ready(function () {
    get_select('','#tag','../get_tag');
    form_to('#form_up_artikel','../up_artikel');
    get_detail();
    setTimeout(() => {
        $("#tag").select2();
    }, 1000);
});

function get_detail() { 
    $.ajax({
        type: "get",
        url: "../jsn_artikel?id="+id_artikel,
        dataType: "json",
        success: function (x) {
            x.tag.forEach(e => {
                $('select[name="tag[]"]').find('option[value='+e.id+']').attr('selected',true);
            });

            x.gmb.forEach(e => {
                $('#img_view').append(`<div class="col-md-6" id="gmb${e.id}">
                <div class="img_single mt-4">
                    <img src="../../../data/artikel/${e.img}" alt="">
                    <div class="del_img" onclick="del_gmb_artikel(${e.id})">delete</div>
                </div>
            </div>`);
            });
        }
    });
}

function del_gmb_artikel(id) { 
    var r = confirm("Are you sure to delete this data ? ");
    if (r == true) {
        txt = "You pressed OK!";
        $.ajax({
            type: "post",
            url: "../del_gmb_artikel",
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
                    $('#gmb'+id).remove();
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
  