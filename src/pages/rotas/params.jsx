import { useRouter } from "next/router";

export default function Params() {
  const router = useRouter();
  const query = router.query;
  console.log(router);

  return (
    <div>
      <h1>
        Rotas params: Nome = {query.nome} & id = {query.id && +query.id}
      </h1>
    </div>
  );
}
