// Code EyesOnMe Component Here

function onFocus() {
  console.log("Good!");
}

function onBlur() {
  console.log("Hey! Eyes on me!");
}

function EyesOnMe() {
  return (
    <div>
      <button onFocus={onFocus} onBlur={onBlur}>
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
