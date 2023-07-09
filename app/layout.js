import './globals.css'
import { Work_Sans } from 'next/font/google'

const WorkSans = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Prompt Mania',
  description: 'Find your next prompt for your AI companion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={WorkSans.className}>{children}</body>
    </html>
  )
}
