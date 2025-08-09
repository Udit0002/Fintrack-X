'use client';

import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { SignIn } from '@clerk/nextjs';

export default function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
          Login
        </button>
      </DialogTrigger>
      <DialogContent className="backdrop-blur-md bg-white/80 border shadow-lg max-w-sm rounded-xl">
        <SignIn
          appearance={{
            elements: {
              card: 'shadow-none bg-transparent',
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
