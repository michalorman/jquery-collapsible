# jQuery Collapsible Plugin

Simplistic plugin for jQuery allowing to bind collapse effect
triggered by certain component.

## Usage

Bind it to the component you want to callapse, and provide selector to
the collapse trigger:

    $("p").collapsible({ trigger: "h1" });

See `demo.html`.

## Params

* `trigger` - selector to collapse trigger (**required**).
* `duration` - animation duration in milliseconds (default: 200ms).
* `expanded` - indicates if collapsible section is rendered as expanded (default: true).
* `collapsedClass` - class to be set on trigger when collapsed (default: "collapsed").
* `expandedClass` - class to be set on trigger when expanded (default: "expanded").

Note that if plugin is bound to the collapsible section which is
rendered as collapsed during DOM loading (the `expanded` parameter set
to `false`) it doesn't mean that plugin will automatically collapse
the section. It should be hidden using CSS property in order to ensure
correct plugin work.

## License

Absolutely no license.
