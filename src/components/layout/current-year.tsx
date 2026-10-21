export async function CurrentYear() {
  "use cache";
  return <span>{new Date().getFullYear()}</span>;
}
