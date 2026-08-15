export interface Project {
  id: number
  title: string
  category: string
  problem: string
  methodology: string
  researchers: string[]
  year: string
  beforeImage?: string
  afterImage?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sweetness Analysis of Lower Goru Formation",
    category: "Reservoir Characterization",
    problem: "Identifying gas-bearing zones in the Lower Goru sandstone intervals of the Cretaceous age, Sawan Gas Field, Middle Indus Basin, Pakistan.",
    methodology: "Applied sweetness analysis using seismic attributes to map hydrocarbon-bearing zones. Integrated petrophysical analysis with rock physics modeling.",
    researchers: ["Dr. Tahir Azeem", "Dr. Wang Yanchun", "Dr. Perveiz Khalid"],
    year: "2018",
    beforeImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Seismic Reservoir Characterization - Jidong Oil Field",
    category: "Oil & Gas Exploration",
    problem: "Identifying subtle traps and characterizing thin reservoirs in the Jidong oil field, China, through seismic inversion techniques.",
    methodology: "Performed petrophysical analysis, seismic attribute analysis, CSSI Inversion, and geostatistical inversion. Created sand thickness maps.",
    researchers: ["Dr. Tahir Azeem", "Petro China Team"],
    year: "2013-2015",
    beforeImage: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Groundwater Contamination Assessment - Bhakkar",
    category: "Environmental Geophysics",
    problem: "Assessing groundwater quality and health risks caused by arsenic (As) contamination in different tehsils of Bhakkar district, Pakistan.",
    methodology: "Integrated hydrogeochemical analysis with health risk assessment. Used multivariate statistical techniques and GIS mapping.",
    researchers: ["Dr. Faiz ur Rehman", "Dr. Tahir Azeem", "Javed Siddique"],
    year: "2020",
    beforeImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "AVO Classification Using Rock Physics Template",
    category: "Seismic Analysis",
    problem: "Classifying AVO responses of Pab sandstone in Lower Indus Basin, Pakistan using rock physics template analysis.",
    methodology: "Built rock physics templates integrating well log data and seismic attributes. Performed AVO classification and analysis.",
    researchers: ["Saba Gul", "Dr. Tahir Azeem"],
    year: "2019",
    beforeImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1581092335874-9e4a5b0e5e8e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Geophysical Survey for Porphyry Copper Deposits",
    category: "Mineral Exploration",
    problem: "Identifying porphyry copper deposits in Dalbandin, Chagi, Balochistan through integrated geophysical surveys.",
    methodology: "Conducted gravity and magnetic surveys using Oasis Montaj software. Processed and interpreted geophysical data to map mineralization zones.",
    researchers: ["Dr. Tahir Azeem", "Mineral Exploration & Development Organization"],
    year: "2023-2024",
    beforeImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Glacier Fluctuation Analysis - Hunza Basin",
    category: "Climate Science",
    problem: "Analyzing the impact of glacial fluctuations in Hunza Basin along the Karakoram Highway using InSAR Sentinel-1 data through machine learning.",
    methodology: "Applied machine learning algorithms to InSAR Sentinel-1 data. Analyzed glacial fluctuations and their impact on infrastructure.",
    researchers: ["Talha Khalid", "Dr. Tahir Azeem", "Dr. Faiz ur Rehman"],
    year: "2024",
    beforeImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    title: "Earthquake Model for Middle East",
    category: "Seismic Hazard",
    problem: "Developing an earthquake model for the Middle East region through analysis of earthquake catalogues, peak ground acceleration, velocity, and displacement.",
    methodology: "Analyzed earthquake catalogues using Scream, Seismosignal, and ART Software. Created peak ground acceleration and displacement models.",
    researchers: ["Dr. Tahir Azeem", "Center for Excellence in Geology, Peshawar"],
    year: "2010-2011",
    beforeImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1581092335874-9e4a5b0e5e8e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    title: "Tight Reservoir Characterization - Qadir Pur",
    category: "Reservoir Studies",
    problem: "Characterizing tight reservoirs based on pore geometry analysis in Qadir Pur Area, Middle Indus Basin, Pakistan.",
    methodology: "Analyzed pore geometry using advanced petrophysical techniques. Integrated with rock physics modeling and seismic analysis.",
    researchers: ["Muhammad Usman", "Dr. Tahir Azeem"],
    year: "2021",
    beforeImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1581092335874-9e4a5b0e5e8e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    title: "Landslide Susceptibility Mapping - Kashmir Region",
    category: "Geo-hazards",
    problem: "Mapping landslide susceptibility in Kashmir Region, Pakistan using weighted overlay method based on GIS.",
    methodology: "Used GIS-based weighted overlay method integrating multiple factors. Created landslide susceptibility maps for risk assessment.",
    researchers: ["Ali Hasnain Malik", "Dr. Tahir Azeem"],
    year: "2026",
    beforeImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 10,
    title: "Spatio-temporal Glacier Variability Study",
    category: "Climate Change",
    problem: "Studying spatio-temporal variability of Shigar Basin Glaciers, Central Karakoram Region, Pakistan.",
    methodology: "Comparative analysis of selected glaciers using remote sensing data from 1972-2018. Assessed varied responses to climate change.",
    researchers: ["Dr. Faiz ur Rehman", "Dr. Tahir Azeem", "S. Mustafa"],
    year: "2025",
    beforeImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
  }
]