export const Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2Q1YjI5YmI5NzQ5MTA2ZTg2OGY0YjMxNjVjNTkxOSIsIm5iZiI6MTczNzM0MjMxMi41NCwic3ViIjoiNjc4ZGJkNjg0MmYyN2M3NTRjNjUzNGI2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.FPSZpc1n5BF0WRLe_SaF3ZaKJBnAKJUI1ex7ch-yP2E";
export const formatRuntime = (runtime: number): string => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
};
