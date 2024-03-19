//  What is Component?

//  Component means breaking down of a page into smaller parts and each parts is reusable and its helps in managing big project in easy way.

// Below is example:- We can easily use onClick method on functional component . First define a function and inside it what i want on click and then pass this function where we want that effect.

// Now create functional Component

function shivam(prop) {
  
  // onclick function
  function red() {
    alert("red function called");
  }

  return (
    <>
      {/* use of onClick */}
      <h1 onClick={red}> {prop.text} </h1>
    </>
  );
}

export default shivam

//output:- This is functional Component.

