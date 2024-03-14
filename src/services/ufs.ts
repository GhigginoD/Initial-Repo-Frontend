const url = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchAllUfs() {
  const response = await fetch(`${url}/regions/findUfs`, {
    next: { tags: ["get-all-ufs"] },
  });
  if (!response.ok)
    throw new Error(`Erro ao carregar dados. Status: ${response.status}`);
  return await response.json();
}
