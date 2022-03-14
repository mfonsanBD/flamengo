import * as S from './styles'

type ClassificationData = {
  simbolo: string
  time: string
  jogos: number
  vitorias: number
  empates: number
  derrotas: number
  golsPro: number
  golsContra: number
}

export type ClassificationTableProps = {
  items: ClassificationData[]
}

const ClassificationTable = ({ items }: ClassificationTableProps) => {
  return (
    <S.Wrapper>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th align="left">Clube</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GP</th>
            <th>GC</th>
            <th>SG</th>
          </tr>
        </thead>
        {items.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{index + 1}</td>
              <td>
                <S.EscudoENome>
                  <S.Escudo src={item.simbolo} alt={item.time} />
                  {item.time}
                </S.EscudoENome>
              </td>
              <td>{item.vitorias * 3 + item.empates * 1}</td>
              <td>{item.jogos}</td>
              <td>{item.vitorias}</td>
              <td>{item.empates}</td>
              <td>{item.derrotas}</td>
              <td>{item.golsPro}</td>
              <td>{item.golsContra}</td>
              <td>{item.golsPro - item.golsContra}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </S.Wrapper>
  )
}

export default ClassificationTable
