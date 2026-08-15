import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, ChevronRight, User, Calendar, Search, Filter } from "lucide-react"
import { motion } from "motion/react"
import { projects } from "@/data/projects"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const swiperRef = useRef<any>(null)

  // Get unique categories
  const categories = ["All", ...new Set(projects.map(p => p.category))]

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.problem.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.researchers.some(r => r.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Group projects for pagination (3 per slide)
  const groupedProjects = filteredProjects.reduce((acc, project, index) => {
    const groupIndex = Math.floor(index / 3)
    if (!acc[groupIndex]) acc[groupIndex] = []
    acc[groupIndex].push(project)
    return acc
  }, [] as Project[][])

  return (
    <div className="relative min-h-screen">
      <div className="grid-bg absolute inset-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-10 relative z-10">
        <div className="border-x border-white/10 min-h-screen py-20">
          {/* Header */}
          <header className="mb-12 px-10">
            <div className="editorial-label text-accent mb-6">Case Studies</div>
            <h1 className="text-EDITORIAL-HERO text-6xl font-black uppercase tracking-tighter">
              PROJECT<br />SHOWCASE
            </h1>
            <p className="mt-6 text-white/60 font-light max-w-2xl">
              Research projects from our faculty and students, showcasing expertise in 
              geophysics, reservoir characterization, environmental studies, and more.
            </p>
          </header>

          {/* Search and Filter */}
          <div className="px-10 mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/20" />
                <Input
                  placeholder="Search projects, researchers..."
                  className="bg-white/5 border-white/10 rounded-none pl-10 text-sm h-12 focus-visible:ring-accent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 text-[10px] uppercase tracking-widest border transition-all",
                      selectedCategory === category
                        ? "border-accent bg-accent text-white"
                        : "border-white/10 bg-white/5 text-white/60 hover:border-white/30"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid with Swiper */}
          <div className="relative px-10">
            {filteredProjects.length === 0 ? (
              <div className="py-20 text-center border border-dashed border-white/10">
                <p className="text-white/40 uppercase tracking-widest text-sm">No projects found</p>
                <Button 
                  variant="link" 
                  onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                  className="text-accent mt-4"
                >
                  Reset all filters
                </Button>
              </div>
            ) : (
              <>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay, EffectFade]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                  }}
                  pagination={{ 
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<span class="${className} !w-8 !h-1 !rounded-none !bg-white/20 data-[state=active]:!bg-accent"></span>`;
                    }
                  }}
                  autoplay={{ delay: 8000, disableOnInteraction: true }}
                  className="pb-12"
                >
                  {groupedProjects.map((group, groupIndex) => (
                    <SwiperSlide key={groupIndex}>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {group.map((project) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: project.id * 0.05 }}
                            className="group border border-white/10 bg-white/5 overflow-hidden hover:border-accent/50 transition-all duration-500 hover:-translate-y-2"
                          >
                            <div className="relative aspect-[16/10] overflow-hidden">
                              <img
                                src={project.beforeImage || "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"}
                                alt={project.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-deep-slate via-transparent to-transparent" />
                              <Badge className="absolute top-4 left-4 bg-accent text-white border-0">
                                {project.category}
                              </Badge>
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className="flex items-center gap-2 text-white/60 text-xs">
                                  <Calendar className="h-3 w-3" />
                                  <span>{project.year}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="p-6">
                              <h3 className="text-lg font-black uppercase tracking-tight mb-3 group-hover:text-accent transition-colors line-clamp-1">
                                {project.title}
                              </h3>
                              <p className="text-xs text-white/60 font-light leading-relaxed mb-4 line-clamp-2">
                                {project.problem}
                              </p>
                              <div className="flex flex-wrap gap-1 mb-4">
                                {project.researchers.slice(0, 3).map((researcher, idx) => (
                                  <span key={idx} className="text-[9px] uppercase tracking-widest text-white/40 bg-white/5 px-2 py-1 border border-white/10">
                                    {researcher}
                                  </span>
                                ))}
                                {project.researchers.length > 3 && (
                                  <span className="text-[9px] uppercase tracking-widest text-accent">
                                    +{project.researchers.length - 3}
                                  </span>
                                )}
                              </div>
                              <div className="flex gap-px bg-white/10">
                                <button 
                                  className="flex-1 bg-deep-slate py-3 text-[10px] uppercase font-bold tracking-widest hover:bg-white hover:text-deep-slate transition-colors"
                                  onClick={() => {
                                    // Scroll to details or open modal
                                    alert(`Project: ${project.title}\n\nProblem: ${project.problem}\n\nMethodology: ${project.methodology}\n\nResearchers: ${project.researchers.join(", ")}`)
                                  }}
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                {groupedProjects.length > 1 && (
                  <div className="flex justify-center gap-px bg-white/10 border border-white/10 mt-4">
                    <button className="swiper-button-prev-custom px-8 py-4 hover:bg-white/5 transition-colors group">
                      <ArrowLeft className="h-5 w-5 text-white/40 group-hover:text-accent" />
                    </button>
                    <button className="swiper-button-next-custom px-8 py-4 hover:bg-white/5 transition-colors group">
                      <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-accent" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Stats Section */}
          <section className="mt-20 px-10">
            <div className="border border-white/10 bg-white/5 p-12 lg:p-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-black text-accent">{projects.length}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mt-2">Total Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-accent">{categories.length - 1}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mt-2">Research Areas</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-accent">
                    {projects.reduce((acc, p) => acc + p.researchers.length, 0)}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mt-2">Researchers</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-accent">
                    {new Set(projects.map(p => p.year)).size}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mt-2">Years Active</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}