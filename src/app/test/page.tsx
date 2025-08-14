export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Página de Prueba
        </h1>
        <p className="text-blue-700 text-lg">
          Si puedes ver esta página, el routing funciona correctamente.
        </p>
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <p className="text-gray-600">
            Timestamp: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
