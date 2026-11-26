import { FaAward, FaChartLine, FaHandshake } from 'react-icons/fa';

/** Faixa de credibilidade logo após o hero. Todos os dados vêm do conteúdo já publicado no site. */
const stats = [
  { icon: <FaChartLine aria-hidden="true" />, value: '+20 anos', label: 'de experiência em finanças' },
  { icon: <FaHandshake aria-hidden="true" />, value: '8 serviços', label: 'para o seu financeiro' },
  { icon: <FaAward aria-hidden="true" />, value: '2 sócias', label: 'certificadas em BPO e consultoria' },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Santo BPO em números">
      <ul className="container stats__list">
        {stats.map((s) => (
          <li key={s.value} className="stats__item" data-reveal>
            <span className="stats__icon">{s.icon}</span>
            <span className="stats__text">
              <strong>{s.value}</strong>
              <small>{s.label}</small>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
