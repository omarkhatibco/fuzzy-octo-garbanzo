import { FC } from 'react'

import { Movie } from '@/types'

import { Wrapper } from './AutoCompleteResultItem.style'

export type AutoCompleteResultItemProps = Movie

export const AutoCompleteResultItem: FC<AutoCompleteResultItemProps> = ({}) => {
  return <Wrapper>Hello Itemn</Wrapper>
}
