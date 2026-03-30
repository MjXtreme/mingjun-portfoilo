import type { PortfolioItem } from '@/lib/supabase'
import Link from 'next/link'
import Image from 'next/image'

import projectImg1 from 'C:/Users/mingj/.cursor/projects/c-Users-mingj-Downloads-mingjun-portfoilo/assets/c__Users_mingj_AppData_Roaming_Cursor_User_workspaceStorage_e6bb39c974923897c66fd360f08f8d75_images_IWL1_2-4b2876e9-7a3c-4516-b9b1-0f54e8057fb6.png'
import projectImg2 from 'C:/Users/mingj/.cursor/projects/c-Users-mingj-Downloads-mingjun-portfoilo/assets/c__Users_mingj_AppData_Roaming_Cursor_User_workspaceStorage_e6bb39c974923897c66fd360f08f8d75_images_web_system-56f94d26-2d8d-4fdf-8b8b-c47e9c4094f8.png'
import projectImg3 from 'C:/Users/mingj/.cursor/projects/c-Users-mingj-Downloads-mingjun-portfoilo/assets/c__Users_mingj_AppData_Roaming_Cursor_User_workspaceStorage_e6bb39c974923897c66fd360f08f8d75_images_cloud_computing-c965799d-2385-4c96-bc35-d9c5cd1caa85.png'
import projectImg4 from 'C:/Users/mingj/.cursor/projects/c-Users-mingj-Downloads-mingjun-portfoilo/assets/c__Users_mingj_AppData_Roaming_Cursor_User_workspaceStorage_e6bb39c974923897c66fd360f08f8d75_images_db_sys-2920c939-3180-4e77-b5c9-bd01672ec7d2.png'
import projectImg5 from 'C:/Users/mingj/.cursor/projects/c-Users-mingj-Downloads-mingjun-portfoilo/assets/c__Users_mingj_AppData_Roaming_Cursor_User_workspaceStorage_e6bb39c974923897c66fd360f08f8d75_images_IWL1-cf6c544c-faac-4ada-b63c-938165ca4aac.png'
import projectImg6 from 'C:/Users/mingj/.cursor/projects/c-Users-mingj-Downloads-mingjun-portfoilo/assets/c__Users_mingj_AppData_Roaming_Cursor_User_workspaceStorage_e6bb39c974923897c66fd360f08f8d75_images_typing-82978142-6d06-49b6-ba7a-4122dea4385f.png'

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
            Image placeholders are ready—replace them with your project screenshots.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockPortfolio.map((item, idx) => {
              const images = [projectImg1, projectImg2, projectImg3, projectImg4, projectImg5, projectImg6]
              const img = images[idx] ?? projectImg1

              return (
                <div key={item.id} className="pixel-card pixel-card-hover">
                  <div className="pixel-project-image-frame">
                    <Image
                      src={img}
                      alt={`${item.asset_name} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={idx < 2}
                    />
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

