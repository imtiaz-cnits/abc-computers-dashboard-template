const copyTableToClipboard = (area) => {
  var range = document.createRange();
  range.selectNodeContents(area);

  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    var successful = document.execCommand("copy");
    if (successful) {
      alert("Table copied to clipboard!");
    } else {
      alert("Failed to copy table.");
    }
  } catch (err) {
    alert("Oops! Something went wrong while copying.");
  }

  selection.removeAllRanges();
};

export default copyTableToClipboard;
