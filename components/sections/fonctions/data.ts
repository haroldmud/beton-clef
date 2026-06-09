interface FunctionItem {
  image: string
  title: string
  description: string
}

interface NavItem {
  name: string
  path: string
}

const data: FunctionItem[] = [
  {
    image: 'https://i.pinimg.com/736x/37/ef/bb/37efbb113def491c822d6dbc0d734550.jpg',
    title: 'Construction de bâtiments',
    description: 'Nous offrons des services de planification approfondis, de conception et de construction de haute qualité pour répondre aux besoins uniques de chaque client.',
  },
  {
    image: 'https://i.pinimg.com/236x/e9/0f/fe/e90ffea5f9de700e4353d50c17a887b9.jpg',
    title: 'Réparation de bâtiment',
    description: 'Nous offrons des services de réparation rapides et fiables pour tous les types de bâtiments, y compris les résidences, les commerces, les bâtiments industriels, etc.',
  },
  {
    image: 'https://i.pinimg.com/1200x/48/a3/ae/48a3aea9392f71b9333f1b363ef352b2.jpg',
    title: 'Démolition',
    description: 'Nous utilisons les dernières techniques de démolition pour minimiser les dégâts et les impacts sur l\'environnement tout en travaillant en étroite collaboration avec nos clients.',
  },
  {
    image: 'https://i.pinimg.com/1200x/d6/1c/dc/d61cdcedbad9572f2f227f8e6c6b9aaa.jpg',
    title: 'Fondation',
    description: 'Nous utilisons des matériaux de haute qualité et les dernières techniques pour garantir la durabilité et la stabilité des fondations pour chaque bâtiment de nos clients.',
  },
  {
    image: 'https://i.pinimg.com/736x/03/48/0b/03480b510b32e9a9a1aa49f660dab316.jpg',
    title: 'Peinture & Extérieur',
    description: 'L\'apparence extérieure d\'un bâtiment étant cruciale. Nous utilisons des peintures de qualité supérieure et des techniques modernes pour garantir une finition durable et attrayante.',
  },
  {
    image: 'https://i.pinimg.com/736x/3e/06/9c/3e069cddd8436a9a99d8566cf1ab1033.jpg',
    title: 'Administration de chantier',
    description: 'Nous offrons des services d\'administration de chantier complets. Nous gérons efficacement les calendriers, les budgets et les ressources pour assurer la qualité et la livraison à temps des projets.',
  },
]

export default data

export const navData: NavItem[] = [
  { name: 'ACCEUIL', path: '/' },
  { name: 'SERVICES', path: '#function' },
  { name: 'REALISATION', path: '#realisation' },
  { name: 'A PROPOS', path: '#about' },
  { name: 'CONTACT', path: '/contact' },
]
