import { CharactersList } from '../components'
import { dragonBall } from '../data/characters'
import { PageTitle } from '../components/PageTitle'

export const DragonBall = () => {
  const logoUrl =
    'https://www.viniloscasa.com/37253-thickbox/vinilos-y-pegatinas-dragon-ball-z-goku-logo.jpg'

  const component = (
    <>
      <PageTitle title="Dragon Ball" />

      <CharactersList anime={dragonBall} logoUrl={logoUrl} />
    </>
  )
  return component
}
