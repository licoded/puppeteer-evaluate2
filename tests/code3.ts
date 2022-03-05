import { $$e } from './dom'

export default function getNodejsMenuList() {
  return $$e('body > header > div > nav > ul > li > a')
    .map((elem) => elem.getText())
}