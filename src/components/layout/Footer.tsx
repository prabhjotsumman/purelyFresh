export default function Footer() {
    return (
      <footer className="bg-black text-white text-center py-6">
        <p className="text-lg font-semibold">Purely Fresh &copy; {new Date().getFullYear()}</p>
        <p className="text-sm mt-2">Fresh and healthy vegetables delivered to your home.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Twitter</a>
        </div>
      </footer>
    );
  }
  