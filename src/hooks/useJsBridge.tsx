
const useJsBridge = () => {

  function executeBridge(cb: any) {
    if (window.JS_BRIDGE) {
      cb()
    } else {
      console.warn('NOT SUPPORT JS BRIDGE');
    }
  }

  const showToast = (text: string) => {
    executeBridge(() => {
      window.JS_BRIDGE.showToast(text)
    })
  }

  return { showToast }
}

export default useJsBridge