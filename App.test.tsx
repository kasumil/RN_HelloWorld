import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import App from './App';

describe('App Component', () => {
  it('renders initial texts and color state correctly', () => {
    const {getByText, getByDisplayValue} = render(<App />);

    // "Hello, World!" 텍스트와 설명 텍스트가 렌더링되는지 확인
    expect(getByText('Hello, World!')).toBeTruthy();
    expect(getByText('This is a sample React Native app.')).toBeTruthy();

    // TextInput에 초기 상태 "white"가 보이는지 확인
    expect(getByDisplayValue('white')).toBeTruthy();
  });

  it('toggles color state when the button is pressed', () => {
    const {getByText, getByDisplayValue} = render(<App />);

    // 버튼을 텍스트로 찾기 ("Press Color Change")
    const button = getByText('Press Color Change');

    // 초기 상태 확인
    expect(getByDisplayValue('white')).toBeTruthy();

    // 버튼 클릭 시 상태가 "black"으로 변경되어야 함
    fireEvent.press(button);
    expect(getByDisplayValue('black')).toBeTruthy();

    // 다시 버튼 클릭 시 상태가 "white"로 변경되어야 함
    fireEvent.press(button);
    expect(getByDisplayValue('white')).toBeTruthy();
  });
});
