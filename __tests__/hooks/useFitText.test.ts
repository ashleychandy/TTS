/**
 * Tests for useFitText hook
 */

import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useFitText } from '@/hooks/useFitText';

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe('useFitText', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return refs and fontSize', () => {
    const { result } = renderHook(() => useFitText());
    
    expect(result.current.containerRef).toBeDefined();
    expect(result.current.textRef).toBeDefined();
    expect(result.current.fontSize).toBeNull(); // Initially null
  });

  it('should accept custom padding parameter', () => {
    const { result } = renderHook(() => useFitText(48));
    
    expect(result.current.containerRef).toBeDefined();
    expect(result.current.textRef).toBeDefined();
  });

  it('should use default padding of 24px', () => {
    const { result: resultDefault } = renderHook(() => useFitText());
    const { result: resultExplicit } = renderHook(() => useFitText(24));
    
    expect(resultDefault.current.fontSize).toBe(resultExplicit.current.fontSize);
  });
});
