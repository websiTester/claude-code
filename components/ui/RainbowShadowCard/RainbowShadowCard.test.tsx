import { render, screen } from '@testing-library/react';
import { RainbowShadowCard } from './RainbowShadowCard';

describe('RainbowShadowCard', () => {
  it('renders children correctly', () => {
    render(<RainbowShadowCard>Card Content</RainbowShadowCard>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies primary variant by default', () => {
    render(<RainbowShadowCard>Primary Card</RainbowShadowCard>);
    const card = screen.getByText('Primary Card');
    expect(card).toHaveClass('bg-[var(--primary)]');
  });

  it('applies secondary variant correctly', () => {
    render(<RainbowShadowCard variant="secondary">Secondary Card</RainbowShadowCard>);
    const card = screen.getByText('Secondary Card');
    expect(card).toHaveClass('bg-[var(--secondary)]');
  });

  it('applies success variant correctly', () => {
    render(<RainbowShadowCard variant="success">Success Card</RainbowShadowCard>);
    const card = screen.getByText('Success Card');
    expect(card).toHaveClass('bg-[var(--success)]');
  });

  it('applies danger variant correctly', () => {
    render(<RainbowShadowCard variant="danger">Danger Card</RainbowShadowCard>);
    const card = screen.getByText('Danger Card');
    expect(card).toHaveClass('bg-[var(--danger)]');
  });

  it('applies warning variant correctly', () => {
    render(<RainbowShadowCard variant="warning">Warning Card</RainbowShadowCard>);
    const card = screen.getByText('Warning Card');
    expect(card).toHaveClass('bg-[var(--warning)]');
  });

  it('applies medium size by default', () => {
    render(<RainbowShadowCard>Medium Card</RainbowShadowCard>);
    const card = screen.getByText('Medium Card');
    expect(card).toHaveClass('p-6');
  });

  it('applies small size correctly', () => {
    render(<RainbowShadowCard size="sm">Small Card</RainbowShadowCard>);
    const card = screen.getByText('Small Card');
    expect(card).toHaveClass('p-3');
  });

  it('applies large size correctly', () => {
    render(<RainbowShadowCard size="lg">Large Card</RainbowShadowCard>);
    const card = screen.getByText('Large Card');
    expect(card).toHaveClass('p-8');
  });

  it('handles disabled state correctly', () => {
    render(<RainbowShadowCard disabled>Disabled Card</RainbowShadowCard>);
    const card = screen.getByText('Disabled Card');
    expect(card).toHaveClass('opacity-50');
    expect(card).toHaveClass('cursor-not-allowed');
  });

  it('applies rainbow shadow classes', () => {
    render(<RainbowShadowCard>Rainbow Card</RainbowShadowCard>);
    const card = screen.getByText('Rainbow Card');
    expect(card.className).toContain('shadow-');
  });

  it('applies custom className', () => {
    render(<RainbowShadowCard className="custom-class">Custom</RainbowShadowCard>);
    const card = screen.getByText('Custom');
    expect(card).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = jest.fn();
    render(<RainbowShadowCard ref={ref}>Ref Card</RainbowShadowCard>);
    expect(ref).toHaveBeenCalled();
  });

  it('spreads additional props to div element', () => {
    render(<RainbowShadowCard data-testid="test-card" aria-label="Test">Props</RainbowShadowCard>);
    const card = screen.getByTestId('test-card');
    expect(card).toHaveAttribute('aria-label', 'Test');
  });
});
