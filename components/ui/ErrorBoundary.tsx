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
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="px-10 py-10 text-center font-sans">
          <h2 className="text-2xl mb-4 text-primary-red-brand">Something went wrong</h2>
          <p className="text-[#666] mb-6">
            We&apos;re sorry for the inconvenience. Please try refreshing the page.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="bg-primary-red-brand text-white border-none px-6 py-3 text-sm cursor-pointer uppercase tracking-widest font-semibold rounded transition-all duration-300 hover:bg-[#8a0011] hover:translate-y-[-2px]"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
