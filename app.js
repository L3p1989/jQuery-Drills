$('#btnSubmit').attr('disabled', true);

$('input[type="text"]').on('keyup', function() {
    $('#btnSubmit').attr('disabled', false);
});

$('#btnSubmit').on('click', function() {
    $('input[type="text"]').val(function(i, val) {
        alert(val);
    });
});//this sends out an alert when #btnSubmit is clicked

$('#btnSubmit').after('<div></div>')