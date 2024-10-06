import st from './AppHeader.module.css';

function AppHeader() {
  return (
    <header className={st.header}>
        <h1 className={st.headerTitle}>Теорема Сагуна</h1>
    </header>
  )
}

export default AppHeader