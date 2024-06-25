import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import imagen_logo from '../img/logo2.png'

const navigation = [
  { name: 'Productos', href: '#product', current: false },
  { name: 'Nosotros', href: '#about', current: false },
  { name: 'Ayuda', href: '#', current: false },
  { name: 'Contacto', href: '#contact', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white h-36 sm:h-24 top-0 z-10 backdrop-blur-md sm:w-full py-2">
      {({ open }) => (
        <>
          <div className="mx-auto md:w-10/12 px-2 sm:px-6 lg:px-8">
            <div className="relative flex sm:h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-start sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-start justify-center rounded-md p-2 text-white bg-blue_nav hover:bg-blue_nav hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-around">
                <div className='flex w-full sm:w-8/12 flex-col sm:flex-row items-center justify-center"'>
                  <img src={imagen_logo} className='sm:h-auto w-20' alt='logo'/>
                  <p id='logo_name' className='sm:self-center ml-8 mt-2'>LA BOUTIQUE DEL EMBALAJE</p>
                </div>
                <div className="hidden self-center sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-blue-600 text-white' : 'text-black hover:bg-blue_nav hover:text-blue-100',
                          'rounded-md px-3 py-2'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden absolute top-12 left-2">
            <div className="bg-gray-300 rounded-md w-36 space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-blue-800 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 sm:text-base sm:font-medium text-xl'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
};

export default Navbar;
