import './style.css'
import {
  createIcons,
  Zap, Monitor, Search, Megaphone, Smartphone, PencilLine, Users,
  Building2, Rocket, Church, Lightbulb, Handshake, Star, TrendingUp,
  CheckCircle, ArrowRight, Settings, BarChart2, FileText, Mail,
  Globe, Layout, Code, Target, Calendar, Shield, Clock, Layers,
  Video, Image, Mic, ChevronLeft
} from 'lucide'

createIcons({
  icons: {
    Zap, Monitor, Search, Megaphone, Smartphone, PencilLine, Users,
    Building2, Rocket, Church, Lightbulb, Handshake, Star, TrendingUp,
    CheckCircle, ArrowRight, Settings, BarChart2, FileText, Mail,
    Globe, Layout, Code, Target, Calendar, Shield, Clock, Layers,
    Video, Image, Mic, ChevronLeft
  }
})

// Navbar scroll effect
const navbar = document.getElementById('navbar')
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60)
  })
}

// Fade-in with stagger
const fadeEls = document.querySelectorAll('.fade-in')
fadeEls.forEach((el) => {
  const siblings = Array.from(el.parentElement.querySelectorAll(':scope > .fade-in'))
  const pos = siblings.indexOf(el)
  el.dataset.fadeDelay = pos * 90
})
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.fadeDelay) || 0
      setTimeout(() => entry.target.classList.add('visible'), delay)
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
fadeEls.forEach(el => observer.observe(el))

// Smooth anchor navigation
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'))
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
  })
})

// Safety net
setTimeout(() => {
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => el.classList.add('visible'))
}, 1500)
