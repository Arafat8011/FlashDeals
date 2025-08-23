import { MdClose } from "react-icons/md";

type PropsType = {
  toggle: () => void
}

const Cart = ({ toggle }: PropsType) => {
  return (
    <section className="fixed right-0 top-0 h-[100vh] bottom-56 w-[400px] z-999 duration-300 ease-in-out transition-transform bg-fg" >
      <div className="h-full shadow">
        <div className="w-full text-bg bg-gray-600 shadow ">
          <div className="my-auto  flex justify-between">
            <h3 className="font-bold py-3 px-4 flex items-center gap-x-px">Total
              <span className=" scale-75 p-1.5 mx-1 bg-red-500 flex items-center justify-center rounded-full font-bold leading-none text-white">
                {/* TODO: Cart Counter state replace here*/}
                0</span>
            </h3>
            <div className="my-auto py-3 px-4 hover:bg-gray-500" onClick={() => toggle()} >
              <MdClose size={25} />
            </div>
          </div>
        </div>
        <div className="h-full px-4 text-amber-100">
          Body
        </div>
      </div>
    </section >
  )
}

export default Cart;
