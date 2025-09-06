import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Users, 
  FileText, 
  GraduationCap, 
  Leaf, 
  Settings,
  BarChart3,
  TrendingUp
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600">Panel de administración de Conciencia Ecológica</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-emerald-100">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Investigación</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>Gestionar publicaciones científicas</CardDescription>
              <Button variant="outline" className="mt-4 w-full">
                Administrar
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-lime-100">
                  <Users className="h-6 w-6 text-lime-600" />
                </div>
                <CardTitle>Divulgación</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>Gestionar actividades de divulgación</CardDescription>
              <Button variant="outline" className="mt-4 w-full">
                Administrar
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-cyan-100">
                  <FileText className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Consultoría</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>Gestionar servicios de consultoría</CardDescription>
              <Button variant="outline" className="mt-4 w-full">
                Administrar
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-teal-100">
                  <GraduationCap className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Cursos</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>Gestionar cursos y inscripciones</CardDescription>
              <Button variant="outline" className="mt-4 w-full">
                Administrar
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-emerald-100">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Blog</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>Gestionar posts del blog</CardDescription>
              <Button variant="outline" className="mt-4 w-full">
                Administrar
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-purple-100">
                  <Settings className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Ajustes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>Configuración del sitio</CardDescription>
              <Button variant="outline" className="mt-4 w-full">
                Configurar
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Estadísticas Rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Publicaciones</p>
                    <p className="text-2xl font-bold text-slate-900">7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-green-100">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Cursos Activos</p>
                    <p className="text-2xl font-bold text-slate-900">5</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-yellow-100">
                    <Users className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Inscripciones</p>
                    <p className="text-2xl font-bold text-slate-900">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-purple-100">
                    <Leaf className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Posts Blog</p>
                    <p className="text-2xl font-bold text-slate-900">3</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
