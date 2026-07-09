/**
 * Tests for useImageModal hook
 */

import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useImageModal } from '@/hooks/useImageModal';

describe('useImageModal', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.body.style.overflow = 'unset';
  });

  it('should initialize with no image selected', () => {
    const { result } = renderHook(() => useImageModal());
    
    expect(result.current.enlargedImage).toBeNull();
    expect(result.current.isOpen).toBe(false);
  });

  it('should open modal with image', () => {
    const { result } = renderHook(() => useImageModal());
    
    act(() => {
      result.current.openModal('/test-image.png');
    });
    
    expect(result.current.enlargedImage).toBe('/test-image.png');
    expect(result.current.isOpen).toBe(true);
  });

  it('should close modal', () => {
    const { result } = renderHook(() => useImageModal());
    
    act(() => {
      result.current.openModal('/test-image.png');
    });
    
    act(() => {
      result.current.closeModal();
    });
    
    expect(result.current.enlargedImage).toBeNull();
    expect(result.current.isOpen).toBe(false);
  });

  it('should lock body scroll when modal is open', () => {
    const { result } = renderHook(() => useImageModal());
    
    act(() => {
      result.current.openModal('/test-image.png');
    });
    
    expect(document.body.style.overflow).toBe('hidden');
  });
});
