import { render } from '@testing-library/react'

import { AutoCompleteResultItem } from './AutoCompleteResultItem'

const item = {
  title: 'A New Hope',
  episode_id: 4,
  opening_crawl:
    "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
  director: 'George Lucas',
  producer: 'Gary Kurtz, Rick McCallum',
  release_date: '1977-05-25',
}

describe('AutoCompleteResultItem', () => {
  it('renders a title', () => {
    const { getByTestId } = render(
      <AutoCompleteResultItem
        {...item}
        searchValue='ne'
      />,
    )
    expect(getByTestId('title')).toBeInTheDocument()
  })

  it('renders the correct image', () => {
    const { getByRole } = render(
      <AutoCompleteResultItem
        {...item}
        searchValue='ne'
      />,
    )
    expect((getByRole('img') as HTMLImageElement).src).toBe(
      'https://res.cloudinary.com/omarkhatibco/image/upload/v1711493846/episodeV.jpg',
    )
  })

  it('fallback to placeholder image', () => {
    const { getByRole } = render(
      <AutoCompleteResultItem
        {...item}
        episode_id={100}
        searchValue='ne'
      />,
    )
    expect((getByRole('img') as HTMLImageElement).src).toBe(
      'https://via.placeholder.com/300x400?text=A%20New%20Hope',
    )
  })
})
