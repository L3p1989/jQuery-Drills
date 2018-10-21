function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

$('#btnSubmit').after('<div></div>');

$('form').after('<ul></ul>');

$('#btnSubmit').attr('disabled', true);

$('input[type="text"]').keyup(function () {
    if ($('input[type= "text"]').val() == '') {
        $('#btnSubmit').attr('disabled', true);
    } else ($('#btnSubmit').attr('disabled', false))
}).keyup();

$('#btnSubmit').click(function(e) {
    e.preventDefault();
    $('input[type="text"]').val(function(i, val) {
        $('ul').append('<li>' + val + '</li>');
        $('li').click(function() {
            $(this).css('color', 'rgb(' + getRandomInt(255) + ',' + getRandomInt(255) + ',' + getRandomInt(255))
        })
        $('li').dblclick(function(e) {
            $('li').remove()
        })
    });
});//this sends out an alert when #btnSubmit is clicked