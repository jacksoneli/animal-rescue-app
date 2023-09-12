import { useParams } from "react-router-dom"

export default function Detail(props) {
  const { data } = props;
  const _data = data.getPetAnimalInfo.body.items.item; 

  const params = useParams(); // url 파라미터 저장
  console.log(params)
 

  return (
    <main className="container Detail">
      <h1>Detail</h1>
      <p>상품번호: {params.id}</p>
      <img src={_data[params.id].ty3Picture} />
      <h3>{_data[params.id].sj}</h3>
      <p>{_data[params.id].cn}</p>
      <p>상태: {_data[params.id].ty3Process}</p>
      <p>견종: {_data[params.id].ty3Kind}</p>
    </main>

  )
}
