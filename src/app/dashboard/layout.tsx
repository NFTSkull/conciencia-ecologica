import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, 
  Users, 
  FileText, 
  GraduationCap, 
  Leaf, 
  Settings,
  LogOut,
  Home
} from 'lucide-react';
import Link from 'next/link';

const navigation = [
  { name: 'Resumen', href: '/dashboard', icon: Home },
  { name: 'Investigación', href: '/dashboard/investigacion', icon: BookOpen },
  { name: 'Divulgación', href: '/dashboard/divulgacion', icon: Users },
  { name: 'Consultoría', href: '/dashboard/consultoria', icon: FileText },
  { name: 'Cursos', href: '/dashboard/cursos', icon: GraduationCap },
  { name: 'Blog', href: '/dashboard/blog', icon: Leaf },
  { name: 'Ajustes', href: '/dashboard/ajustes', icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-lg font-semibold text-slate-900">
                Conciencia Ecológica
              </Link>
              <span className="text-slate-400">|</span>
              <span className="text-sm text-slate-600">Dashboard</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Ver sitio
                </Link>
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
