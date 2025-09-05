export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="footer-container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
        <div>
          <h3 className="text-[#e96610] mb-3">About</h3>
          <p className="text-sm text-gray-300">
        SwadSeva makes meals simple — quick lunches or weekend feasts, always fast, transparent, and delicious.
          </p>
        </div>

        <div className="footer-links">
          <h3 className="text-[#e96610] mb-3">Navigation</h3>
          <ul className="list-none space-y-2">
            <li><a href="/" className="text-gray-300 hover:text-white transition">Home</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-white transition">About</a></li>
            <li><a href="/menu" className="text-gray-300 hover:text-white transition">Menu</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3 className="text-[#e96610] mb-3">Links</h3>
          <ul className="list-none space-y-2">
            <li><a href="/menu" className="text-gray-300 hover:text-white transition">Explore menu</a></li>
            <li><a href="/orders" className="text-gray-300 hover:text-white transition">Order Now</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-white transition">Meet the Team</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-white transition">Our Story</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#e96610] mb-3">Connect With Us</h3>
          <div className="social-icons flex gap-3">
            <a href="#" className="social w-10 h-10 rounded-full bg-[#222] inline-flex items-center justify-center text-white hover:bg-white hover:text-black transform transition hover:scale-110"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social w-10 h-10 rounded-full bg-[#222] inline-flex items-center justify-center text-white hover:bg-white hover:text-black transform transition hover:scale-110"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social w-10 h-10 rounded-full bg-[#222] inline-flex items-center justify-center text-white hover:bg-white hover:text-black transform transition hover:scale-110"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social w-10 h-10 rounded-full bg-[#222] inline-flex items-center justify-center text-white hover:bg-white hover:text-black transform transition hover:scale-110"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social w-10 h-10 rounded-full bg-[#222] inline-flex items-center justify-center text-white hover:bg-white hover:text-black transform transition hover:scale-110"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center text-gray-400 text-sm border-t border-[#333] py-4">
        2025 All rights reserved |{" "}
        <a href="#" className="text-white underline">Terms of Use</a> |{" "}
        <a href="#" className="text-white underline">Privacy Policy</a>
      </div>
    </footer>
  );
}
