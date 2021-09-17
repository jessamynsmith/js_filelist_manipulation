window.onload = function() {
  const inputElement = document.getElementById("my_files");
  const fileNames = document.getElementById("file_names");
  let fileList = [];

  function removeFile(event) {
    event.preventDefault();
    let filename = this.dataset.filename;
    let modifiedFileList = new DataTransfer();
    for (let i = 0; i < fileList.length; i++) {
      if (fileList[i].name !== filename) {
        modifiedFileList.items.add(fileList[i]);
      }
    }

    inputElement.files = modifiedFileList.files;
    fileList = inputElement.files;
    handleFiles(fileList);
    return false;
  }

  inputElement.addEventListener("change", handleFilesListener, false);
  function handleFilesListener() {
    fileList = this.files;
    handleFiles(fileList);
  }
  function handleFiles(fileList) {
    fileNames.textContent = '';
    for (let i = 0; i < fileList.length; i++) {
      let listElement = document.createElement("li");

      let textNode = document.createTextNode(fileList[i].name);
      listElement.appendChild(textNode);

      let removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove&nbsp";
      removeButton.setAttribute('type', 'button')
      removeButton.setAttribute('data-filename', fileList[i].name)
      removeButton.addEventListener('click', removeFile)
      listElement.appendChild(removeButton);

      fileNames.appendChild(listElement);
    }
  }
}
