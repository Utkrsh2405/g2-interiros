

export default function FilterButton({ label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-md border-2 transition-all ${
        active
          ? 'bg-[#6D8E4C] border-primary text-white'
          : 'bg-transparent border-[#6D8E4C]/30 border-b-[#6D8E4C]/100 border-b-2 text-[#6D8E4C] hover:border-[#6D8E4C]/100'
      }`}
    >
      {label}
    </button>
  );
}
