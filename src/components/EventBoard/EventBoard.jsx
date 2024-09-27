import css from './EventBoard.module.css';
import PropTypes from 'prop-types';
import { EventCard } from 'components/EventCard/EventCard';

function EventBoard({ events }) {
  console.log(events);

  return (
    <div className={css.eventBoard}>
      {events.map(event => (
        <EventCard
          key={event.name}
          name={event.name}
          speaker={event.speaker}
          type={event.type}
          location={event.location}
          start={event.time.start}
          end={event.time.end}
        />
      ))}
    </div>
  );
}

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: {
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      },
    })
  ),
};

export { EventBoard };
