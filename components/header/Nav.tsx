const items: any = [
  { id: 1, text: "Home", href: "/" },
  { id: 2, text: "Blog", href: "/" },
  { id: 3, text: "FAQ", href: "/" },
  { id: 4, text: "How it works", href: "/" },
  { id: 5, text: "Pricing", href: "/" },
  { id: 6, text: "Products", href: "/" },
];
const Nav = () => {
  return (
    <>
      <div className="inline text-blue-900  cursor-pointer">
        {items.map((item: any) => {
          return (
            <span key={item.id} className="px-5 py-5">
              {item.text}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Nav;
