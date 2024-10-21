import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import ItemList from '../ItemList';

// Mockowanie axios
jest.mock('axios');

const mockData = {
  data: [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
  ],
};

test('pobiera i wyświetla elementy', async () => {
  axios.get.mockResolvedValue(mockData);

  render(<ItemList />);

  // Sprawdza, czy dane są pobierane i wyświetlane
  await waitFor(() => {
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent('Item 1');
    expect(items[1]).toHaveTextContent('Item 2');
    expect(items[2]).toHaveTextContent('Item 3');
  });
});

test('wyświetla błąd w przypadku niepowodzenia pobierania danych', async () => {
  axios.get.mockRejectedValue(new Error('Błąd sieci'));

  render(<ItemList />);

  // Sprawdza, czy komunikat o błędzie jest wyświetlany
  await waitFor(() => {
    const errorMessage = screen.getByText(/Błąd: Błąd sieci/i);
    expect(errorMessage).toBeInTheDocument();
  });
});

