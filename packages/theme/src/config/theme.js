import process from 'node:process'
import fs from 'node:fs'
import path from 'node:path'
import glob from 'fast-glob'
import matter from 'gray-matter'
import { getTextSummary } from './utils.js'

export function getPageRoute(filepath, srcDir) {
  let route = filepath.replace('.md', '')
  // 去除 srcDir 处理目录名
  // TODO：优化 路径处理，同VitePress 内部一致
  if (route.startsWith('./')) {
    route = route.replace(
      new RegExp(
        `^\\.\\/${path
          .join(srcDir, '/')
          .replace(new RegExp(`\\${path.sep}`, 'g'), '/')}`,
      ),
      '',
    )
  }
  else {
    route = route.replace(
      new RegExp(
        `^${path
          .join(srcDir, '/')
          .replace(new RegExp(`\\${path.sep}`, 'g'), '/')}`,
      ),
      '',
    )
  }
  return `/${route}`
}

export function getArticleMeta(filepath) {
  const fileContent = fs.readFileSync(filepath, 'utf-8')

  const { data: frontmatter, excerpt, content } = matter(fileContent, {
    excerpt: true,
  })

  const meta = {
    ...frontmatter,
  }

  // 获取摘要信息
  meta.description = meta.description || getTextSummary(content, 100) || excerpt

  return meta
}

export function getArticles() {
  const srcDir = '.'

  const files = glob.sync(`${srcDir}/posts/*.md`)

  const pageData = files.map((filepath) => {
    const route = getPageRoute(filepath, srcDir)
    const meta = getArticleMeta(filepath)
    return {
      route,
      meta,
    }
  })
  return pageData
}
