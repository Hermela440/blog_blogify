import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NewPostPage from './page';

// Mock next/navigation useRouter
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() })
}));

describe('NewPostPage', () => {
  it('renders the form', () => {
    render(<NewPostPage />);
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/body/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create post/i })).toBeInTheDocument();
  });

  it('shows validation errors if fields are empty', async () => {
    render(<NewPostPage />);
    fireEvent.click(screen.getByRole('button', { name: /create post/i }));
    // HTML5 validation prevents submit, so fields remain required
    expect(screen.getByLabelText(/title/i)).toBeRequired();
    expect(screen.getByLabelText(/body/i)).toBeRequired();
  });

  it('shows success message on submit', async () => {
    render(<NewPostPage />);
    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByLabelText(/body/i), { target: { value: 'Test Body' } });
    fireEvent.click(screen.getByRole('button', { name: /create post/i }));
    await waitFor(() => {
      expect(screen.getByText(/post created successfully/i)).toBeInTheDocument();
    });
  });
}); 