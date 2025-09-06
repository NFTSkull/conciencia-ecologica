"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Leaf, Menu, X, GraduationCap, Heart, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Investigación', href: '/investigacion' },
  { name: 'Publicaciones', href: '/publicaciones' },
  { name: 'Divulgación', href: '/divulgacion' },
  { name: 'Consultoría', href: '/consultoria' },
  { 
    name: 'Cursos', 
    href: '/cursos',
    submenu: [
      { name: 'Para Adolescentes', href: '/cursos/adolescentes' },
      { name: 'Académica/Profesionales', href: '/cursos/academica' }
    ]
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white/20 backdrop-blur-sm text-white'
            } group-hover:scale-110`}>
              <Leaf className="h-6 w-6" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-emerald-800' : 'text-white'
              }`}>
                Conciencia Ecológica
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onMouseEnter={() => setActiveSubmenu(item.name)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      isScrolled ? 'text-slate-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'
                    }`}>
                      {item.name}
                    </span>
                    <ChevronDown className={`h-4 w-4 transition-colors duration-300 ${
                      isScrolled ? 'text-slate-700' : 'text-white/90'
                    }`} />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive(item.href)
                        ? isScrolled ? 'text-emerald-600' : 'text-white'
                        : isScrolled ? 'text-slate-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Submenu */}
                {activeSubmenu === item.name && item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-emerald-100 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors duration-200"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/donar">
                <Heart className="h-4 w-4 mr-2" />
                Donar
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/cursos">
                <GraduationCap className="h-4 w-4 mr-2" />
                Cursos
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors duration-300"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-slate-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-slate-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-emerald-100">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                          activeSubmenu === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeSubmenu === item.name && (
                        <div className="ml-4 space-y-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block px-3 py-2 text-sm text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-emerald-600 bg-emerald-50'
                          : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Mobile CTA Buttons */}
            <div className="mt-4 pt-4 border-t border-emerald-100 space-y-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/donar">
                  <Heart className="h-4 w-4 mr-2" />
                  Donar
                </Link>
              </Button>
              <Button size="sm" className="w-full" asChild>
                <Link href="/cursos">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Cursos
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}