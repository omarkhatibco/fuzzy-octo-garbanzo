'use client'

import { css } from '#/css'
import { Container } from '#/jsx'

import { AutoComplete } from '@/components'

export default function Page() {
  return (
    <main
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100vw',
      })}
    >
      <Container
        py={8}
        w='full'
      >
        <AutoComplete />
      </Container>
    </main>
  )
}
