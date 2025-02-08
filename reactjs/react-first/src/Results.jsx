import ResultItem from "./ResultItem";

function Results() {
  return (
    <section id="results">
      <h1>Voici le resultat de ta recherche</h1>
      <ul className="results-list">
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
      </ul>
    </section>
  );
}

export default Results;
