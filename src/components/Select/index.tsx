import mock from './mock'
import * as S from './styles'

import { KeyboardArrowDown } from '@styled-icons/material/KeyboardArrowDown'

export type SelectProps = {
  campeonatos: string[]
}

const Select = ({ campeonatos = mock }: SelectProps) => {
  return (
    <S.Wrapper>
      <S.Select id="select">
        {campeonatos.map((campeonato, index) => (
          <S.Option key={index}>{campeonato}</S.Option>
        ))}
      </S.Select>
      <S.ArrowDown htmlFor="select">
        <KeyboardArrowDown size={40} />
      </S.ArrowDown>
    </S.Wrapper>
  )
}

export default Select
