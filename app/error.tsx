/**
 * Error component - Global error page for 500 errors
 * Displays when an error occurs in a route segment
 */

"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Global error:", error);
  }, [error]);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#fdfdfd',
      padding: '40px',
      textAlign: 'center',
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
    }}>
      <div>
        <h2 style={{
          fontSize: '120px',
          fontWeight: 900,
          color: '#a80015',
          margin: '0 0 24px 0',
          lineHeight: 1
        }}>
          500
        </h2>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 700,
          margin: '0 0 16px 0',
          color: '#333'
        }}>
          Something Went Wrong
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#666',
          marginBottom: '32px',
          maxWidth: '500px'
        }}>
          We encountered an unexpected error. Our team has been notified and we&apos;re working to fix it.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button
            onClick={reset}
            style={{
              background: '#a80015',
              color: 'white',
              border: 'none',
              padding: '12px 32px',
              fontSize: '14px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: 600,
              borderRadius: '4px'
            }}
          >
            Try Again
          </button>
          <Link
            href="/"
            style={{
              background: 'transparent',
              color: '#a80015',
              border: '2px solid #a80015',
              padding: '12px 32px',
              fontSize: '14px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
              borderRadius: '4px'
            }}
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
