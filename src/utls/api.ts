export const api = (path: string, queryParams: Record<string, unknown>) => {
  const url = new URL(process.env.NEXT_PUBLIC_BACKEND_URL + path)
  if (queryParams) {
    Object.keys(queryParams).forEach(key =>
      url.searchParams.append(key, queryParams[key] as string),
    )
  }
  return fetch(url).then(res => res.json())
}
