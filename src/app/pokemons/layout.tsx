export default function PokemonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="my-8 text-center">
      <h1>Hello Root Layout Pokemons</h1>
      {children}
    </main>
  );
}
