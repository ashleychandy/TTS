/**
 * Loading component - Displays while page content is loading
 * Uses Suspense boundary fallback
 */

export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#fdfdfd'
    }}>
      <div style={{
        textAlign: 'center',
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #a80015',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 24px'
        }} />
        <p style={{
          fontSize: '14px',
          color: '#666',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          Loading...
        </p>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
