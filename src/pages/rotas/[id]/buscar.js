import { useRouter } from "next/router"

export default function Buscar() {
  const router = useRouter();
  const query = router.query;
  console.log(router);

  return (
    <div>
      <h1>Rotas params: {query.id && +query.id}</h1>
    </div>
  )
}