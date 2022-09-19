export interface NavItemWithLink {
  text: string
  icon?: string
  link: string
}

export interface NavItemWithChildren {
  text: string
  items: NavItemWithLink[]
}

export type NavItem = NavItemWithLink | NavItemWithChildren

export interface SidebarConfig {
  [path: string]: NavItemWithLink[]
}

export interface Config {
  /**
   * The appearance option to enable/disable light/dark mode.
   *
   * @default true
   */
  appearance?: boolean

  /**
   * The nav items.
   */
  nav?: NavItem[]

  /**
   * The sidebar items.
   */
  sidebar?: SidebarConfig
}
