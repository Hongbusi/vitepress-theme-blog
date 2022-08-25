import type { MenuItem } from './menu'
import type { SocialLink } from './socialLink'

export type NavItem = MenuItem

export interface SidebarGroup {
  text: string
  items: MenuItem[]
}

export interface SidebarConfig {
  [path: string]: SidebarGroup[]
}

export interface Config {
  /**
   * The appearance option to enable/disable light/dark mode.
   *
   * @default true
   */
  appearance?: boolean

  /**
   * The social links to be displayed at the end of the nav bar. Perfect for
   * placing links to social services such as GitHub, Twitter, Facebook, etc.
   */
  socialLinks?: SocialLink[]

  /**
   * The nav items.
   */
  nav?: NavItem[]

  /**
   * The sidebar items.
   */
  sidebar?: SidebarConfig
}
