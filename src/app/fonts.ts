import { Inter, Orbitron } from 'next/font/google'
import '../styles/global.scss'

const inter = Inter({ subsets: ['latin'], variable: '--inter', weight: ['400', '500', '600', '700'] })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--orbitron', weight: ['600', '800', '900'] })
export const FontsVariables = `${inter.variable} ${orbitron.variable}`
