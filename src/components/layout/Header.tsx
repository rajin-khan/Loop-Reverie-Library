// src/components/layout/Header.tsx (Reverted to B&W)
import { Link, useNavigate } from 'react-router-dom';
import { Flower, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground group">
            {/* REVERTED: Use primary color for the icon */}
            <Flower className="text-primary group-hover:rotate-12 transition-transform duration-300" size={28} />
            {/* REVERTED: Use standard foreground for text */}
            <span className="text-xl font-semibold tracking-tight text-foreground group-hover:brightness-125 transition-all duration-300">
              Loop Reverie
            </span>
          </Link>
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
            >
              <LogOut size={16} />
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;