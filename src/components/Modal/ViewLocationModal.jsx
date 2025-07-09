
import { Button, Description, Dialog, DialogPanel, DialogTitle, Field, Label, Transition, TransitionChild }
  from '@headlessui/react'
import { Fragment, useState } from 'react'

import MapView from '../Dashboard/MapView/MapView'


const ViewLocationModal = ({ latitude,
  longitude }) => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={open}
        className="rounded-md bg-green-600 px-2 py-1 text-xs font-normal text-white 
        focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
      >
        View
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}>

          <TransitionChild
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            as={Fragment}>
            <div
              className="fixed inset-0 bg-black/30"
              onClick={() => setIsOpen(false)}
            />
          </TransitionChild>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
                as={Fragment}>
                <DialogPanel

                  className="w-full max-w-xl rounded-xl h-[600px] bg-white p-6 backdrop-blur-2xl duration-300 ease-out shadow-lg "
                >
                  <DialogTitle
                    as="h3" className="text-2xl/8 text-green-700 font-medium text-center uppercase">
                    Delivery Address 
                    <p><span className='text-xs'>latitude: {latitude} && longitude: {longitude}</span></p>
                   
                  </DialogTitle>

                  <MapView
                    latitude={latitude}
                    longitude={longitude} />

                </DialogPanel>

              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>


    </>
  )
}
export default ViewLocationModal;