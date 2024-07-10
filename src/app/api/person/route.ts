// using GET and Response for cache
export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    headers: {
      "Content-Type": "application/json",
    },
    next: { tags: ["person-get"] }, // used to revalidate query i.e. revalidateTag('person-get')
  });
  const data = await res.json();
  return Response.json({ data });
}
