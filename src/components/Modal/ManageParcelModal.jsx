
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { Fragment, useState } from 'react'

const ManageParcelModal = () => {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-green-600 px-2 py-1 text-xs font-normal text-white 
        focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
      >
        Manage
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen} as="div"
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

                  className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out shadow-lg "
                >
                  <DialogTitle
                    as="h3" className="text-base/7 font-medium text-center">
                     Update 
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-white/50">
                    Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                    order.
                  </p>
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                      onClick={close}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </DialogPanel>

              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default ManageParcelModal;