import css from './PageTitle.module.css';
import PropTypes from 'prop-types';

function PageTitle({ text }) {
  return <h1 className={css.title}>{text}</h1>;
}

export { PageTitle };

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
