import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import styles from "../styles/Home.module.css"
import PostForm from "../components/forms/postForm.js"
export default function Home() {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePageTitle}>Home</h1>
      <PostForm />
      
    </div>
  )
}
