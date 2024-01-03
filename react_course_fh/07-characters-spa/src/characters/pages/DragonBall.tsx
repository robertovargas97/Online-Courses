import { CharactersList } from '../components'
import { dragonBall } from '../data/characters'
import { PageTitle } from '../components/PageTitle'

export const dragonBallLogoUrl =
  'https://www.viniloscasa.com/37253-thickbox/vinilos-y-pegatinas-dragon-ball-z-goku-logo.jpg'

export const DragonBall = () => {
  const component = (
    <>
      <PageTitle title="Dragon Ball" />

      <CharactersList anime={dragonBall} logoUrl={dragonBallLogoUrl} />
    </>
  )
  return component
}
