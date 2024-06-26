function downloadItem(name: string, url: string) {
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
}

function downloadItems() {
  // TODO
}

export { downloadItem, downloadItems };
