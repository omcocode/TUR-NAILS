
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

const UbicacionTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nuestra Ubicación</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[500px] w-full rounded-lg bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">El mapa de Google se mostrará aquí.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UbicacionTab;
