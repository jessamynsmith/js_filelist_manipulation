window.onload = function() {
  console.log('onload');
  const inputElement = document.getElementById("my_files");
  const fileNames = document.getElementById("file_names");

  inputElement.addEventListener("change", handleFiles, false);
  function handleFiles() {
    const fileList = this.files; /* now you can work with the file list */
    fileNames.textContent = '';
    for (let i = 0; i < fileList.length; i++) {
      console.log(i, fileList[i]);
      let listElement = document.createElement("li");
      let textNode = document.createTextNode(fileList[i].name);
      listElement.appendChild(textNode);
      fileNames.appendChild(listElement);
    }
  }
}
