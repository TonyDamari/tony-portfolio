import { JSDOM } from "jsdom"

export async function getOgImage(url: string) {
  try {
    const res = await fetch(url, { cache: "force-cache" })
    const html = await res.text()
    const dom = new JSDOM(html)
    const meta = dom.window.document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null

    return meta?.content || null
  } catch {
    return null
  }
}

export async function safeGetOgImage(url?: string) {
  if (!url) return "/images/fallback.png"

  try {
    const img = await getOgImage(url)
    return img || "/images/fallback.png"
  } catch (err) {
    console.warn("OG fetch failed:", url)
    return "/images/fallback.png"
  }
}
