// components/shared/SearchBar.tsx
'use client';

import { X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SearchBar({ isOpen, onClose }:{
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <div className={`fixed z-1000 top-0 left-0 w-full bg-white shadow-lg transition-transform pr-16 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Input type="text" placeholder="Search..." className="w-full text-lg" />
                <Button variant="ghost" size="icon" onClick={onClose}>
                    <X className="h-6 w-6" />
                </Button>
            </div>
        </div>
    );
}