import type { PortfolioItem } from '@/lib/supabase'
import Link from 'next/link'

const mockPortfolio: PortfolioItem[] = [
  {
    id: '1',
    asset_name: 'Donations Dashboard',
    asset_type: 'Analytics / Dashboards',
    quantity: 1,
    value: 95,
    change_percent: 0,
  },
  {
    id: '2',
    asset_name: 'Single Product Page',
    asset_type: 'Web UI / Ecommerce',
    quantity: 1,
    value: 88,
    change_percent: 0,
  },
  {
    id: '3',
    asset_name: 'Cloud Computing Architecture',
    asset_type: 'Cloud / System Design',
    quantity: 1,
    value: 92,
    change_percent: 0,
  },
  {
    id: '4',
    asset_name: 'Database System (ERD)',
    asset_type: 'Database Design',
    quantity: 1,
    value: 90,
    change_percent: 0,
  },
  {
    id: '5',
    asset_name: 'Orders Analytics Charts',
    asset_type: 'Statistics / Visualization',
    quantity: 1,
    value: 86,
    change_percent: 0,
  },
  {
    id: '6',
    asset_name: 'Frontend UI Polish',
    asset_type: 'Development / UI',
    quantity: 1,
    value: 82,
    change_percent: 0,
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <header className="bg-white/60 backdrop-blur-sm border-b-2 border-amber-200 sticky top-0 z-50 shadow-pixel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="pixel-logo">
                <span className="text-2xl font-bold">MJ</span>
              </div>
              <h1 className="text-3xl font-bold pixel-text-primary">Portfolio</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="pixel-nav-link">
                Home
              </Link>
              <Link href="/projects" className="pixel-nav-link">
                Projects
              </Link>
              <a href="/#skills" className="pixel-nav-link">
                Skills
              </a>
              <a href="/#contact" className="pixel-nav-link">
                Contact
              </a>
            </nav>
            <Link href="/#contact" className="pixel-button-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-10">
          <h2 className="text-4xl font-bold pixel-text-section mb-2">Projects</h2>
          <p className="pixel-text-paragraph">
            Add your real screenshots in `public/projects/images/` and we’ll wire them up.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockPortfolio.map((item, idx) => {
              return (
                <div key={item.id} className="pixel-card pixel-card-hover">
                  <div className="pixel-project-image-placeholder">
                    <div className="pixel-project-image-placeholder-inner">
                      Project Image {idx + 1}
                    </div>
                  </div>

                  <div className="flex justify-between items-start mb-4 mt-5">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 pixel-text-primary">
                        {item.asset_name}
                      </h3>
                      <p className="pixel-text-tertiary">{item.asset_type}</p>
                    </div>
                    <div className="pixel-badge">{item.value}%</div>
                  </div>

                  <p className="pixel-text-paragraph mb-4">
                    A modern web application built with responsive design and clean code.
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {['HTML', 'CSS', 'JavaScript', 'TypeScript'].map((tech) => (
                      <span key={tech} className="pixel-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mt-10">
          <Link href="/" className="pixel-link-button">
            ← Back to Home
          </Link>
        </section>
      </main>

      <footer className="bg-white/60 backdrop-blur-sm border-t-2 border-amber-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="pixel-text-tertiary">
            © 2026 Seah Ming Jun. Built with Next.js & Supabase.
          </p>
        </div>
      </footer>
    </div>
  )
}

