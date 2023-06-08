// // Find the body element of the Twitter page
// const bodyElement = document.querySelector('body');

// // Apply orange background color to the body
// bodyElement.style.backgroundColor = 'orange';



// // Create a new element
// const redBlock = document.createElement('div');

// // Apply styles to the red block
// redBlock.style.width = '20px';
// redBlock.style.height = '20px';
// redBlock.style.backgroundColor = 'red';
// redBlock.style.position = 'fixed';
// redBlock.style.top = '10px';
// redBlock.style.left = '10px';
// redBlock.style.zIndex = '9999';

// // Append the red block to the document body
// document.body.appendChild(redBlock);


// Find the reply button element on Twitter
const replyButton = document.querySelectorAll('[class = "css-1dbjc4n r-18u37iz r-1h0z5md"]');

for(i=0;i<replyButton.length;i++){
  const trustButton = document.createElement('button');
  trustButton.innerText = 'Trust';

  // Add styles to the trust button
  trustButton.style.backgroundColor = 'orange';
  trustButton.style.marginLeft = '8px';

  // Get the parent element of the reply button
  const parentElement = replyButton.parentElement;

  // Insert the trust button next to the reply button
  parentElement.insertBefore(trustButton, replyButton[i]);
}

