# Asset manager 
Display assets with id, name, price, lastUpdatedAt, type(Stock/Currency) in a table. 
Randomly update the price by +1 or -1 every second. Also update the last updated at date.
All cols should be sortable and filterable.
Integer columns (id, price) can be filtered based on >val, <val, val, >=val, <=val
Other type columns (name, lastUpdatedAt, type) can be filtered based on partial match

## Project setup
```
Install node v11.8.0
npm install
```

### Compiles and hot-reloads for development, Can access the project using http://localhost:8080/
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

GIF walkthrough (using LiceCap)
![alt tag] (https://github.com/pshegde/asset-manager/blob/master/assetmanager_walkthrough.gif)
