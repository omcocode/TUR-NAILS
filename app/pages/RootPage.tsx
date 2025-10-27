import { Button } from './tabs/components/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs/components/Tabs';
import AyudanteTab from './tabs/ChatbotTab';
import UbicacionTab from './tabs/LocationTab';
import ProductosTab from './tabs/ProductTabList';

const TimanailsLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-white rounded-full" />
    </div>
    <span className="text-xl font-bold text-primary">Timanails</span>
  </div>
);

const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const MessageCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
);

const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const PackageIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.29 7 8.71 5 8.71-5"/><path d="M12 22.08V12"/></svg>
);

export default function RootPage(){
    return (
    <div className="min-h-screen bg-secondary/60">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
        <TimanailsLogo />
        <Button variant="outline" className="gap-2">
          <ShieldIcon className="h-4 w-4" />
          Soy Administrador
        </Button>
      </header>
      <main className="p-4 sm:p-6 md:p-10">
        <Tabs defaultValue="ayudante">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="ayudante"><MessageCircleIcon className="h-4 w-4"/>Hola soy Tina!</TabsTrigger>
              <TabsTrigger value="ubicacion"><MapPinIcon className="h-4 w-4"/>Ubicación</TabsTrigger>
              <TabsTrigger value="productos"><PackageIcon className="h-4 w-4"/>Productos</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="ayudante">
            <AyudanteTab />
          </TabsContent>
          <TabsContent value="ubicacion">
            <UbicacionTab />
          </TabsContent>
          <TabsContent value="productos">
            <ProductosTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}