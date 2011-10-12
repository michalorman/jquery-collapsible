# jQuery Collapsible Plugin

Simplistic plugin for jQuery allowing to bind collapse effect
triggered by certain component.

## Usage

Bind it to the component you want to callapse, and provide selector to
the collapse trigger:

    $("p").collapsible({ trigger: "h1" });

See `demo.html`.

## Params

* `trigger` (**required**) - selector to collapse trigger.
* `duration` - animation duration in milliseconds (default: 200ms).
* `collapseClass` - class to be set on trigger when collapsed (default: "collapsed").

## License

Absolutely no license.
