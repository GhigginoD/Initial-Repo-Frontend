const url = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchAllTemas() {
  const response = await fetch(`${url}/categories/allCategories`, {
    next: { tags: ["get-all-temas"] },
  });
  if (!response.ok)
    throw new Error(`Erro ao carregar dados. Status: ${response.status}`);
  return await response.json();
}

export async function fetchThemeBySlug(slug: string | string[]) {
  const response = await fetch(`${url}/categories/findByFilter/${slug}`, {
    next: { tags: ["get-theme-slug"] },
  });
  if (!response.ok)
    throw new Error(`Erro ao carregar dados. Status: ${response.status}`);
  return await response.json();
}
