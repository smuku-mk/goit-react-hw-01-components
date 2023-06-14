import PropTypes from 'prop-types';
import './Statistics.css';
import { randomColor } from './randomColor';

export const Statistics = ({ title, data }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {data.map(e => (
          <li
            class="item"
            key={e.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span class="label">{e.label}</span>
            <span class="percentage">{e.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
