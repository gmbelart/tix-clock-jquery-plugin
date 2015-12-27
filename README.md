# TiX Clock jQuery Plugin
## How to use
include jQuery script and TiX Clock jQuery plugin
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery-tix-clock.min.js"></script>
```

include TiX Clock css
```
<link rel="stylesheet" type="text/css" href="css/jquery-tix-clock.min.css">
```

create container
```
<div id="tix-clock"></div>
```

and finally, call TiX Clock jQuery Plugin
```
$('#tix-clock').tixClock();
```

## Available options
| Option         | Default | Description                            |
|----------------|---------|----------------------------------------|
| section1_color | #FF6B76 | Set color on section 1 or hour digit 1 | 
| section2_color | #FFD56B | Set color on section 2 or hour digit 2 |
| section4_color | #7EFD6A | Set color on section 3 or minute digit 2 |
| section3_color | #7C8DFB | Set color on section 4 or minute digit 1 |
| interval       | 3000    | Set interval for refreshing the clock |