import { FC } from 'react'
import { imageMapper } from '@/config'
import { AspectRatio, Box, Center, styled, VStack } from '#/jsx'

import { Movie } from '@/types'

import { Wrapper } from './AutoCompleteResultItem.style'

export type AutoCompleteResultItemProps = Movie & {
  searchValue: string
}

export const AutoCompleteResultItem: FC<AutoCompleteResultItemProps> = ({
  episode_id,
  title,
  director,
  release_date,
}) => {
  const imageName = imageMapper?.[episode_id]
  console.log(imageName)
  const image = imageName
    ? `https://res.cloudinary.com/omarkhatibco/image/upload/v1711493846/${imageName}.jpg`
    : `https://via.placeholder.com/300x400?text=${title}`

  return (
    <Wrapper>
      <Box w={'1/2'}>
        <AspectRatio ratio={3 / 4}>
          <styled.img
            src={image}
            alt={title}
          />
        </AspectRatio>
      </Box>
      <Center p={8}>
        <VStack alignItems={'flex-start'}>
          <styled.h2 fontWeight={'bold'}>
            {title} <styled.span fontWeight={'normal'}>({release_date})</styled.span>
          </styled.h2>
          <styled.p>Director: {director}</styled.p>
        </VStack>
      </Center>
    </Wrapper>
  )
}
