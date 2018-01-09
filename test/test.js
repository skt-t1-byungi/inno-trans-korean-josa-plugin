import test from 'ava'
import trans from 'inno-trans'
import plugin from '../src/index'

test('test', t => {
  const lang = trans({
    locale: 'ko',
    message: {
      ko: {
        test1: '{person1|이} {person2|와} 함께 {place|으로} 간다.',
        test2: '{호랑이|이었}는데 {사슴|였}나',
        test3: '{호랑이|은}커녕 {사슴|는}커녕',
        test4: '{호랑이|이어}서 {사슴|여}서',
        test5: '{하늘|이?}시여 {부처|이?}시여'
      }
    },
    plugin: [plugin]
  })

  t.is(lang.trans('test1', {person1: '친구', person2: '선생님', place: '학교'}), '친구가 선생님과 함께 학교로 간다.')
  t.is(lang.trans('test2', {'호랑이': '호랑이', '사슴': '사슴'}), '호랑이였는데 사슴이었나')
  t.is(lang.trans('test3', {'호랑이': '호랑이', '사슴': '사슴'}), '호랑이는커녕 사슴은커녕')
  t.is(lang.trans('test4', {'호랑이': '호랑이', '사슴': '사슴'}), '호랑이여서 사슴이어서')
  t.is(lang.trans('test5', {'하늘': '하늘', '부처': '부처'}), '하늘이시여 부처시여')
})
