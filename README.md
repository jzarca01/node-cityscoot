# node-bird

An API for Cityscoot scooters

_Do you need a __paid license__ ? [https://jzarca01.github.io/contact](https://jzarca01.github.io/contact)

## Usage

```javascript
const Cityscoot = require('node-cityscoot');
const city = new Cityscoot({
  licenseFilePath: './license_files/file.lic', // relative path to the root of the project
  licenseFile, // if you prefer to specify the raw content of the license file
  email: '',
  password: ''
});
```

For a cool example, see _example/index.js_

### Log in

```javascript
city.login();
```

### Get Scooters

```javascript
city.getScooters(cityId);
// Paris: 4
// Nice: 6
// Milan: 9
// Rome: 10
```

### Get Scooter by code

```javascript
city.getScooter(cityId, scooterName);
// cityId: 4
// scooterName: 5193
```

### Create a reservation

```javascript
city.createReservation(scooterId);
scooterId can be fetched from getScooter
```

### Cancel a reservation

```javascript
city.cancelReservation();
```
