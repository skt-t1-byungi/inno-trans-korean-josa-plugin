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

export default function ({
  locale: korLocale = 'ko'
} = {}) {
  return (message, values, locale, [prefix, suffix]) => {
    // if no korean locale, pass
    if (locale !== korLocale) {
      return message
    }

    const regex = new RegExp(`\\${prefix}\\s*([^|\\s]*).*?\\|\\s*(?:` + josas.join('|') + `)[^}]*\\}${suffix}`)

    return message.replace(regex, (match, key, josa) => {
      if (!values.hasOwnProperty(key)) {
        return match
      }

      values[key] = makeJosaify(josa)(values[key])

      return prefix + key + suffix
    })
  }
}
