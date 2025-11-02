const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <p className="font-source-sans text-sm">
          © {new Date().getFullYear()} Ambicapathy Palanivelu. Building the future of cloud infrastructure.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
