jQuery.fn.extend({
    toggleText: function(a, b) {
        var that = this;

        if (that.text() != a && that.text() != b) {
            that.text(a);
        }
        else if (that.text() == a) {
            that.text(b);
        }
        else if (that.text() == b) {
            that.text(a);
        }
        return this;
    }
});
$(document).ready(function() {

    $('.categories div').click(function() {

        $('.categories div').toggleText('CATEGORIES -', 'CATEGORIES +');

        $('.categories ul').slideToggle("slow");
    });
    $('footer span').eq(0).click(function() {
        $('footer div.aboutUs').slideToggle('slow');
    });

    $('footer span').eq(1).click(function() {
        $('footer div.contacts').slideToggle('slow');
    });
});