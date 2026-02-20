import { Button, Input, Badge, Avatar, Rating } from '@aesthetics-index/ui';

export default function HomePage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Aesthetics Index
          </h1>
          <p className="text-lg text-gray-600">
            Component Test Page (M1 Foundation)
          </p>
        </div>

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="dark">Dark Button</Button>
            <Button size="sm" variant="primary">Small Button</Button>
          </div>
        </section>

        {/* Inputs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Inputs</h2>
          <div className="max-w-md space-y-4">
            <Input 
              label="E-Mail" 
              type="email" 
              placeholder="name@example.com" 
            />
            <Input 
              label="Suche" 
              type="search" 
              placeholder="Botox, Lippen, Hautarzt..." 
            />
            <Input 
              label="Mit Fehler" 
              type="text" 
              error="Dieses Feld ist erforderlich" 
            />
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Badges</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Verifiziert</Badge>
            <Badge variant="warning">Warnung</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </section>

        {/* Avatars */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Avatars</h2>
          <div className="flex items-center gap-4">
            <Avatar alt="Klinik München" fallback="KM" size="sm" />
            <Avatar alt="Dr. Müller" fallback="DM" size="md" />
            <Avatar alt="Hautarztpraxis" fallback="HP" size="lg" />
          </div>
        </section>

        {/* Ratings */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Ratings</h2>
          <div className="space-y-2">
            <Rating value={5} count={127} showValue size="md" />
            <Rating value={4.5} count={89} showValue size="md" />
            <Rating value={4.0} count={45} showValue size="md" />
            <Rating value={3.5} count={12} showValue size="sm" />
          </div>
        </section>

        {/* Success Message */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <p className="text-green-800 font-medium">
            ✅ M1 Foundation Complete! All base components working.
          </p>
        </div>
      </div>
    </div>
  );
}
