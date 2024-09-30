import PropTypes from 'prop-types';
import css from './EventCard.module.css';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { durationTime, formatEventStart } from 'utils';
import { iconSize } from 'constans';

function EventCard({ name, location, speaker, type, start, end }) {
  const formatStart = formatEventStart(start);
  const resultDuration = durationTime(start, end);

  return (
    <div className={css.eventCard}>
      <h2 className={css.eventName}>{name}</h2>
      <p className={css.eventLocation}>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
        {location}
      </p>
      <p className={css.eventSpeaker}>
        <FaUserAlt className={css.icon} size={iconSize.sm} />
        {speaker}
      </p>

      <div className={css.eventTime}>
        <p>
          <FaCalendarAlt className={css.icon} size={iconSize.sm} />
          Start: {formatStart}
        </p>
        <p>
          <FaClock className={css.icon} size={iconSize.sm} />
          Duration: {resultDuration}
        </p>
      </div>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
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
