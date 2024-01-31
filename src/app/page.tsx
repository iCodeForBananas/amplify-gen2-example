import Image from 'next/image'

const GradientDiv = () => {
  const divStyle = {
    textAlign: 'center',
    color: 'white', // text color
    padding: '20px',
    borderRadius: '10px',
    background: 'linear-gradient(to right, purple, pink)',
  };

  return (
    <div style={divStyle}>
      <h1>iCodeForBananas</h1>
    </div>
  );
};

export default function Home() {
  const bodyStyle = {
    margin: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, purple, pink)',
  };

  return (
    <div style={bodyStyle}>
      <GradientDiv />
    </div>
  );
}
