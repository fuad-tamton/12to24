## Usage

### 12 to 24
```javascript
const {formatTime} = require('12to24');

formatTime('10-15'); //10:15
formatTime('10-15 PM'); //22:15
formatTime('10 15 pm'); //22:15
formatTime('12 00 am'); //00:00

```

### 24 to 12
```javascript
const {formatTime} = require('12to24');

formatTime('22 15',{to12:true}); //10:15 PM
formatTime('24 00',{to12:true}); //12:00 PM
formatTime('10-15',{to12:true}); //10:15 AM
formatTime('11:45 pm',{to12:true}); //11:45 PM

```

## Installation
```
npm i --save 12to24
```