import { useState } from "react";

const form = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    depart: "",
    return: "",
    travelers: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to API
    console.log(formData);
    setFormData({
      from: "",
      to: "",
      depart: "",
      return: "",
      travelers: "",
      cabinClass: "",
    });
  };

  return (
    <>
      <section className="container mx-auto py-6 sm:px-2 flex">
        <form
          onSubmit={handleSubmit}
          className=" rounded-lg p-8 shadow-md text-black"
        >
          <div className="flex flex-wrap xl:flex-nowrap gap-2 justify-center align-middle items-center bg-white lg:px-6 my-3 rounded-xl">
            <div className="from-to flex gap-2 w-72 lg:w-96 ">
              <div className=" rounded-2xl p-3  lg:w-48">
                <div>
                  <select
                    name="from"
                    id="from"
                    value={formData.from}
                    onChange={handleChange}
                    className="w-full p-2 rounded-xl outline-none  text-black border border-gray-400 block "
                    required
                  >
                    <option value="">Form</option>
                    <option value="new_york">New York</option>
                    <option value="london">London</option>
                    <option value="paris">Paris</option>
                    <option value="tokyo">Tokyo</option>
                  </select>
                </div>
              </div>

              <div className=" rounded-2xl p-3 lg:w-48">
                <div>
                  <select
                    value={formData.to}
                    onChange={handleChange}
                    className="w-full p-2 rounded-xl outline-none text-black border border-gray-400 "
                    name="to"
                    id="to"
                    required
                  >
                    <option value="">To</option>
                    <option value="new_york">New York</option>
                    <option value="london">London</option>
                    <option value="paris">Paris</option>
                    <option value="tokyo">Tokyo</option>
                  </select>
                </div>
              </div>
            </div>

            <div className=" rounded-2xl p-3 w-72 lg:w-52 ">
              <input
                placeholder=" Depart Date"
                type="text"
                id="depart"
                name="depart"
                value={formData.depart}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-xl outline-none text-black border border-gray-400 "
              />
            </div>

            <div className=" rounded-2xl p-3 w-72 lg:w-52 ">
              <input
                placeholder="Return Date"
                type="text"
                id="return"
                name="return"
                value={formData.return}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-xl outline-none text-black border border-gray-400 "
              />
            </div>
            <div className=" rounded-2xl p-3 w-72 lg:w-52 ">
              <input
                type="text"
                id="travelers"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md outline-none text-black border border-gray-400"
                placeholder="Travelers & Cabin Class"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Send Query"
                className="w-full p-2 rounded-2xl outline-none bg-blue-600 hover:text-blue-500 duration-1000 hover:bg-transparent text-white border border-gray-400 "
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default form;
