
import { Button, Description, Dialog, DialogPanel, DialogTitle, Field, Label, Transition, TransitionChild } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '../Shared/LoadingSpinner'
import useAllDeliveryMen from '../../hooks/useAllDeliveryMen'


const ReviewModal = ({ id, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
 const {deliveryMen, isLoading, error} = useAllDeliveryMen();
  const [selected, setSelected] = useState(null);

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  console.log(deliveryMen)


  if (isLoading) return <LoadingSpinner />


  const handleManage = async (e) => {
    //  phone_number: phoneNumber,
    e.preventDefault();
    const form = e.target;
    const expected_delivery_date = form.expectedDeliveryDate.value;
    const delivery_man = selected._id;
    console.log("admin assignment",{ expected_delivery_date, delivery_man });
   
    if (!selected._id) {
      Swal.fire({
        icon: 'warning',
        text: 'Please select a delivery man.'
      });
      return;
    }
    const today = new Date();
    const date= new Date(expected_delivery_date);

    if (date - today <1){
      Swal.fire({
        icon: 'warning',
        text: 'Oops!!! Delivery will require at least 1 day!'
      });
      return;
    }

    axiosSecure.patch(`/book-a-parcel/${id}`, {
      status: 'On The Way',
      delivery_man_ID: selected?._id,
      expected_delivery_date
    })
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
           refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User's booking has been updated",
            showConfirmButton: false,
            timer: 1500
          })
         
          // navigate('/dashboard/my-Parcels');
          form.reset();
          close();
          setSelected(null);
        }
      })
  }



  return (
    <>
      <button
        onClick={open}
        className="rounded-md bg-green-600 px-2 py-1 text-xs font-normal text-white 
        focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
      >
        Manage
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

                  className="w-full max-w-md rounded-xl h-[400px] bg-white p-6 backdrop-blur-2xl duration-300 ease-out shadow-lg "
                >
                  <DialogTitle
                    as="h3" className="text-2xl/8 text-green-700 font-medium text-center uppercase">
                    Update
                  </DialogTitle>


                  <div className='mt-4 w-full z-30 relative'>
                    <form onSubmit={handleManage} className="card-body">
                      <Field>
                        <Label className="pl-2">Assign a delivery man:</Label>

                        <Listbox name="assignee" value={selected} onChange={setSelected}>
                          <ListboxButton
                            className={clsx(
                              'relative block w-full rounded-lg bg-gray-200 py-1.5 pr-8 pl-3 text-left text-sm/6 text-black',
                              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
                            )}
                          >
                            {selected?.name || 'Select a Delivery man:'}
                            <ChevronDownIcon
                              className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black"
                              aria-hidden="true"
                            />
                          </ListboxButton>
                          <ListboxOptions
                            anchor="bottom end"
                            transition
                            className={clsx(
                              'w-[20%] absolute z-40 rounded-xl border border-white/5 bg-gray-300 p-1 focus:outline-none',
                              'transition duration-100 ease-in data-leave:data-closed:opacity-0'
                            )}
                          >
                            {deliveryMen.map((person) => (
                              <ListboxOption
                                key={person._id}
                                value={person}
                                className="group text-black flex cursor-default
                          items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
                              >
                                {({ focus, selected }) => (
                                  <div className={clsx('flex gap-2', focus && 'bg-blue-100')}>
                                    <CheckIcon className={clsx('size-5', !selected && 'invisible')} />
                                    {person.name}
                                  </div>
                                )}
                              </ListboxOption>
                            ))}
                          </ListboxOptions>
                        </Listbox>
                      </Field>


                      <div className="w-full max-w-md">

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Expected Delivery Date:</span>
                          </label>
                          <input
                            name="expectedDeliveryDate"
                            type="date" placeholder="Requested Delivery Date" className="input input-bordered" required />
                        </div>

                      </div>
                      <div className="mt-6 flex gap-4 justify-between w-full">


                        <Button
                          type='submit'
                          className="inline-flex items-center gap-2 rounded-md bg-green-300 px-3 py-1.5 text-sm/6 font-semibold text-green-800 shadow-inner shadow-white/10 
                     w-full justify-center
                     focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                        >Assign</Button>

                        <Button
                          className="inline-flex items-center gap-2 rounded-md bg-gray-300 px-3 py-1.5 text-sm/6 font-semibold text-gray-800 shadow-inner shadow-white/10  w-full justify-center    focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                          onClick={() => setIsOpen(false)}>Close</Button>
                      </div>

                    </form>
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
export default ReviewModal;