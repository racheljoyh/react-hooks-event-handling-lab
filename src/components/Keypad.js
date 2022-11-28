// Code Keypad Component Here

function onChange() {
  console.log("Entering password...");
}

function Keypad() {
  return (
    <div>
      <input type="password" onChange={onChange} />
    </div>
  );
}

export default Keypad;
