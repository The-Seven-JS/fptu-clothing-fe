import { render, screen, fireEvent,cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import GenderScreen from './GenderScreen';

// Mock thư viện
vi.mock('aos', () => ({
  default: { init: vi.fn() },
}));

vi.mock('@mantine/notifications', () => ({
  notifications: { show: vi.fn() },
}));

describe('GenderScreen Component', () => {
  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <GenderScreen />
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    document.body.style.backgroundColor = 'white';
  });

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('Nên render đúng các thành phần ban đầu', () => {
    renderComponent();
    expect(screen.getByText('Giới tính của bạn là gì?')).toBeInTheDocument();
  });

  it('Nên gọi thông báo lỗi khi bấm TIẾP THEO mà chưa chọn giới tính', () => {
    renderComponent();
    const nextButton = screen.getByText('TIẾP THEO');
    
    // Bấm nút khi chưa chọn giới tính
    fireEvent.click(nextButton);

    expect(notifications.show).toHaveBeenCalledTimes(1);
    expect(notifications.show).toHaveBeenCalledWith(
      expect.objectContaining({ id: 'warning' })
    );
  });

  it('Nên đổi class thành "selected" và đổi màu nền khi chọn "Nam"', () => {
    renderComponent();
    
    const maleText = screen.getByText('Nam');
    const maleDiv = maleText.closest('.gender_male'); 
    fireEvent.click(maleDiv);

    expect(maleDiv).toHaveClass('selected');
    
    // Khắc phục lỗi màu sắc: Kiểm tra linh hoạt cả 2 định dạng RGB hoặc HEX
    const bgColor = document.body.style.backgroundColor;
    const isCorrectColor = bgColor === 'rgb(173, 216, 230)' || bgColor.toLowerCase() === '#add8e6';
    expect(isCorrectColor).toBe(true);
  });

  it('Nên đổi class thành "selected" và đổi màu nền khi chọn "Nữ"', () => {
    renderComponent();
    
    const femaleText = screen.getByText('Nữ');
    const femaleDiv = femaleText.closest('.gender_male');
    fireEvent.click(femaleDiv);

    expect(femaleDiv).toHaveClass('selected');
    
    const bgColor = document.body.style.backgroundColor;
    const isCorrectColor = bgColor === 'rgb(173, 216, 230)' || bgColor.toLowerCase() === '#add8e6';
    expect(isCorrectColor).toBe(true);
  });

  it('Không nên hiện thông báo lỗi nếu đã chọn giới tính và bấm TIẾP THEO', () => {
    renderComponent();
    
    const maleText = screen.getByText('Nam');
    const maleDiv = maleText.closest('.gender_male'); 
    fireEvent.click(maleDiv);

    // Khắc phục lỗi Navigation JSDOM: Ngăn chặn event mặc định của thẻ Link khi test
    const nextButton = screen.getByText('TIẾP THEO');
    fireEvent.click(nextButton, { preventDefault: () => {} });

    expect(notifications.show).not.toHaveBeenCalled();
  });
});