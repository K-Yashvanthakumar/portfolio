import { Code2, Database, Brain, Server, Layout, Wrench, Pill, ScanFace, Bot, Compass } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const P = {
  name: 'K. Yashvanthakumar',
  email: 'k.yashvanthakumar@gmail.com',
  github: 'https://github.com/K-Yashvanthakumar',
  linkedin: 'https://www.linkedin.com/in/k-yashvanthakumar15082005/', // TODO: paste your LinkedIn profile URL
  leetcode: 'https://leetcode.com/u/Yashvanthakumar/', // TODO: paste your LeetCode profile URL
  location: 'Bengaluru, Karnataka, India',
  resume: '/K_Yashvanthakumar_Resume.pdf',
  resumeName: 'K_Yashvanthakumar_Resume.pdf',
  photo: '/profile.jpg', // TODO: add public/profile.jpg (falls back to initials)
}

export interface Project {
  title: string; desc: string; features: string[]; tech: string[]; icon: LucideIcon
  repo?: string; demo?: string; image?: string // only set when real URLs/assets exist
}
export const projects: Project[] = [
  { title: 'SENSAI – AI Career Coach', icon: Compass, tech: ['React', 'TypeScript', 'Python', 'BERT', 'NLP', 'RAG', 'PostgreSQL'],
    desc: 'An AI-powered integrated career guidance platform that helps students and job seekers prepare for industry requirements and improve their employability.',
    features: ['AI-powered voice interview simulation', 'Resume analysis and ATS optimization', 'AI resume builder', 'Skill gap analysis', 'Personalized career roadmap', 'Industry insights and job role trends', 'Interview feedback and performance analytics'] },
  { title: 'AI-Based Smart Attendance System', icon: ScanFace, tech: ['Python', 'OpenCV', 'MediaPipe', 'LBPH', 'Flask'],
    desc: 'An intelligent attendance management system using computer vision and face recognition to automate attendance tracking.',
    features: ['Real-time face detection', 'Face recognition', 'Automated attendance tracking', 'Duplicate attendance prevention', 'Attendance records and reporting', 'Web-based attendance dashboard'] },
  { title: 'AI-Powered College Assistant Chatbot', icon: Bot, tech: ['React', 'TypeScript', 'Python', 'BERT', 'NLP'],
    desc: 'An intelligent college assistant chatbot that helps students, faculty, and administrators access college-related information.',
    features: ['BERT-based intent recognition', 'Dynamic knowledge retrieval', 'Role-based access', 'Student and faculty assistance', 'OTP-based authentication'] },
  { title: 'Online Medicine Ordering System', icon: Pill, tech: ['Java', 'JDBC', 'MySQL', 'Swing/JavaFX'],
    desc: 'A Java-based desktop application for managing medicine orders and inventory.',
    features: ['Medicine management', 'Order processing', 'Database integration', 'User-friendly desktop interface'] },
]

export const skills: { title: string; icon: LucideIcon; items: string[] }[] = [
  { title: 'Programming Languages', icon: Code2, items: ['Java', 'C', 'Python', 'JavaScript', 'TypeScript'] },
  { title: 'Frontend Development', icon: Layout, items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'] },
  { title: 'Backend Development', icon: Server, items: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'JDBC'] },
  { title: 'Databases', icon: Database, items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'] },
  { title: 'AI and Machine Learning', icon: Brain, items: ['Machine Learning', 'Deep Learning', 'NLP', 'BERT', 'TensorFlow', 'OpenCV', 'RAG', 'Hugging Face', 'PyTorch'] },
  { title: 'Tools and Platforms', icon: Wrench, items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Docker', 'Postman'] },
]

export interface Cert { name: string; org: string; year?: string; url?: string; image?: string }
// Add `url` (real certificate link) and `image` (e.g. '/certificates/x.png' in public/) when available.
export const certs: Cert[] = [
  { name: 'Generative AI', org: 'Google Cloud', year: '2025' },
  { name: 'Data Science', org: 'Oracle', year: '2025' },
  { name: 'Business Data Cloud Certification', org: 'SAP', year: 'May 2026' },
  { name: 'Introduction to Large Language Models', org: 'NPTEL' },
  { name: 'Software Reliability', org: 'NPTEL' },
  { name: 'Business Fundamentals for Entrepreneurs', org: 'NPTEL' },
  { name: 'Human Computer Interaction', org: 'NPTEL' },
  { name: 'Java Foundations Professional Certificate', org: 'JetBrains & LinkedIn Learning' },
  { name: 'Python Certification', org: 'Infosys Springboard' },
  { name: 'C Programming Certification', org: 'Infosys Springboard' },
  { name: 'Google Cloud Computing Certificate', org: 'Google Cloud Community India' },
]

export const achievements = [
  { emoji: '🏐', title: 'District Volleyball Tournament Winning Captain', meta: '2021' },
  { emoji: '🏅', title: 'Best Outgoing Student', meta: 'Government High School' },
  { emoji: '🏏', title: 'Volleyball and Cricket Interdepartment Team Vice Captain', meta: 'BMS Institute of Technology and Management' },
]
export const nav = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Resume', 'Contact']
