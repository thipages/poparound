# poparound

poparound allows to show a popup above the element (or a list) while the mouse move over it.

## How To Use
- via npm : `npm i poparound` then use
```javascript
    import poparound from 'poparound';
```
- within HTML via script tag :
```html
    <!-- ES5 version -->
    <script src="min.js"></script>
    <!-- ES6 version -->
    <script type="module" src="index.js"></script>
```

## API
`poparound(elementOrList, popupElement, popupCallback)`

`popupCallback(element,popupElement)` is a callback function allowing interaction with the popup element while shown.