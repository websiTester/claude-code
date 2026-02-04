'use client';
import { Button } from '@/components/ui/Button';
import { RainbowShadowCard } from '@/components/ui/RainbowShadowCard';
import { ImageCard } from '@/components/ui/ImageCard';

export default function PreviewPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">UI Component Preview</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="warning">Warning</Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Disabled States</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>Primary Disabled</Button>
          <Button variant="secondary" disabled>Secondary Disabled</Button>
          <Button variant="success" disabled>Success Disabled</Button>
          <Button variant="danger" disabled>Danger Disabled</Button>
          <Button variant="warning" disabled>Warning Disabled</Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Size Variants Combinations</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="sm">Primary Small</Button>
            <Button variant="primary" size="md">Primary Medium</Button>
            <Button variant="primary" size="lg">Primary Large</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="success" size="sm">Success Small</Button>
            <Button variant="success" size="md">Success Medium</Button>
            <Button variant="success" size="lg">Success Large</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="danger" size="sm">Danger Small</Button>
            <Button variant="danger" size="md">Danger Medium</Button>
            <Button variant="danger" size="lg">Danger Large</Button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Interactive Example</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="primary"
            onClick={() => alert('Primary clicked!')}
          >
            Click Me
          </Button>
          <Button
            variant="success"
            onClick={() => console.log('Success action logged')}
          >
            Log Action
          </Button>
          <Button
            variant="danger"
            onClick={() => confirm('Are you sure?')}
          >
            Confirm Action
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-8">Rainbow Shadow Card Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RainbowShadowCard variant="primary">
            <h3 className="text-xl font-bold mb-2 text-white">Primary Card</h3>
            <p className="text-white/90">This card features a stunning rainbow shadow effect with primary variant styling.</p>
          </RainbowShadowCard>
          <RainbowShadowCard variant="secondary">
            <h3 className="text-xl font-bold mb-2 text-white">Secondary Card</h3>
            <p className="text-white/90">A secondary variant card with beautiful rainbow shadows.</p>
          </RainbowShadowCard>
          <RainbowShadowCard variant="success">
            <h3 className="text-xl font-bold mb-2 text-white">Success Card</h3>
            <p className="text-white/90">Success variant showcasing the rainbow shadow border.</p>
          </RainbowShadowCard>
          <RainbowShadowCard variant="danger">
            <h3 className="text-xl font-bold mb-2 text-white">Danger Card</h3>
            <p className="text-white/90">Danger variant with rainbow shadow effects.</p>
          </RainbowShadowCard>
          <RainbowShadowCard variant="warning">
            <h3 className="text-xl font-bold mb-2 text-white">Warning Card</h3>
            <p className="text-white/90">Warning variant featuring the rainbow border effect.</p>
          </RainbowShadowCard>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Rainbow Shadow Card Sizes</h2>
        <div className="space-y-6">
          <RainbowShadowCard variant="primary" size="sm">
            <h3 className="font-bold text-white">Small Card</h3>
            <p className="text-white/90">Compact size with rainbow shadow</p>
          </RainbowShadowCard>
          <RainbowShadowCard variant="success" size="md">
            <h3 className="font-bold text-white">Medium Card</h3>
            <p className="text-white/90">Default medium size with beautiful rainbow shadows</p>
          </RainbowShadowCard>
          <RainbowShadowCard variant="danger" size="lg">
            <h3 className="font-bold text-white">Large Card</h3>
            <p className="text-white/90">Spacious large card with prominent rainbow shadow border</p>
          </RainbowShadowCard>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Disabled State</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RainbowShadowCard variant="primary" disabled>
            <h3 className="text-xl font-bold mb-2 text-white">Disabled Card</h3>
            <p className="text-white/90">This card is in a disabled state with reduced opacity.</p>
          </RainbowShadowCard>
          <RainbowShadowCard variant="warning" disabled>
            <h3 className="text-xl font-bold mb-2 text-white">Disabled Warning</h3>
            <p className="text-white/90">Another example of a disabled card with warning variant.</p>
          </RainbowShadowCard>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Interactive Content</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RainbowShadowCard variant="success">
            <h3 className="text-xl font-bold mb-3 text-white">Card with Button</h3>
            <p className="text-white/90 mb-4">This card contains interactive elements inside.</p>
            <Button variant="secondary" size="sm">
              Action Button
            </Button>
          </RainbowShadowCard>
          <RainbowShadowCard variant="primary">
            <h3 className="text-xl font-bold mb-3 text-white">Rich Content Card</h3>
            <p className="text-white/90 mb-2">Rainbow shadows create depth and visual interest.</p>
            <ul className="list-disc list-inside text-white/90 mb-3">
              <li>Beautiful rainbow shadows</li>
              <li>Multiple variants</li>
              <li>Responsive design</li>
            </ul>
            <div className="flex gap-2">
              <Button variant="warning" size="sm">Learn More</Button>
              <Button variant="danger" size="sm">Delete</Button>
            </div>
          </RainbowShadowCard>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-8">Image Card Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ImageCard
            variant="primary"
            imageSrc="/doraemon.jpg"
            imageAlt="Primary card image"
            title="Primary Image Card"
            description="An image card with rainbow shadow effect and primary variant border styling."
          />
          <ImageCard
            variant="secondary"
            imageSrc="/doraemon.jpg"
            imageAlt="Secondary card image"
            title="Secondary Image Card"
            description="A secondary variant with elegant rainbow shadows highlighting the image."
          />
          <ImageCard
            variant="success"
            imageSrc="/doraemon.jpg"
            imageAlt="Success card image"
            title="Success Image Card"
            description="Success variant showcasing the beautiful rainbow border effect."
          />
          <ImageCard
            variant="danger"
            imageSrc="/doraemon.jpg"
            imageAlt="Danger card image"
            title="Danger Image Card"
            description="Danger variant with attention-grabbing rainbow shadow accents."
          />
          <ImageCard
            variant="warning"
            imageSrc="/doraemon.jpg"
            imageAlt="Warning card image"
            title="Warning Image Card"
            description="Warning variant featuring the distinctive rainbow border effect."
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Image Card Sizes</h2>
        <div className="flex flex-wrap items-start gap-8">
          <ImageCard
            variant="primary"
            size="sm"
            imageSrc="/doraemon.jpg"
            imageAlt="Small card image"
            title="Small Card"
            description="Compact size for tight spaces"
          />
          <ImageCard
            variant="success"
            size="md"
            imageSrc="/doraemon.jpg"
            imageAlt="Medium card image"
            title="Medium Card"
            description="Default size with balanced proportions"
          />
          <ImageCard
            variant="danger"
            size="lg"
            imageSrc="/doraemon.jpg"
            imageAlt="Large card image"
            title="Large Card"
            description="Spacious size for prominent displays and detailed descriptions"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Image Card Disabled States</h2>
        <div className="flex flex-wrap gap-8">
          <ImageCard
            variant="primary"
            disabled
            imageSrc="/doraemon.jpg"
            imageAlt="Disabled primary card"
            title="Disabled Primary"
            description="This card is in a disabled state with reduced opacity."
          />
          <ImageCard
            variant="warning"
            disabled
            imageSrc="/doraemon.jpg"
            imageAlt="Disabled warning card"
            title="Disabled Warning"
            description="Another disabled card example with warning variant."
          />
        </div>
      </section>
    </div>
  );
}
