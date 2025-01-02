import Image from "next/image";
import React from "react";

interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  image: string;
  quantity: number;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  cart: Product[];
  form: {
    name: string;
    email: string;
    address: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  cart,
  form,
  handleInputChange,
}) => {
  if (!isOpen) return null;

  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative max-h-[80vh] overflow-y-auto transform transition-all">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-center"
        >
          &times;
        </button>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          ChectOut
        </h2>
        <div className="mb-8">
          <h3 className="text=2xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h3>
          {cart.length === 0 ? (
            <p className="text-gray-600 text-center">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between mb-4"
                >
                  <div>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={100}
                      height={100}
                      className="w-28 h-28 object-cover"
                    />
                  </div>
                  <div className="flex-grow ml-10">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {product.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Price: ${product.price.toFixed(2)}{" "}
                    </p>
                    <p className="text-gray-600">
                      Quantity : {product.quantity}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Subtotal: ${(product.price * product.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              <div className="text-2xl font-bold text-gray-900">
                Total: ${calculateTotal()}
              </div>
            </div>
          )}
        </div>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
              className="w-full p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="w-full p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleInputChange}
              placeholder="Address"
              required
              className="w-full p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white py-3 px-6 rounded-lg w-full text-lg font-semibold transition-all"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;