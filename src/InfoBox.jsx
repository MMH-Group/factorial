// InfoBox.jsx - This component uses named export

// Named export - you must import it with the same name
export function InfoBox() {
  return (
    <div className="info">
      <p><strong>What is Factorial?</strong></p>
      <p>5! = 5 × 4 × 3 × 2 × 1 = 120</p>
      <p><strong>Examples:</strong></p>
      <p>3! = 3 × 2 × 1 = 6</p>
      <p>4! = 4 × 3 × 2 × 1 = 24</p>
    </div>
  );
}

// You can also export default if you want
// export default InfoBox;