import { useEffect } from "react";

export default function Estatico(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <div>
      <span>Aleatorio: {(props.number * 100).toFixed()}</span>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      number: Math.random(),
    },
  };
}
