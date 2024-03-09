export function PokemonInfo({ icon, text, value }: any) {
  return (
    <div className="flex items-center gap-1">
      {icon}
      <p className="text-sm font-semibold">
        {text}: <span className="font-normal">{value}</span>
      </p>
    </div>
  );
}
