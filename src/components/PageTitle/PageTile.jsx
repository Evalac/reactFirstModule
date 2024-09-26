import css from './PageTitle.module.css';

function PageTitle({ text }) {
  return <h1 className={css.title}>{text}</h1>;
}

export { PageTitle };
