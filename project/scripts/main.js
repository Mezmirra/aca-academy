(function($) {
    $(document).ready(function() {
        var main = {
            el: {
                $header: $('header')
            },
            init: function() {
                this.setActiveHeader();
                this.bind();
            },
            bind: function() {
                var self = this;

                $(window).on('scroll', function() {
                    self.setActiveHeader();
                });
            },
            setActiveHeader: function() {
                if ($(window).scrollTop() > 0) {
                    if (!this.el.$header.hasClass('active')) {
                        this.el.$header.addClass('active');
                    }
                } else {
                    this.el.$header.removeClass('active');
                }
            }
        };

        main.init();
    });
})(jQuery);