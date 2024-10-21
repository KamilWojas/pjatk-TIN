import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import AddItemForm from '../AddItemForm';

// Mockowanie axios
jest.mock('axios');

test('dodaje nowy element', async () => {
  const history = createMemoryHistory();
  axios.post.mockResolvedValue({ data: { id: 4, title: 'New Item', body: 'This is a new item.' } });

  render(
    <Router history={history}>
      <AddItemForm />
    </Router>
  );

  // Wypełnia formularz i wysyła dane
  fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'New Item' } });
  fireEvent.change(screen.getByLabelText(/Body/i), { target: { value: 'This is a new item.' } });
  fireEvent.click(screen.getByText(/Add Item/i));

  // Sprawdza, czy dane zostały wysłane i użytkownik został przekierowany
  await waitFor(() => {
    expect(history.location.pathname).toBe('/items');
  });
});

test('wyświetla błąd w przypadku niepowodzenia dodania elementu', async () => {
  axios.post.mockRejectedValue(new Error('Błąd sieci'));

  render(<AddItemForm />);

  // Wypełnia formularz i wysyła dane
  fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'New Item' } });
  fireEvent.change(screen.getByLabelText(/Body/i), { target: { value: 'This is a new item.' } });
  fireEvent.click(screen.getByText(/Add Item/i));

  // Sprawdza, czy komunikat o błędzie jest wyświetlany
  await waitFor(() => {
    const errorMessage = screen.getByText(/There was an error adding the item!/i);
    expect(errorMessage).toBeInTheDocument();
  });
});

