'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  Award, 
  Users, 
  CheckCircle,
  Building,
  Truck,
  HardHat,
  Wrench
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Konstruksi Jalan Raya",
      description: "Pembangunan jalan raya dengan standar kualitas tinggi dan material terbaik"
    },
    {
      icon: <HardHat className="h-8 w-8 text-blue-600" />,
      title: "Pengaspalan Jalan",
      description: "Jasa pengaspalan profesional untuk jalan kota, provinsi, dan nasional"
    },
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Infrastruktur Jalan",
      description: "Pembangunan infrastruktur pendukung jalan seperti drainase dan trotoar"
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Maintenance Jalan",
      description: "Perawatan dan perbaikan jalan untuk menjaga kualitas dan keamanan"
    }
  ]

  const achievements = [
    { number: "100+", label: "Proyek Selesai" },
    { number: "15+", label: "Tahun Pengalaman" },
    { number: "50+", label: "Tim Profesional" },
    { number: "98%", label: "Kepuasan Klien" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo.png" 
                  alt="PT WILDHAN BANGUN SEJAHTERA Logo" 
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">PT WILDHAN BANGUN SEJAHTERA</h1>
                  <p className="text-xs text-gray-600">Konstruksi Jalan Raya</p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                Hubungi Kami
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/road-construction.jpg" 
            alt="Road Construction" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/90 to-orange-600/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-orange-500 text-white px-6 py-3 text-lg">
            🏗️ Profesional Konstruksi Jalan Raya
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            PT WILDHAN BANGUN SEJAHTERA
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Membangun Infrastruktur Jalan Raya Berkualitas Tinggi untuk Masa Depan Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-lg">
              Lihat Portfolio
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 text-lg">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PT WILDHAN BANGUN SEJAHTERA menyediakan berbagai layanan konstruksi jalan raya dengan kualitas terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="text-blue-600">PT WILDHAN BANGUN SEJAHTERA</span>?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Pengalaman Lebih dari 15 Tahun</h3>
                    <p className="text-gray-600">Tim profesional dengan pengalaman luas dalam konstruksi jalan raya</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Kualitas Terjamin</h3>
                    <p className="text-gray-600">Material berkualitas tinggi dan standar keselamatan terbaik</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Harga Kompetitif</h3>
                    <p className="text-gray-600">Penawaran harga yang kompetitif dengan kualitas terbaik</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Tepat Waktu</h3>
                    <p className="text-gray-600">Komitmen untuk menyelesaikan proyek sesuai jadwal</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/construction-team.jpg" 
                alt="Construction Team" 
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-6 rounded-xl shadow-lg max-w-xs">
                <h3 className="text-xl font-bold mb-2">Visi & Misi</h3>
                <p className="text-sm mb-3">Menjadi perusahaan konstruksi jalan raya terkemuka di Indonesia dengan kualitas internasional</p>
                <p className="text-sm">Memberikan solusi infrastruktur jalan yang berkualitas, aman, dan berkelanjutan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfolio Proyek Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hasil karya terbaik kami dalam membangun infrastruktur jalan raya berkualitas tinggi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <img 
                src="/highway-finished.jpg" 
                alt="Jalan Raya Selesai" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Jalan Raya Nasional</h3>
                  <p className="text-gray-200">Pembangunan jalan raya dengan standar nasional, panjang 25 km</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <img 
                src="/road-construction.jpg" 
                alt="Proyek Konstruksi" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Jalan Tol Urban</h3>
                  <p className="text-gray-200">Pengaspalan jalan tol dengan teknologi hotmix terbaru</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Lihat Semua Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-900 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-blue-100">
              Siap untuk memulai proyek konstruksi jalan raya Anda?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-orange-400" />
                <h3 className="text-xl font-semibold mb-2">Telepon</h3>
                <p className="text-blue-100">0877-2988-7781</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-orange-400" />
                <h3 className="text-xl font-semibold mb-2">Alamat</h3>
                <p className="text-blue-100 text-sm">
                  Jl. Selayar, Kel. Liluwo, Kec. Kota Tengah<br />
                  Kota Gorontalo, Provinsi Gorontalo<br />
                  Kode Pos: 96114
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-orange-400" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-blue-100">info@wildhanbangunsejahtera.co.id</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="PT WILDHAN BANGUN SEJAHTERA Logo" 
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold">PT WILDHAN BANGUN SEJAHTERA</h3>
                  <p className="text-gray-400 text-sm">Konstruksi Jalan Raya Profesional</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Perusahaan konstruksi terpercaya yang berfokus pada pembangunan infrastruktur jalan raya berkualitas tinggi di seluruh Indonesia.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Konstruksi Jalan Raya</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pengaspalan Jalan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Infrastruktur Jalan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Maintenance Jalan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT WILDHAN BANGUN SEJAHTERA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}