import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import BorderBotton from './Buttons/BorderBotton'
import TedikomLogo from './TedikomLogo'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const navigation = [
  { name: 'Services', href: '#', current: true, link: '/services'},
  { name: 'Projects', href: '#', current: false, link: '/projects' },
  { name: 'About', href: '#', current: false, link: '/about' },
  { name: 'News', href: '#', current: false, link: '/' },
  { name: 'Blog', href: '#', current: false, link: '/' },
  { name: 'Academy', href: '#', current: false, link: '/academy' },
  // { name: 'Privacy', href: '#', current: false, link: '/privacypolicy' },
  // { name: 'contact', href: '#', current: false, link: '/contactus' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    navigate('/');
  };
  
  const handleContactRedirect = () => {
    navigate('/contactus');
  };
  

  
  return (
    <Disclosure as="nav" className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-around">

        <TedikomLogo onClick={handleHomeRedirect} />
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-[#04369A] hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml- sm:block">
              <div className="flex lg:gap-4">
                {navigation.map((item) => (
                  <Link
                    to={item.link}
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                     ' hover:bg-[#04369A] hover:text-white',
                      'rounded-md sm:text-[13px] lg:text-[18px] py-2 px-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute  inset-y-0 right-0 flex items-center justify-center pr-2 sm:static sm:inset-auto sm:pr-0">
            <BorderBotton text="Say Hello" onClick={handleContactRedirect} color={'#04369A'} image={<img src="/hand.svg" alt="button icon" />} />
            
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden bg-[#04369A]">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <Link
              to={item.link}
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'text-white' : 'text-gray-300  hover:bg-[#04369A] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
