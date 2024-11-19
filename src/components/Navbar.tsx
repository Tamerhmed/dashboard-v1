import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Info } from 'lucide-react';
import ThemeToggler from './ThemeToggler';

export const Navbar = () => {
  return (
    <div className='bg-primary dark:bg-slate-700 text-white px-5 py-5 flex justify-between'>
      <Link href={'/'}>
        <Image
          src={
            'https://www.aitsl.edu.au/images/default-source/teach/halt/2021/aitsl-logo-device-100.png'
          }
          alt='logo'
          width={60}
          height={70}
          className='w-full object-cover'
        />
      </Link>
      <div className='flex items-center'>
        {/* <ThemeToggler /> */}
        <DropdownMenu>
          <DropdownMenuTrigger className='focus:outline-none'>
            <Info size={30} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Link href={'/info'}>Info</Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={'/contact'}>Contact us</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={'/details'}>Details</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
