import logo from '../assets/logo.svg';

export const Navbar = () => {
  return (
    <div className="h-screen w-20 bg-transparent p-5 flex flex-col gap-6 border-r">
      <img src={logo} alt="logo" />
    </div>
  );
};
