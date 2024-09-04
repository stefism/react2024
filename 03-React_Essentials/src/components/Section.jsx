export default function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      {/* children - запазено име на проперти, което подава на компонента, това което е между отварящия и затварящия таг. */}
    </section>
  );
}
