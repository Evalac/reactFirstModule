import PropTypes from 'prop-types';
import css from './EventCard.module.css';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventStart } from 'utils/formatEventStart';

function EventCard({ name, location, speaker, type, start, end }) {
  const formatStart = formatEventStart(start);
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
          Start: {formatStart}
        </p>
        <p>
          <FaClock className={css.icon} size={16} />
          Duration: {}
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
