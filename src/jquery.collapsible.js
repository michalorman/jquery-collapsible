/**
 * jQuery Collapsible 0.1
 *
 * Simplistic plugin allowing to apply collapse behavior to certain section
 * triggered by other component.
 *
 * Author: Michal Orman
 */
(function($) {
    /**
     * Binds collapse behavior to the object triggered by component identified
     * by given selector.
     */
    $.fn.collapsible = function(args) {
        var args = $.extend({}, $.fn.collapsible.defaults, args);
        var self = this;
        $(args.trigger).click(function() {
            $(this).toggleClass(args.collapsedClass);
            $(self).slideToggle({
                duration: args.duration
            });
        });
    }

    $.fn.collapsible.defaults = {
        duration: 200,
        collapsedClass: "collapsed"
    }
})(jQuery);