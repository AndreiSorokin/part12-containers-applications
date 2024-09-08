import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

const mockTodo = {
   id: 1,
   text: 'Test Todo',
   done: false,
};

const mockDeleteTodo = jest.fn();
const mockCompleteTodo = jest.fn();

test('calls deleteTodo when delete button is clicked', () => {
   render(<Todo todo={mockTodo} deleteTodo={mockDeleteTodo} completeTodo={mockCompleteTodo} />);
   fireEvent.click(screen.getByText('Delete'));
   expect(mockDeleteTodo).toHaveBeenCalledWith(mockTodo);
});

test('calls completeTodo when complete button is clicked', () => {
   render(<Todo todo={mockTodo} deleteTodo={mockDeleteTodo} completeTodo={mockCompleteTodo} />);
   fireEvent.click(screen.getByText('Set as done'));
   expect(mockCompleteTodo).toHaveBeenCalledWith(mockTodo);
});