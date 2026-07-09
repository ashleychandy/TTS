/**
 * ErrorBoundary component - Catches React errors and displays fallback UI
 * Prevents entire app from crashing on component errors
 */

"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to error reporting service
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
        }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px', color: '#a80015' }}>
            Something went wrong
          </h2>
          <p style={{ color: '#666', marginBottom: '24px' }}>
            We&apos;re sorry for the inconvenience. Please try refreshing the page.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              background: '#a80015',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              fontSize: '14px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
