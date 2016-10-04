/**
 * Created by Zaga on 04/10/2016.
 */
$('select').each(function () {
   var context = $(this).parent();
   var config = $('input[type=hidden]', context).val();
    try {
        config = JSON.parse(config);
        $('select', context).select2(config);
    } catch (e) {
        console.log(e);
    }
});