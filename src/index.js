import {makeJosaify} from 'josa'

const josas = [
  '은', '는',
  '이', '가',
  '을', '를',
  '과', '와',
  '이었', '였',
  '이어', '여',
  '이에요', '예요',
  '아', '야',
  '이?',
  '으로', '로'
]

export default function (lang) {
  for (const josa of josas) {
    lang.filter(josa, makeJosaify(josa))
  }
}
