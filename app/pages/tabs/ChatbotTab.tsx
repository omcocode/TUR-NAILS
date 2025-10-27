import { Card, CardContent, CardFooter } from './components/Card';
import { Input } from './components/Input';
import { Button } from './components/Button';

const BotIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
);

const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);


const AyudanteTab: React.FC = () => {
  return (
    <Card className="h-[calc(100vh-14rem)] flex flex-col">
      <CardContent className="flex-1 flex flex-col p-6 gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
            <BotIcon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-lg text-foreground">Asistente Virtual</p>
            <p className="text-sm text-muted-foreground">Siempre disponible para ayudarte</p>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto pr-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <BotIcon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="rounded-lg bg-muted p-3 text-sm max-w-md">
                <p>¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?</p>
              </div>
              <p className="text-xs text-muted-foreground pl-1">19:50</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-6 bg-background rounded-b-xl">
        <div className="relative w-full">
          <Input id="message" placeholder="Escribe tu mensaje..." className="pr-12 rounded-full" />
          <Button type="submit" size="icon" className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-full w-8 h-8">
            <SendIcon className="w-4 h-4" />
            <span className="sr-only">Enviar mensaje</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AyudanteTab;