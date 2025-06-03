import BuildCircleIcon from '@mui/icons-material/BuildCircle';

function UnderConstruction() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        color: '#555',
      }}
    >
      <BuildCircleIcon style={{ fontSize: 120, color: '#1976d2' }} />
      <h1 style={{ marginTop: 20 }}>This page is under construction.</h1>
      <p>We're working hard to bring it to you soon. Stay tuned!</p>
    </div>
  );
}

export default UnderConstruction;
