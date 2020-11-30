
$(document).ready(function () {
    $("#kategori").select2();
    $("#tag").select2();
    get_select('','#tag','get_tag');
    form_to('#form_add_artikel','./in_artikel');
});
