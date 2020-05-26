# node-cityscoot

An API for Cityscoot scooters

Do you need a __paid license__ ? [https://jzarca01.github.io/contact](https://jzarca01.github.io/contact)

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
await city.login();
```

### Get Scooters

```javascript
await city.getScooters(cityId);
// Paris: 4
// Nice: 6
// Milan: 9
// Rome: 10
```

### Get Scooter by code

```javascript
await city.getScooter(cityId, scooterName);
// cityId: 4
// scooterName: 5193
```

### Create a reservation

```javascript
await city.createReservation(scooterId);
// scooterId can be fetched from getScooter
```

### Cancel a reservation

```javascript
await city.cancelReservation();
```
