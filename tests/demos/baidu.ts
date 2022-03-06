function getBaiduTitile() {
  return (document.querySelector('title') as HTMLElement).innerText;
}

export default getBaiduTitile;