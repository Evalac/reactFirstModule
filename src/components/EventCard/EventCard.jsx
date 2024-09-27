import PropTypes from 'prop-types';
import css from './EventCard.module.css';
import { type } from '@testing-library/user-event/dist/type';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';

function EventCard({ name, location, speaker, type, start, end }) {
  return (
    <div className={css.eventCard}>
      <h2 className={css.eventName}>{name}</h2>
      <p className={css.eventLocation}>
        <FaMapMarkerAlt className={css.icon} size={16} />
        {location}
      </p>
      <p className={css.eventSpeaker}>
        <FaUserAlt className={css.icon} size={16} />
        {speaker}
      </p>
      <p className={css.eventType}>
        <FaCalendarAlt className={css.icon} size={16} />
        Type: {type}
      </p>
      <div className={css.eventTime}>
        <p>
          <FaClock className={css.icon} size={16} />
          Start: 2024-11-01 09:00
        </p>
        <p>
          <FaClock className={css.icon} size={16} />
          End: 2024-11-01 17:00
        </p>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export { EventCard };
