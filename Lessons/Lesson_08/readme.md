Finally, we are talking about modules with standard javascript.  To run modules in your web page, you need to use the:

```html
    <script type="module" src="js/script.js"></script>
```

The catch is, you need to run this either in a dev environment or you need to have it run on a server!
In VSC you can do this with Live Server application (plugin).  


### Notes
- Two types of exports

1. Named exports: each module can multiple named exports
2. Default exports: each module can only have one default export

- <!> Importing classes with this method requires us to give the correct file name along with its '.js' file suffix

```javascript
import Player from "./player.js";
```

1. Instructor explains a lot of what is happening during 6:35:00 and 6:40:00.  It is hard to follow so I want to go back over it later
