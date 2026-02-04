import { render, screen } from '@testing-library/react';
import { ImageCard } from './ImageCard';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: { src: string; alt: string; fill?: boolean; className?: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={props.src} alt={props.alt} className={props.className} data-fill={props.fill} />
  ),
}));

describe('ImageCard', () => {
  const defaultProps = {
    imageSrc: '/test-image.jpg',
    imageAlt: 'Test image',
    title: 'Test Title',
    description: 'Test description text',
  };

  it('renders image, title, and description correctly', () => {
    render(<ImageCard {...defaultProps} />);
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description text')).toBeInTheDocument();
  });

  it('renders as semantic article element', () => {
    render(<ImageCard {...defaultProps} data-testid="card" />);
    const card = screen.getByTestId('card');
    expect(card.tagName).toBe('ARTICLE');
  });

  it('applies primary variant by default', () => {
    render(<ImageCard {...defaultProps} data-testid="card" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('border-[var(--primary)]');
  });

  it('applies secondary variant correctly', () => {
    render(<ImageCard {...defaultProps} variant="secondary" data-testid="card" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('border-[var(--secondary)]');
  });

  it('applies success variant correctly', () => {
    render(<ImageCard {...defaultProps} variant="success" data-testid="card" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('border-[var(--success)]');
  });

  it('applies danger variant correctly', () => {
    render(<ImageCard {...defaultProps} variant="danger" data-testid="card" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('border-[var(--danger)]');
  });

  it('applies warning variant correctly', () => {
    render(<ImageCard {...defaultProps} variant="warning" data-testid="card" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('border-[var(--warning)]');
  });

  it('applies medium size by default', () => {
    render(<ImageCard {...defaultProps} data-testid="card" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('max-w-[320px]');
  });

  it('applies small size correctly', () => {
    render(<ImageCard {...defaultProps} size="sm" data-testid="card" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('max-w-[240px]');
  });

  it('applies large size correctly', () => {
    render(<ImageCard {...defaultProps} size="lg" data-testid="card" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('max-w-[400px]');
  });

  it('handles disabled state correctly', () => {
    render(<ImageCard {...defaultProps} disabled data-testid="card" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('opacity-50');
    expect(card).toHaveClass('cursor-not-allowed');
    expect(card).toHaveAttribute('aria-disabled', 'true');
  });

  it('does not have aria-disabled when not disabled', () => {
    render(<ImageCard {...defaultProps} data-testid="card" />);
    const card = screen.getByTestId('card');
    expect(card).not.toHaveAttribute('aria-disabled');
  });

  it('applies rainbow shadow classes', () => {
    render(<ImageCard {...defaultProps} data-testid="card" />);
    const card = screen.getByTestId('card');
    expect(card.className).toContain('shadow-');
  });

  it('applies motion-reduce support', () => {
    render(<ImageCard {...defaultProps} data-testid="card" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('motion-reduce:transition-none');
  });

  it('applies custom className', () => {
    render(<ImageCard {...defaultProps} className="custom-class" data-testid="card" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = jest.fn();
    render(<ImageCard {...defaultProps} ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('spreads additional props to article element', () => {
    render(<ImageCard {...defaultProps} data-testid="test-card" aria-label="Test" />);
    const card = screen.getByTestId('test-card');
    expect(card).toHaveAttribute('aria-label', 'Test');
  });

  it('renders image with correct src', () => {
    render(<ImageCard {...defaultProps} />);
    const image = screen.getByAltText('Test image');
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });

  it('applies header color based on variant', () => {
    render(<ImageCard {...defaultProps} variant="success" />);
    const title = screen.getByText('Test Title');
    expect(title).toHaveClass('text-[var(--success)]');
  });

  it('applies line-clamp to title', () => {
    render(<ImageCard {...defaultProps} />);
    const title = screen.getByText('Test Title');
    expect(title).toHaveClass('line-clamp-2');
  });

  it('applies line-clamp to description', () => {
    render(<ImageCard {...defaultProps} />);
    const description = screen.getByText('Test description text');
    expect(description).toHaveClass('line-clamp-3');
  });

  it('applies size-based padding for small size', () => {
    render(<ImageCard {...defaultProps} size="sm" data-testid="card" />);
    const contentDiv = screen.getByText('Test Title').parentElement;
    expect(contentDiv).toHaveClass('p-3');
  });

  it('applies size-based padding for medium size', () => {
    render(<ImageCard {...defaultProps} size="md" data-testid="card" />);
    const contentDiv = screen.getByText('Test Title').parentElement;
    expect(contentDiv).toHaveClass('p-4');
  });

  it('applies size-based padding for large size', () => {
    render(<ImageCard {...defaultProps} size="lg" data-testid="card" />);
    const contentDiv = screen.getByText('Test Title').parentElement;
    expect(contentDiv).toHaveClass('p-6');
  });

  it('has image placeholder background', () => {
    render(<ImageCard {...defaultProps} />);
    const imageContainer = screen.getByAltText('Test image').parentElement;
    expect(imageContainer).toHaveClass('bg-gray-200');
    expect(imageContainer).toHaveClass('dark:bg-gray-800');
  });
});
