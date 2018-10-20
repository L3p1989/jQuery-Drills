$('#btnSubmit').on('click', function() {
    $('input[type="text"]').val(function( i, val ) {
        alert(val);
    });
});//this sends out an alert when #btnSubmit is clicked