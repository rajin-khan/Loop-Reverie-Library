// src/components/ui/PriceListCopyButton.tsx (Enhanced Version)
import { useState } from 'react';
import { ClipboardCopy, CheckCircle, XCircle } from 'lucide-react';

const PriceListCopyButton = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleCopyPriceList = () => {
    const priceListText = `
Loop Reverie - Flower Price List
(Per Stick)
================================

- Baby's Breath: 200 tk
- Carnation: 350 tk
- Cosmos: 350 tk
- Daisies: 250 tk
- Forget-Me-Not: 250 tk
- Gajra (Plain): 300 tk
- Lavender: 200~400 tk
- Lilies: 450 tk
- Lily of the Valley: 375 tk
- Orchids: 375 tk
- Ping Pong Flower: 350 tk
- Roses (Layered): 400 tk
- Roses (Simple): 250 tk
- Roses (Special): 350 tk
- Sunflower (Large): 550 tk
- Sunflower (Mini): 350 tk
- Tulips: 250 tk

--- Extras & Notes ---
- For Gajra, each additional rose: 50 tk
- Additional Leaf Sticks: 80 tk
- The number of flowers per stick may vary based on individual flower.
- Color customization is fully free based on yarn availability.
    `.trim();

    // The navigator.clipboard API is promise-based and works cross-platform
    navigator.clipboard.writeText(priceListText).then(
      () => {
        // --- Success State ---
        setStatus('success');
        setTimeout(() => setStatus('idle'), 2500); // Reset after 2.5 seconds
      },
      (err) => {
        // --- Error State ---
        console.error('Failed to copy price list: ', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000); // Reset after 3 seconds
      }
    );
  };

  // --- Dynamic Content based on status ---
  const buttonContent = {
    idle: {
      text: 'Copy Price List',
      icon: <ClipboardCopy size={16} />,
      classes: 'bg-accent text-accent-foreground border-white/20 hover:bg-accent/80',
    },
    success: {
      text: 'Copied!',
      icon: <CheckCircle size={16} />,
      classes: 'bg-green-500/20 text-green-400 border-green-500/50',
    },
    error: {
      text: 'Copy Failed',
      icon: <XCircle size={16} />,
      classes: 'bg-red-500/20 text-red-400 border-red-500/50',
    },
  }[status];
  
  const baseClasses = "flex items-center justify-center gap-2 px-4 py-2 w-[160px] rounded-lg text-sm font-medium border transition-all duration-300";

  return (
    <button
      onClick={handleCopyPriceList}
      // Combine base classes with status-specific classes
      className={`${baseClasses} ${buttonContent.classes}`}
      // Disable the button when it's not in the idle state to prevent spamming
      disabled={status !== 'idle'}
    >
      {buttonContent.icon}
      {buttonContent.text}
    </button>
  );
};

export default PriceListCopyButton;