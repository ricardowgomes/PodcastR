import format from 'date-fns/format';
// import ptBR from 'date-fns/locale/pt-BR'; // para converter hora em ptBR

import styles from './styles.module.scss';

export function Header() {
  const currentDate = format(new Date(), 'E, MMMM do'/*, {
    locale: ptBR,
  }*/);

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="PodcastR" />

      <p>The best for you to listen, always</p>

      <span>{currentDate}</span>
    </header>
  );
}