view-engine-raptor
==================
Raptor Templates [view engine](https://github.com/patrick-steele-idem/view-engine)

# Installation

```
npm install view-engine-raptor --save
```

# Usage

Enable the Raptor Templates view engine:
```javascript
require('view-engine').configure({
    engines: {
        'view-engine-rhtml': {
            extensions: ['rhtml']
        }
    }
})
```

The Raptor Templates view engine is now ready to be used elsewhere in your code:

```javascript
var template = require('view-engine').load('hello.rhtml');

// Callback-style
template.render({ name: 'John'}, function(err, data) {
    if (err) {
        console.log('Failed to render: ' + err);
        return;
    }

    console.log('Output: ' + data);
});

// Streaming-style
var out = require('fs').createOutputStream('hello.out', {encoding: 'utf8'});
template.stream({ name: 'John'}).pipe(out);

// Render to an existing render context
template.render({ name: 'John'}, context);
```

See the documentation for the [view engine](https://github.com/patrick-steele-idem/view-engine) module for more information.