const url = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchAllAssuntos() {
  const response = await fetch(`${url}/subjects/findAll?limit=16`, {
    next: { tags: ["get-all-assuntos"] },
  });
  if (!response.ok)
    throw new Error(`Erro ao carregar dados. Status: ${response.status}`);
  return await response.json();
}

export async function fetchAssuntoBySlug(slug: string | string[]) {
  const response = await fetch(`${url}/subjects/findBySlug?slug=${slug}`, {
    next: { tags: ["get-assunto-slug"] },
  });
  if (!response.ok)
    throw new Error(`Erro ao carregar dados. Status: ${response.status}`);
  return await response.json();
}
export async function createSubject(body: any) {
  const response = await fetch(`${url}/subjects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok)
    throw new Error(`Erro ao carregar dados. Status: ${response.status}`);
  return await response.json();
}

export async function editSubject(id: string, body: any) {
  const response = await fetch(`${url}/subjects/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok)
    throw new Error(`Erro ao carregar dados. Status: ${response.status}`);
  return await response.json();
}
