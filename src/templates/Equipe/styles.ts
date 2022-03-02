import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 12rem ${theme.spacings.medium} 0;
  `}
`

export const AllSections = styled.section`
  margin-bottom: 12rem;
`

export const GoleirosSection = styled(AllSections)``

export const ZagueirosSection = styled(AllSections)``

export const LateraisSection = styled(AllSections)``

export const MeiasSection = styled(AllSections)``

export const AtacantesSection = styled(AllSections)``
