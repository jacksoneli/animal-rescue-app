import { Link } from 'react-router-dom';

export default function Home(props) {
  const { data } = props;
  const _data = data.getPetAnimalInfo.body.items.item;
  // const sj = _data.sj; // 제목
  // const ty3Process = _data.ty3Process; // 인계상태
  // const ty3Kind = _data.ty3Kind;  // 견종
  // 이미지 추가 ty3Picture

  return (
    <main className="container Home">
      <h1>Home</h1>
      <ul className="item-list">
        {
          _data.map((item, key) => {
            return (
              <li key={key}>
                <Link to={`detail/${key}`}>
                  <img loading="lazy" src={item.ty3Picture} alt={item.ty3Kind} />
                  <h3>{item.sj}</h3>
                  <p>상태: {item.ty3Process}</p>
                  <p>견종: {item.ty3Kind}</p>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
