import dynamicLoadScript from './dynamic-load-script'

export function isGitee() {
  const origin = window.location.origin
  if (origin.includes('gitee.io')) {
    return true
  }
  return false
}

export function loadCarbon() {
  const id = '_carbonads_js'
  const existingScript = document.getElementById(id)
  if (existingScript) return
  const script = document.createElement('script')

  document.body.appendChild(script)
  dynamicLoadScript(
    'https://cdn.carbonads.com/carbon.js?serve=CE7IK5QY&placement=panjiachengithubio',
    () => {},
    id
  )
}
