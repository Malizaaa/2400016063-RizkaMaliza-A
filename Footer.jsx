// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="py-6 bg-black text-white text-center mt-16">
      <p className="text-sm">
        © {new Date().getFullYear()} Your Website — All Rights Reserved.
      </p>
    </footer>
  );
}
