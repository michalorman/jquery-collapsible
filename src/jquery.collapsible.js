/**
 * jQuery Collapsible 0.2
 *
 * Simplistic plugin allowing to apply collapse behavior to certain section
 * triggered by other component.
 *
 * Author: Michal Orman
 * Site: https://github.com/michalorman/jquery-collapsible
 */
(function($) {
    /**
     * Binds collapse behavior to the object triggered by component identified
     * by given selector.
     */
    $.fn.collapsible = function(args) {
        var args = $.extend({}, $.fn.collapsible.defaults, args);
        var self = this;
        $(args.trigger).addClass(args.expanded ? args.expandedClass : args.collapsedClass);
        $(args.trigger).click(function() {
            $(this).toggleClass(args.collapsedClass);
            $(this).toggleClass(args.expandedClass);
            $(self).slideToggle({
                duration: args.duration
            });
        });
    }

    $.fn.collapsible.defaults = {
        duration: 200,
        expanded: true,
        collapsedClass: "collapsed",
        expandedClass: "expanded"
    }
})(jQuery);