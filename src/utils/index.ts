import { ref } from 'vue'

export const HASH_RE = /#.*$/
export const EXT_RE = /(index)?\.(md|html)$/

const inBrowser = typeof window !== 'undefined'
const hashRef = ref(inBrowser ? location.hash : '')

export function isActive(currentPath: string, matchPath?: string, asRegex = false): boolean {
  if (matchPath === undefined)
    return false

  currentPath = normalize(`/${currentPath}`)

  if (asRegex)
    return new RegExp(matchPath).test(currentPath)

  if (normalize(matchPath) !== currentPath)
    return false

  const hashMatch = matchPath.match(HASH_RE)

  if (hashMatch)
    return hashRef.value === hashMatch[0]

  return true
}

export function normalize(path: string): string {
  return decodeURI(path).replace(HASH_RE, '').replace(EXT_RE, '')
}

export function ensureStartingSlash(path: string): string {
  return /^\//.test(path) ? path : `/${path}`
}

export function getSidebar(sidebar: any, path: string) {
  path = ensureStartingSlash(path)

  for (const dir in sidebar) {
    if (path.startsWith(ensureStartingSlash(dir)))
      return sidebar[dir]
  }

  return []
}
