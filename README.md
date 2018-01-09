# inno-trans-korean-josa

## Install
```sh
yarn add inno-trans inno-trans-korean-josa-plugin
```
```js
// es6
import trans from "inno-trans";
import plugin from "inno-trans-korean-josa-plugin";

// commonjs
const trans = require('inno-trans');
const plugin = require('inno-trans-korean-josa-plugin');

// add plugin
const lang = trans({ plugin: [plugin] ... });
```
### browser
```html
<script src="https://unpkg.com/inno-trans"></script>
<script src="inno-trans-korean-josa-plugin"></script>
<script>
 var trans = InnoTrans;
 var plugin = InnoTransKoreanJosaPlugin;
</script>
```

## Example
### 은/는
```js
const lang = trans({
  locale: 'ko',
  plugin: [plugin]
  message: {
    ko: { 
      'hello': '안녕, {name|야}' ,
      'bye': '잘가, {name|아}' 
    }
  }
})

> lang.trans('hello', {name:'현수'})
> lang.trans('hello', {name:'호민'})
```
output
```
안녕, 현수야
안녕, 호민아
```
### 야/아
```js
...
'hello': '안녕, {name|야}' ,
'bye': '잘가, {name|아}' 
...

> lang.trans('hello', {name:'현수'})
> lang.trans('hello', {name:'호민'})
> lang.trans('bye', {name:'현수'})
> lang.trans('bye', {name:'호민'})
```
output
```
안녕, 현수야
안녕, 호민아
잘가, 현수야
잘가, 호민아
```