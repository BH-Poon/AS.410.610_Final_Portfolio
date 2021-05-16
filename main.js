$(document).ready(function() {
    $('#emailButton').click(function() {
        $('#fr1').attr('action',
                       'mailto:bpoon1@jhu.edu?subject=' +
                       $('#name').val() + '&body=' + $('#message').val()
							  + '&from=' + $('#emailReturn').val());
        $('#fr1').submit();
    });
});