import { CharactersList, PageTitle } from '../components'
import { jujutsu } from '../data/characters'

export const JujutsuKaisen = () => {
  const logoUrl =
    'https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2022/01/30/890179847.jpeg'
  const component = (
    <>
      <PageTitle title="Jujutsu Kaisen" />

      <CharactersList anime={jujutsu} logoUrl={logoUrl} />
    </>
  )
  return component
}
