import '../App.css'

type StaticPageProps = {
  title: string
  subtitle: string
  items: string[]
}

function StaticPage({ title, subtitle, items }: StaticPageProps) {
  return (
    <main className="main">
      <section className="section">
        <h1>{title}</h1>
        <p className="static-subtitle">{subtitle}</p>
        <ul className="feature-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default StaticPage

