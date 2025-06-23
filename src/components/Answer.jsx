export default function Answer({ answers }) {
  return (
    <>
      {answers.map((a, i) => {
        // TODO
        return <button key={i}>{a}</button>;
      })}
    </>
  );
}
