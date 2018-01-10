# inno-trans-korean-josa-plugin
[inno-trans](https://github.com/skt-t1-byungi/inno-trans) plugin for korean josa

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
      'good': '{name|은} 좋다' ,
      'bad': '{name|는} 별로다' 
    }
  }
})

> lang.trans('good', {name:'롤'})
> lang.trans('good', {name:'히오스'})
> lang.trans('bad', {name:'롤'})
> lang.trans('bad', {name:'히오스'})
```
output
```
롤은 좋다
히오스는 좋다
롤은 별로다
히오스는 별로다
```

### 이/가
```js
...
'clean': '{name|이} 깨끗하다' ,
'dirty': '{name|가} 더럽다' 
...

> lang.trans('clean', {name:'집'})
> lang.trans('clean', {name:'학교'})
> lang.trans('dirty', {name:'집'})
> lang.trans('dirty', {name:'학교'})
```
output
```
집이 깨끗하다
학교가 깨끗하다
집이 더럽다
학교가 더럽다
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

### 이?
```js
...
'question': '{name|이?}란 무엇일까?' ,
...

> lang.trans('question', {name:'꿈'})
> lang.trans('question', {name:'목표'})
```
output
```
꿈이란 무엇일까?
목표란 무엇일까?
```

### ETC
- 을/를
- 과/와
- 이었/였
- 이어/여
- 이에요/예요
- 으로/로

## License
MIT