interface BtnProps {
  text: string;
}

export default function Button({ text }: BtnProps) {
  return (
    <button className="mt-5 rounded-md border border-transparent bg-orange-500 py-2 px-4 font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
      {text}
    </button>
  );
}
